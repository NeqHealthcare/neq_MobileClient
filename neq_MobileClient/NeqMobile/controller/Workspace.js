/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 14.01.12
 * Time: 02:57
 * To change this template use File | Settings | File Templates.
 */

var selectedPatient;

Ext.define('NeqMobile.controller.Workspace', {
        extend:'Ext.app.Controller',
        requires:['NeqMobile.view.Viewport', 'NeqMobile.store.Patients', 'NeqMobile.store.Diagnoses', 'NeqMobile.store.Vaccinations', 'NeqMobile.store.Medications', 'NeqMobile.model.LabTestRequest', 'NeqMobile.view.patient.create.CreateLabTestRequest','NeqMobile.store.LabResults'],
        config:{
            refs:{
                loginButton:'button[action=login]',
                patientInfo:'patientinfo',
                patientdashboard:'patientdashboard',
                doctordashboard:'doctordashboard',
                patientInfoContd1:'patientInfoContd1',
                patientListContainer:'Dashboard patientlist #patientListContainer',
                labTestRequestOverlay:'createlabtestrequestoverlay',
                labTestTypesList:'createlabtestrequestoverlay selectfield',
                patientlist:'patientlist',
                workspace:'workspace'
            },
            control:{
                'workspace #patientsearchfield':{
                    keyup:'doFilter'
                },
                'workspace patientlist list':{
                    select:'onPatientSelect'
                },
                'workspace patientlist #x-hidePatientListButton':{
                    tap:'onHideElementTap'
                },
                'patientInfoContd1 #x-createNewLabRequestButton':{
                    tap:'onCreateNewLabRequestTap'
                },
                'createlabtestrequestoverlay #x-submitLabTestRequestButton':{
                    tap:'onSubmitLabTestRequestTap'
                },
                'workspace patientlist #refreshbutton':{
                    tap:'onTapRefreshButton'
                },
                'patientdashboard #diagnoses':{itemexpanded:'onItemTap'},
                'patientdashboard #medications':{itemexpanded:'onItemTap'},
                'patientdashboard #vaccinations':{itemexpanded:'onItemTap'},
                'patientdashboard #labresult':{itemexpanded: 'onItemTap'},
                'workspace #homebutton':{tap:'switchtohome'}
            }
        },
        onHideElementTap:function (button, e, eOpts) {
            var patientListContainer = this.getPatientListContainer();
            if (patientListContainer.isHidden()) {
                patientListContainer.setHidden(false);
            } else {
                patientListContainer.setHidden(true);
            }
        },
        switchtohome:function (button, e, eOpts) {
            this.getWorkspace().down('#dashboardcontainer').setActiveItem(this.getDoctordashboard());
        },
        onTapRefreshButton:function () {
            var store = Ext.data.StoreManager.lookup('myPatientsStore');
            store.load({
                callback:function (records, operation, success) {
                    this.doFilter(this.getPatientlist().down('searchfield'));
                },
                scope:this
            });
        },
        onSubmitLabTestRequestTap:function (button, e, eOpts) {
            var me = this;

            var labTestRequestOverlay = this.getLabTestRequestOverlay();
            var fieldSet = labTestRequestOverlay.getComponent('createLabtestRequestFieldSet');
            var selectField = fieldSet.getComponent(0);
            var datePickerField = fieldSet.getComponent(1);

            var patient_id = selectedPatient.get('id');
            var state = 'draft';
            var rec_name = selectField.getValue();
            var request_type_id = selectField.getRecord().get('id');
            var doctor_rec_name = 'Gansen, Jan'; // needs to be changed as soon as the information is available
            var doctor_id = 1; // needs to be changed as soon as the information is available
            var date = datePickerField.getValue().getTime();

            var newRequest = Ext.create('NeqMobile.model.LabTestRequest', {
                patient_id:patient_id,
                state:state,
                rec_name:rec_name,
                doctor_rec_name:doctor_rec_name,
                date:date
            });
            newRequest.getProxy().setExtraParam('patient_id', patient_id);
            newRequest.getProxy().setExtraParam('request_type_id', request_type_id);
            newRequest.getProxy().setExtraParam('doctor_id', doctor_id);
            newRequest.getProxy().setExtraParam('date', date);
            newRequest.save({
                success:function (newRequest) {
                    console.log("request successfully saved");
                    var labtestrequeststore = Ext.data.StoreManager.lookup('labtestrequests');
                    if (!labtestrequeststore) {
                        labtestrequeststore = Ext.create('NeqMobile.store.LabTestRequests');
                    }

                    labtestrequeststore.getProxy().setExtraParam('patientId', patient_id);
                    labtestrequeststore.load({
                        callback:function (records, operation, success) {
                            var response = operation.getResponse();
                            var responseObject = Ext.decode(response.responseText);
                            me.getPatientInfoContd1().loadLabTestRequests(responseObject);
                        },
                        scope:this
                    });
                },
                failure:function (response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                    console.log('login failed - server not reachable')
                    Ext.Msg.alert('Server not responding', 'status code: ' + response.status + '<br>' +
                        'It occured a technical connection problem. Possible causes are:<br><br>' +
                        '1. The server ist not responding - check your network connection or the connection settings of the app (ask the administrator.)', Ext.emptyFn);

                    failureCallback.apply(scope);
                }

            });
            labTestRequestOverlay.setHidden(true);
        },
        onCreateNewLabRequestTap:function (button, e, eOpts) {
            var labTestRequestOverlay;
            if (this.getLabTestRequestOverlay()) {
                labTestRequestOverlay = this.getLabTestRequestOverlay();
            } else {
                labTestRequestOverlay = Ext.create('NeqMobile.view.patient.create.CreateLabTestRequest');
            }
            this.getPatientInfo().setMasked({ xtype:'loadmask', message:'loading parameters'});

            var labtesttypestore = Ext.data.StoreManager.lookup('labtesttypes');
            if (!labtesttypestore) {
                labtesttypestore = Ext.create('NeqMobile.store.LabTestTypes');
            }
            labtesttypestore.load({
                callback:function (records, operation, success) {
                    this.getLabTestTypesList().setStore(labtesttypestore);
                    this.getPatientInfo().setMasked(false);
                    this.overlay = Ext.Viewport.add(labTestRequestOverlay);
                    this.overlay.show();
                },
                scope:this
            });

        },
        doNothing:function () {
        },
        onItemTap:function (dw, index, item, record, e, eOpts, detailcont) {

            var me = this;

            var callback = function () {

                var myscroll = me.getPatientInfo().getScrollable().getScroller();
                var patientEl = me.getPatientInfo().element;
                var maxmove = item.getY() - patientEl.getY();
                var wantmove = maxmove + item.getHeight() - patientEl.getHeight();
                var tomove = wantmove;
                if (maxmove < wantmove) {
                    tomove = maxmove;
                }
                if (tomove > 0) {
                    myscroll.scrollBy(0, tomove, true);
                }
            }

            //   detailcont.on('painted', callback, me, { single:true });


            Ext.Function.defer(callback
                , 150, this);

        },
        onPatientSelect:function (list, patientrecord, options) {
            if (this.getPatientdashboard() === null || this.getPatientdashboard() === undefined)
           {   console.log('creating patient dashboard');
                new NeqMobile.view.patient.PatientDashboard;
           }
            this.getWorkspace().down('#dashboardcontainer').setActiveItem(this.getPatientdashboard());
            selectedPatient = patientrecord;
            var me = this;
            var patientinfo = this.getPatientInfo();
            var patientInfoContd1 = this.getPatientInfoContd1();
            var finishcounterInfo = 0;
            var finishcounterInfoContd1 = 0;
            var finishwaiter = function (viewtype) {
                if (viewtype == 0) {
                    finishcounterInfo++;
                    if (finishcounterInfo === 3) {
                        patientinfo.setMasked(false);
                    }
                } else if (viewtype == 1) {
                    finishcounterInfoContd1++;
                    if (finishcounterInfoContd1 === 1) {
                        patientInfoContd1.setMasked(false);
                    }
                }


            }

            if (patientinfo.isHidden()) {
                patientinfo.setHidden(false);
            }
            if (patientInfoContd1.isHidden()) {
                patientInfoContd1.setHidden(false);
            }
            var patientid = patientrecord.get('id');
            patientinfo.loadPatientHeader(patientrecord);

            patientinfo.setMasked({ xtype:'loadmask', message:'loading patient details'});
            patientInfoContd1.setMasked({ xtype:'loadmask', message:'loading patient details'});

            var diagnosestore = Ext.data.StoreManager.lookup('diagnoses');
            if (!diagnosestore) {
                diagnosestore = Ext.create('NeqMobile.store.Diagnoses');
            }
            diagnosestore.getProxy().setExtraParam('id', patientid);
            diagnosestore.load({
                callback:function (records, operation, success) {
                    patientinfo.loadDiagnoses(diagnosestore);
                    finishwaiter(0);
                },
                scope:this
            });


            var vaccinationstore = Ext.data.StoreManager.lookup('vaccinations');
            if (!vaccinationstore) {
                vaccinationstore = Ext.create('NeqMobile.store.Vaccinations');
            }
            vaccinationstore.getProxy().setExtraParam('patientId', patientid);
            vaccinationstore.load({
                callback:function (records, operation, success) {
                    patientinfo.loadVaccinations(vaccinationstore);
                    finishwaiter(0);
                },
                scope:this
            });


            var medicationstore = Ext.data.StoreManager.lookup('medications');
            if (!medicationstore) {
                medicationstore = Ext.create('NeqMobile.store.Medications');
            }

            medicationstore.getProxy().setExtraParam('patientId', patientid);
            medicationstore.load({
                callback:function (records, operation, success) {
                    patientinfo.loadMedications(medicationstore);
                    finishwaiter(0);

                },
                scope:this
            });

            var labtestrequeststore = Ext.data.StoreManager.lookup('labtestrequests');
            if (!labtestrequeststore) {
                labtestrequeststore = Ext.create('NeqMobile.store.LabTestRequests');
            }

            labtestrequeststore.getProxy().setExtraParam('patientId', patientid);
            labtestrequeststore.load({
                callback:function (records, operation, success) {
                    var response = operation.getResponse();
                    var responseObject = Ext.decode(response.responseText);
                    patientInfoContd1.loadLabTestRequests(responseObject);
                    finishwaiter(1);
                },
                scope:this
            });

            var labresultstore = Ext.data.StoreManager.lookup('labresults');
            if (!labresultstore) {
                labresultstore = Ext.create('NeqMobile.store.LabResults');
            }

                labresultstore.getProxy().setExtraParam('patientId', patientid);
                labresultstore.load({
                callback:function (records, operation, success) {
                    patientInfoContd1.loadLabResults(labresultstore);
                    finishwaiter(1);

                },
                scope:this
            });

        },
        doFilter:function (searchfield, e, eOpts) {
            var store = Ext.data.StoreManager.lookup('myPatientsStore');
            var searchstring = Ext.String.trim(searchfield.getValue());
            searchstring = searchstring.replace(/\s+/g, '|')
            store.clearFilter();
            store.filter(
                {filterFn:function (item) {
                    var name = item.get('rec_name');
                    var id = item.get('id');
                    console.log(name);
                    console.log(id);
                    var searchexpr = new RegExp(searchstring, 'i');
                    console.log(searchexpr);
                    if (searchexpr.test(name) || searchexpr.test(id)) {
                        return true
                    }
                    else {
                        return false
                    }
                }}
            );

        }
    }


);