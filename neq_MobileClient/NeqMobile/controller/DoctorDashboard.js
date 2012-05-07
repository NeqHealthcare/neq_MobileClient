/**
 * Created with IntelliJ IDEA.
 * User: geekflyer
 * Date: 05.04.12
 * Time: 00:05
 * To change this template use File | Settings | File Templates.
 */

/* - Basic Definitions of DoctorDashboard Controller ------------------------------------------------------------- */

Ext.define('NeqMobile.controller.DoctorDashboard', {
    extend:'Ext.app.Controller',
    requires:[ 'NeqMobile.util.Renderer', 'NeqMobile.store.Appointment'],

    config:{

        /* - References ---------------------------------------------------------------------------------- */
        refs:{
            doctordashboard:'doctordashboard',
            workspace:'workspace',
            appointment:'appointment',
            doctornews:'doctornews',
            doctornewstopics : 'doctornewstopics',
            doctornewsfeeddetail : 'doctornewsfeeddetail'
        },

        /* - Used Stores ---------------------------------------------------------------------------------- */
        stores: ['Appointment', 'DoctorNews', 'DoctorNewsTopics'],

        /* - Eventlistener ---------------------------------------------------------------------------------- */
        control:{
            //   'workspace patientlist list':{select:'someFunc'},
            'workspace #homebutton':{tap:'onHomeTap'},
            //   'workspace doctordashboard touchgridpanel'ui:{itemtap:'onLabtestTap'},
            'workspace doctordashboard #doctordashboardlab':{beforeitemexpand:'onLabtestTap'},
            'workspace appointment selectfield':{
                change:'onappointmentcountchange'
            },
            'workspace doctornews selectfield': {
                change:'onDoctorNewsTopicChange'
            }

        },

        /* - Document/Site Routing Definitions ------------------------------------------------------------------- */
        routes:{
            'doctordashboard':'switchtohome'
        },

        /* - ? dont know whats that ?  --------------------------------------------------------------------------- */
        pollFn:undefined
    },

    /* - Initializing Function - Starts when Controller gets called ---------------------------------------------- */
    init:function () {
        var me = this;

        Ext.Viewport.on('login', this.startpolling, me);
        Ext.Viewport.on('logout', this.stoppolling, me);
    },

/* - Basic Functions/Events --------------------------------------------------------------------------------------- */

    onHomeTap:function () {
        this.redirectTo('doctordashboard');
    },

    switchtohome:function (button, e, eOpts) {
        var workspace = this.getWorkspace();
        workspace.down('#dashboardcontainer').setActiveItem(workspace.down('doctordashboard'));
        this.refreshnewlabresults();
        this.refreshdoctorinfo();
        this.showAppointments();
        this.showDoctorNewsTopics();
        this.showDoctorNews();
    },

/* - DoctorInfo Headerinformation Functions/Events ---------------------------------------------------------------- */

    refreshdoctorinfo:function () {
        var userinforecord = NeqMobile.manager.Session.getSession().get('userinfo');

        this.getDoctordashboard().down('doctorheader').setRecord(userinforecord);
        this.getDoctordashboard().down('#doc_last_login').setValue(
            NeqMobile.util.Renderer.daterenderer(userinforecord.get('last_login')));

        console.log("userinfodata 1: " + userinforecord.get('name') + ' ' + userinforecord.get('id')
            + ' ' + userinforecord.get('physician_id') + ' ' + userinforecord.get('image_url')
            + ' ' + userinforecord.get('number_of_patients') + ' '
            + NeqMobile.util.Renderer.daterenderer(userinforecord.get('last_login')));
    },

/* - DoctorNews Functions/Events ---------------------------------------------------------------------------------- */

    showDoctorNewsTopics: function (){
        var me = this;
        var session = NeqMobile.manager.Session.getSession();
        var doctornewstopicsstore = Ext.data.StoreManager.lookup('doctornewstopics')

        if (!doctornewstopicsstore) {doctornewstopicsstore = Ext.create('NeqMobile.store.DoctorNewsTopics')}

        me.getDoctordashboard().down('#doctornewsfeedtopicselectfield').setStore(doctornewstopicsstore);

        doctornewstopicsstore.load({
            params:{session:session.get('sessionId')}
        });
    },

    showDoctorNews: function(){
        var me = this;
        var session = NeqMobile.manager.Session.getSession();
        var doctornewsstore = Ext.data.StoreManager.lookup('doctornews');
        var selectfield = me.getDoctordashboard().down('#doctornewsfeedtopicselectfield');
        var count = 10
        // var id = selectfield.getValue();
        var id = 1
        //var doctordash = DoctorDashboard.down('doctordashboard');

        if (!doctornewsstore) {doctornewsstore = Ext.create('NeqMobile.store.DoctorNewsStore');}

        me.getDoctordashboard().down('#hospitaldoctornews').setStore(doctornewsstore);

        // needs session + id(id of topic selected) + count(number of entries to show)
        doctornewsstore.getProxy().setExtraParam('id', id);
        doctornewsstore.getProxy().setExtraParam('count', count);

        doctornewsstore.load({
            params:{session:session.get('sessionId'), id:id, count:count}//,
            //callback:function (records, operation, success) {
            //    doctordash.loadDoctorNews(doctornewsstore);
            //    finishwaiter(0);
            //},
            //scope:this
        });
    },

    // What to do when different NewsTopic is selected
    onDoctorNewsSelect:function (list, appointmentrecord, options) {

    },

    // load new scope of news according to selected topic
    onDoctorNewsTopicChange:function (){

    },

/* - LabTest Functions/Events ---------------------------------------------------------------------------------- */

    onLabtestTap:function (expandfeature, dw, index, item, labrecordoverview, e, eOpts) {
        console.log('labtest on doctordashboard tapped');
        this.showLabResultDetail(dw, labrecordoverview.get('id'), item, labrecordoverview);
        record.markAsRead();
    },

    showLabResultDetail:function (dw, labresultid, item, labrecordoverview) {

        console.log(dw);
        var me = this;
        var labdetailmodel = Ext.ModelMgr.getModel('NeqMobile.model.LabDetail');
        var detailinstance;

        var somefunc = function () {

            detailinstance = Ext.create('NeqMobile.view.patient.detail.LabDetail',
                {
                    //   record:labdetailrecord
                });


            var gotopatientbutton = Ext.create('Ext.Button',
                {
                    iconMask:true,
                    iconCls:'action',
                    text:'Open Patient',
                    width:200,
                    docked:'top',
                    handler:function () {
                        item.expanded = false;
                        me.redirectTo('patient/' + labrecordoverview.get('patient'));
                    }
                }
            );
            detailinstance.add(gotopatientbutton);
            dw.expandfeature.expand(dw, detailinstance, item);
        };

        somefunc();

        labdetailmodel.load(undefined, {
            params:{
                labTestId:labresultid
            },
            scope:me,
            success:function (labdetailrecord) {
                detailinstance.setRecord(labdetailrecord);

                var criteriastore = labdetailrecord.labtestcriteria();


                var myfn = function () {
                    labdetailtable = detailinstance.down('#labdetailtable');
                    labdetailtable.setStore(criteriastore);
                }

                var labdetailtable = detailinstance.down('#labdetailtable');
                if (!labdetailtable) {
                    Ext.defer(myfn, 100)
                }
                else (myfn());


            }
        });
    },

    stoppolling:function () {
        console.log('stopping polling');
        var pollFn = this.getPollFn();
        clearInterval(pollFn);
    },

    startpolling:function () {
        console.log('starting polling');
        var me = this;
        var session = NeqMobile.manager.Session.getSession();
        var pollurl = session.get('domain').getCoreURL() + '/labtest/watchlist/check';
        var pollFn = function () {
            Ext.Ajax.request({
                url:pollurl,
                method:'GET',
                scope:me,
                params:{session:session.get('sessionId'),

                    doctor_id:session.get('userinfo').get('physician_id')
                },
                success:function (response, opts) {
                    var obj = Ext.decode(response.responseText);
                    console.log('anzahl neuer labresults: ' + obj.data.length);
                    me.getWorkspace().down('#homebutton').setBadgeText(obj.data.length);
                }
            });
        }
        pollFn();
        pollFn = setInterval(pollFn, 60000);
        this.setPollFn(pollFn);
    },

    refreshnewlabresults:function () {
        var me = this;
        var mystore = Ext.data.StoreManager.lookup('newlabresults');
        if (!mystore) {
            mystore = Ext.create('NeqMobile.store.NewLabResults');
        }
        this.getDoctordashboard().down('#doctordashboardlab').setStore(mystore);
        mystore.load(
            {

                params:{doctor_id:NeqMobile.manager.Session.getSession().get('userinfo').get('physician_id')},

                callback:function () {
//                    console.log('trying to show newlab count')
//                     me.getWorkspace().down('#homebutton').setBadgeText(mystore.getCount());
                }
            }
        );
    },

/* - Appointments Functions/Events ---------------------------------------------------------------------------------- */

    onappointmentcountchange:function(selectfield, newValue, oldValue, eOpts ){
        console.log('changed number of appointments '+newValue);
        this.showAppointments();
    },

    showAppointments: function (){
        var me = this;
        var appointmentrequest = this.getAppointment();
        var selectfield = appointmentrequest.down('selectfield');
        var count = selectfield.getValue();
        var appointmentstore = Ext.data.StoreManager.lookup('appointments');
        if(!appointmentstore){
            appointmentstore = Ext.create('NeqMobile.store.Appointment');
        }
        appointmentstore.getProxy().setExtraParam('count',count);
        appointmentstore.load({
            callback: function (records, operation, success){
                this.getDoctordashboard().down('appointment').down('#appointmentlist').setStore(appointmentstore);
            },
            scope: this
        });
    },

    onAppointmentSelect:function (list, appointmentrecord, options) {

    },

/* - ChartsDemo Functions/Events ---------------------------------------------------------------------------------- */

    createchart:function () {
        var testchart = this.getDoctordashboard().down('testchart');
        testchart.setHeight(750);
//        testchart.setWidth(500);
        var mycircle = new Ext.draw.Component({
            items:[
                {
                    type:'circle',
                    fill:'#ffc',
                    radius:100,
                    x:100,
                    y:100
                }
            ]
        });

        testchart.setItems(mycircle);
    }
});
