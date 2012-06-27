/**
 * Created with IntelliJ IDEA.
 * User: geekflyer
 * Date: 05.04.12
 * Time: 00:05
 * To change this template use File | Settings | File Templates.
 */

/* - Basic Definitions of DoctorDashboard Controller ------------------------------------------------------------- */

Ext.define('NeqMobile.controller.UserView', {
    extend:'Ext.app.Controller',
    requires:[ 'NeqMobile.util.Renderer',
        'NeqMobile.store.Appointment',
        'org.cometd',
        'Ext.ux.CometD'],

    config:{
        /* - References ---------------------------------------------------------------------------------- */
        refs:{
            doctordashboard:'doctordashboard',
            chattercontainer:'chattercontainer',
            workspace:'workspace',
            appointment:'appointment',
            doctornews:'doctornews',
            doctornewstopics:'doctornewstopics',
            doctornewsfeeddetail:'doctornewsfeeddetail',
            appointmentview:'appointmentview',
            patientList:'workspace patientlist list',
            mainToolbar:'workspace #mainToolbar',
            viewholder:'viewholder'
        },

        /* - Used Stores ---------------------------------------------------------------------------------- */
        stores:['Appointment', 'DoctorNews', 'DoctorNewsTopics'],

        /* - Eventlistener ---------------------------------------------------------------------------------- */
        control:{
            //   'workspace patientlist list':{select:'someFunc'},
            'workspace #homebutton':{tap:'onHomeTap'},
            //   'workspace doctordashboard touchgridpanel'ui:{itemtap:'onLabtestTap'},
            'workspace doctordashboard #doctordashboardlab':{beforeitemexpand:'onLabtestTap'},
            'workspace appointment selectfield':{
                change:'onappointmentcountchange'
            },
            'workspace doctordashboard #doctornewsfeedtopicselectfield':{
                change:'onDoctorNewsTopicChange'
            },
            'workspace appointment appointmentview #appointmentlist':{
                select:'onAppointmentSelect'
            },
            'workspace appointment appointmentview #appointmentdetail button':{
                tap:'onAppointmentBackButton'
            },
            'userview #showUserDashboardIcon':{tap:'onTapShowUserDashboard'},
            'userview #showChatterIcon':{tap:'onTapShowCatterIcon'},
            userview:{activeitemchange:'onUserViewItemChange'}

        },

        /* - Document/Site Routing Definitions ------------------------------------------------------------------- */
        routes:{
            'userdashboard':'switchtouserdashboard',
            'chatter':'switchtochatter'
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

    newActiveItem:undefined,
    subscription:undefined,

    /* - Basic Functions/Events --------------------------------------------------------------------------------------- */

    onTapShowUserDashboard:function () {
        this.redirectTo('userdashboard');
    },
    onTapShowCatterIcon:function () {
        this.redirectTo('chatter');
    },


    onUserViewItemChange:function (container, newvalue, oldvalue, eOpts) {
        var me = this;
        me.newActiveItem = newvalue;
        if (newvalue instanceof NeqMobile.view.doctor.chatter.ChatterContainer) {
            this.redirectTo('chatter');
        } else if (newvalue instanceof NeqMobile.view.doctor.dashboard.DoctorDashboard) {
            if (oldvalue instanceof NeqMobile.view.doctor.chatter.ChatterContainer) {
                this.stopChatterSync();
            }
            this.redirectTo('userdashboard');
        } else if (oldvalue instanceof NeqMobile.view.doctor.chatter.ChatterContainer) {
            this.stopChatterSync();
        }
    },

    startChatterSync:function () {
        var cometd = Ext.cometd;
//        console.log('starting chatter sync');

        var channelurl = "/cometd/chatter";
//        cometd.publish(channelurl, {});
        this.subscription = cometd.subscribe(channelurl, function (message) {
            var values = (Ext.decode(message.data)).toString();
            var tempIds = new Array();
            tempIds = values.split(',');
            var userinfo = NeqMobile.manager.Session.getSession().get('userinfo');
            var doctor_id = (userinfo.get('id'));
            if (tempIds.indexOf(doctor_id) != -1) {
                var store = Ext.data.StoreManager.lookup('chatterPosts');
                store.load({
                    callback:function (records, operation, success) {
                        console.log('store reloaded');
                    },
                    scope:this
                });
            }

        });
    },

    stopChatterSync:function () {
        var cometd = Ext.cometd;
        cometd.unsubscribe(this.subscription);
    },

    onHomeTap:function () {
        this.redirectTo('userdashboard');
    },

    switchtochatter:function (button, e, eOpts) {
        var me = this;

        var viewholder = this.getViewholder();
        var userview = viewholder.down('userview');
        var userviewcontainer = viewholder.down('#userviewcontainer');
        var chatterContainer = me.getChattercontainer();

        this.getWorkspace().down('#contentcontainer').setActiveItem(viewholder);
        userviewcontainer.setActiveItem(userview);
        this.getMainToolbar().setTitle('Chatter');

        //   console.log('------ active item for chatter: '+me.newActiveItem);

        if (!(me.newActiveItem  instanceof NeqMobile.view.doctor.chatter.ChatterContainer)) {
            //      console.log('------ chatter is set as new active item through event');
            userview.setActiveItem(chatterContainer);

        }
        me.newActiveItem = undefined;
        chatterContainer.setMasked({xtype:'loadmask', message:'loading posts', transparent:true});
        var postStore = new NeqMobile.store.ChatterPosts(
            {
                storeId:'chatterPosts'
            }
        );
        postStore.load();
        chatterContainer.setMasked(false);
        chatterContainer.down('#chatterPostContainer').setStore(postStore);
        this.startChatterSync();
    },

    switchtouserdashboard:function (button, e, eOpts) {
        var me = this;
        var viewholder = this.getViewholder();
        var userview = viewholder.down('userview');
        var userviewcontainer = viewholder.down('#userviewcontainer');

        this.getPatientList().deselectAll();

        this.getWorkspace().down('#contentcontainer').setActiveItem(viewholder);
        userviewcontainer.setActiveItem(userview);
        this.getMainToolbar().setTitle('User Dashboard');

        //     console.log('------ active item for doctordashboard: '+me.newActiveItem);

        if (!(me.newActiveItem instanceof NeqMobile.view.doctor.dashboard.DoctorDashboard)) {
            userview.setActiveItem(this.getDoctordashboard());
            //     console.log('------ dashboard is set as new active item through event');
        }

        me.newActiveItem = undefined;

        this.refreshnewlabresults();
        this.refreshdoctorinfo();
        this.showAppointments();
        this.showDoctorNewsTopics();
        this.showDoctorNews(1, 10);
    },

    /* - DoctorInfo Headerinformation Functions/Events ---------------------------------------------------------------- */

    refreshdoctorinfo:function () {
        var userinforecord = NeqMobile.manager.Session.getSession().get('userinfo');

        this.getDoctordashboard().down('doctorheader').setRecord(userinforecord);
        this.getWorkspace().down('#doctorimage_big').setData({'image_url':userinforecord.get('image_url')});
        console.log(this.getWorkspace().down('#doctorimage_big'));
        this.getDoctordashboard().down('#doc_last_login').setValue(
            NeqMobile.util.Renderer.daterenderer(userinforecord.get('last_login')));

        console.log("userinfodata 1: " + userinforecord.get('name') + ' ' + userinforecord.get('id')
            + ' ' + userinforecord.get('physician_id') + ' ' + userinforecord.get('image_url')
            + ' ' + userinforecord.get('number_of_patients') + ' '
            + NeqMobile.util.Renderer.daterenderer(userinforecord.get('last_login')));
    },

    /* - DoctorNews Functions/Events ---------------------------------------------------------------------------------- */

    showDoctorNewsTopics:function () {
        var me = this;
        var session = NeqMobile.manager.Session.getSession();
        var doctornewstopicsstore = Ext.data.StoreManager.lookup('doctornewstopics')

        if (!doctornewstopicsstore) {
            doctornewstopicsstore = Ext.create('NeqMobile.store.DoctorNewsTopics')
        }

        me.getDoctordashboard().down('#doctornewsfeedtopicselectfield').setStore(doctornewstopicsstore);

        doctornewstopicsstore.load({
            params:{session:session.get('sessionId')}
        });
    },

    showDoctorNews:function (id, count) {
        var me = this;
        var session = NeqMobile.manager.Session.getSession();
        var doctornewsstore = Ext.data.StoreManager.lookup('doctornews');


        if (!doctornewsstore) {
            doctornewsstore = Ext.create('NeqMobile.store.DoctorNews');
        }

        me.getDoctordashboard().down('#hospitaldoctornews').setStore(doctornewsstore);

        // needs session + id(id of topic selected) + count(number of entries to show)
        doctornewsstore.getProxy().setExtraParam('id', id);
        doctornewsstore.getProxy().setExtraParam('count', count);

        doctornewsstore.load({
            params:{session:session.get('sessionId'), id:id, count:count}
        });
    },

    // load new scope of news according to selected topic
    onDoctorNewsTopicChange:function (field, value) {
        if (value instanceof Ext.data.Model) {
            value = value.get(field.getValueField());
        }
        console.log('Selectfield value changed to: ' + value);
        this.showDoctorNews(value, 10);
        return value;
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
//                    console.log('anzahl neuer labresults: ' + obj.data.length);
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

    onappointmentcountchange:function (selectfield, newValue, oldValue, eOpts) {
        this.showAppointments();
        console.log('changed number of appointments ' + newValue);
    },

    showAppointments:function () {
        var me = this;
        var appointmentrequest = this.getAppointment();
        var selectfield = appointmentrequest.down('selectfield');
        var count = selectfield.getValue();
        var appointmentstore = Ext.data.StoreManager.lookup('appointments');
        if (!appointmentstore) {
            appointmentstore = Ext.create('NeqMobile.store.Appointment');
        }
        appointmentstore.getProxy().setExtraParam('count', count);
        appointmentstore.load({
            callback:function (records, operation, success) {
                this.getDoctordashboard().down('appointment').down('appointmentview').down('#appointmentlist').setStore(appointmentstore);
            },
            scope:this
        });
        this.getAppointmentview().setActiveItem(0);
    },

    onAppointmentSelect:function (list, appointmentrecord, options) {
        var appointmentview = this.getAppointmentview();
        var appointmentDetail = appointmentview.down('#appointmentdetail');
        var selectedAppointment = appointmentview.down('#appointmentlist').getSelection()[0];
        appointmentDetail.down('#consultation').setValue(selectedAppointment.get('consultations_description'));
        appointmentDetail.down('#appointmenttime').setValue(selectedAppointment.get('appointment_date'));
        appointmentDetail.down('#patientname').setValue(selectedAppointment.get('patient_rec_name'));
        appointmentDetail.down('#speciality').setValue(selectedAppointment.get('speciality_rec_name'));
        appointmentDetail.down('#appointmenttype').setValue(selectedAppointment.get('appointment_type'));
        var urgencyLevel = NeqMobile.util.Renderer.urgencyrenderer(selectedAppointment.get('urgency_level'));
        appointmentDetail.down('#urgency').setValue(urgencyLevel);
        appointmentview.setActiveItem(1);

    },

    onAppointmentBackButton:function (button, e, eOpts) {
        this.getAppointmentview().setActiveItem(0);
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
