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
            patientlist:'patientlist list',
            mainToolbar:'workspace #mainToolbar',

            viewholder:{
                selector:'viewholder',
                xtype:'viewholder',
                autoCreate:true
            },
            userview:{
                selector:'userview',
                xtype:'userview',
                autoCreate:true
            }
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
            'workspace appointment #appointmentBackButton':{
                tap:'onAppointmentBackButton'
            },
            'userview #showUserDashboardIcon':{tap:'onTapShowUserDashboard'},
            'userview #showChatterIcon':{tap:'onTapShowCatterIcon'},
            userview:{activeitemchange:'onUserViewItemChange'},
            'workspace #chatterButton':{tap:'onTapShowCatterIcon'}

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
    newlabresultcount:undefined,

    /* - Basic Functions/Events --------------------------------------------------------------------------------------- */

    prepareUserView:function () {
    },


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

        var viewholder = me.getViewholder();
        var userview = me.getUserview();
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
        var viewholder = me.getViewholder();
        var userview = me.getUserview();

        var userviewcontainer = viewholder.down('#userviewcontainer');


        var plist = me.getPatientlist()

        if (plist) {
            console.log('plist does exist');
            plist.deselectAll();
        }

        console.log('activating viewholder');
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
        this.getWorkspace().down('#doctorimage').setData({'image_url':userinforecord.get('image_url')});
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
        labrecordoverview.markAsRead();
    },

    showLabResultDetail:function (dw, labresultid, item, labrecordoverview) {

        var me = this;
        var labdetailmodel = Ext.ModelMgr.getModel('NeqMobile.model.LabDetail');
        var detailinstance;

        detailinstance = Ext.create('NeqMobile.view.patient.detail.LabDetail');
        dw.expand(dw, detailinstance, item);

        labdetailmodel.load(undefined, {
            params:{
                labTestId:labresultid
            },
            scope:me,
            success:function (labdetailrecord) {
                detailinstance.setRecord(labdetailrecord);
                var criteriastore = labdetailrecord.labtestcriteria();
                console.log('calling mywaiter');
                //var i = 0;
                var checkavailability = function mywaiter() {
                    var labdetailtable = detailinstance.down('#labdetailtable');
                    if (labdetailtable) {
                        labdetailtable.setStore(criteriastore);
                        clearInterval(checkFn);
                    }
                }

                var checkFn = setInterval(checkavailability, 60);
            }
        })

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
                    if (me.newlabresultcount != obj.data.length && Ext.ComponentQuery.query('userview')[0])
                    {
                        me.refreshnewlabresults();
                    }
                }
            });
        }
        pollFn();
        pollFn = setInterval(pollFn, 10000);
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
        this.getDoctordashboard().down('appointment').down('appointmentview').down('#appointmentlist').setStore(appointmentstore);
        appointmentstore.load();
        this.getAppointmentview().setActiveItem(0);
    },

    onAppointmentSelect:function (list, appointmentrecord, options) {
        var appointmentview = this.getAppointmentview();
        var backButton = this.getAppointment().down('#appointmentBackButton');
        backButton.setHidden(false);
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
        var appointmentview = this.getAppointmentview();
        var backButton = this.getAppointment().down('#appointmentBackButton');
        backButton.setHidden(true);
        appointmentview.setActiveItem(0);
        //this.showAppointments();
        appointmentview.down('#appointmentlist').deselectAll();
    }
});
