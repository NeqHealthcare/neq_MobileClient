/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 31.03.12
 * Time: 22:06
 * To change this template use File | Settings | File Templates.
 */

/* - Basic Definition ---------------------------------------------------------------------------------- */

Ext.define('NeqMobile.controller.PatientView', {
    extend:'Ext.app.Controller',
    requires:['NeqMobile.view.patient.create.CreateDiagnose', 'Ext.DateExtras','NeqMobile.view.patient.create.Procedure'],

    config:{
        stores:['Documents','LabTestRequests','LabResults','Diagnoses','Patients', 'VitalData','DiseaseType','Procedure'],

        refs:{
            patientview:'patientview',
            workspace:'workspace',
            diagnoseoverlay:'createnewdiagnoseoverlay',
            diseasetype: 'diseasetype',
            procedure: 'procedure'
        },

        control:{
            'workspace patientlist list':{select:'onPatientSelect'},
            'diagnosescontainer #createNewDaignosebutton':{
                tap:'onCreateNewDiagnoseTap'
            },
            'createnewdiagnoseoverlay #submitDiagnoseButton':{tap: 'onSubmitNewDiagnoseTap'},
            'createnewdiagnoseoverlay #toppart #diseaseInfo #diseasebutton':{tap: 'onDiseaseTypeSelect'},
            'diseasetype #diseaselist':{select:'onDiseaseSelect'},
            'diseasetype #diseasesearchfield':{keyup:'doFilter'},
            'diseasetype #refreshbutton':{tap:'onTapRefreshButton'},
            'createnewdiagnoseoverlay #toppart #therapy #pcdbutton':{tap: 'onProcedureSelect'},
            'procedure #pcdlist': {select: 'onDProcedureListSelect'}
        },
        // enables calling a view directly by address
        routes:{
            'patient/:id':'showPatient',
            'patient/:id/lab/:resultid':'showPatientLab'
            //'patient/:id/' route zu den patientBildern / Röntegenaufnahmen etc
        },

        before:{
        } },

/* - Functions ---------------------------------------------------------------------------------- */




// Create initial view - show Patient startscreen
    createPatientView:function () {
        if (this.getPatientview() === null || this.getPatientview() === undefined) {
            console.log('creating Patient View Container');
            var patientview = new NeqMobile.view.patient.PatientView;
            patientview.setActiveItem(1);
        }
    },
    // show patient details after selecting patient from patientlist
    onPatientSelect:function (list, patientrecord, options) {
        console.log('on patient select called');
        this.redirectTo(patientrecord);
    },
    //
    showPatient:function (id) {
        console.log('showing patient');
        this.createPatientView();
        this.getWorkspace().down('#dashboardcontainer').setActiveItem(this.getPatientview());
        this.loadPatientData(id);
    },
    //
    showPatientLab:function (id,resultid) {
        this.showPatient(id);
        this.getPatientview().setActiveItem(this.getPatientview().down('patientlab'));
     //  var patientlabcontroller = this.getApplication().getController('PatientLab');
    },
    //
    loadPatientData:function (patientid) {
        // < var definitions
        var me = this;
        NeqMobile.manager.Session.setCurrentPatient(patientid);
        var patientview = this.getPatientview();
        var vitaldataview = patientview.down('patienthistoricdata');
        var patientdashboard = patientview.down('patientdashboard');
        //  var definitions >
        var patientinfoimages = patientview.down('patientinfoimages');

        var dashboardcounter = 0;
        var finishcounterInfoimages = 0;
        var finishwaiter = function (viewtype) {
            if (viewtype === 0) {
               dashboardcounter++;
                if (dashboardcounter === 3) {
                    patientdashboard.setMasked(false);
                }

            } else if (viewtype === 2) {
                finishcounterInfoimages++;
                if (finishcounterInfoimages === 1) {
                    patientinfoimages.setMasked(false);
                }
            }
        }


        var patientinfo = Ext.getStore('patients').getById(patientid);
        patientdashboard.loadPatientHeader(patientinfo);




        patientdashboard.setMasked({xtype:'loadmask', message:'loading patient details', transparent:true});
        patientinfoimages.setMasked({ xtype:'loadmask', message:'loading patient documents'});

        var documentstore = Ext.data.StoreManager.lookup('documents');

        if (!documentstore) {
            documentstore = Ext.create('NeqMobile.store.Documents');
        }

        documentstore.getProxy().setExtraParam('id', patientid);

        documentstore.load({
            callback:function (records, operation, success) {
                patientinfoimages.loadDocument(documentstore);
                finishwaiter(2);
            },
            scope:this
        });


        var diagnosestore = Ext.data.StoreManager.lookup('diagnoses');
        if (!diagnosestore) {
            diagnosestore = Ext.create('NeqMobile.store.Diagnoses');
        }
        diagnosestore.getProxy().setExtraParam('id', patientid);
        diagnosestore.load({
            callback:function (records, operation, success) {
                patientdashboard.loadDiagnoses(diagnosestore);
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
                patientdashboard.loadVaccinations(vaccinationstore);
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
                patientdashboard.loadMedications(medicationstore);
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
                patientview.down('patientlab').loadLabTestRequests(responseObject);
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
                patientview.down('patientlab').loadLabResults(labresultstore);
            },
            scope:this
        });

       var vitaldatastore = Ext.data.StoreManager.lookup('vitaldata');
        if (!vitaldatastore) {
            vitaldatastore = Ext.create('NeqMobile.store.VitalData');
        }
        var date = new Date();
        //alert(Ext.Date.format(date, 'j/d/Y'));
        vitaldatastore.getProxy().setExtraParam('patientId', patientid);
        vitaldatastore.getProxy().setExtraParam('end_Date', Ext.Date.format(date, 'd.m.Y'));
        date = Ext.Date.add(date, Ext.Date.DAY, -360);
        vitaldatastore.getProxy().setExtraParam('start_Date', Ext.Date.format(date, 'd.m.Y') );

        vitaldatastore.load({
            callback:function (records, operation, success) {
                patientview.down('patienthistoricdata').loadPatientHistoricData(vitaldatastore);
            },
            scope:this
        });

         },

        onCreateNewDiagnoseTap:function (button, e, eOpts) {
            var diagnoseoverlay;
            if (this.getDiagnoseoverlay()) {
                diagnoseOverlay = this.getDiagnoseoverlay();
            } else {
                diagnoseOverlay = Ext.create('NeqMobile.view.patient.create.CreateDiagnose');
            }

            var physicianname= diagnoseOverlay.down('#middlepart').down('#diagnoseInfo').down('#physicianSelectfield');
            physicianname.setValue(((NeqMobile.manager.Session.getSession()).get('userinfo')).get('name'));

//            var procedures = Ext.data.StoreManager.lookup('procedure');
//            if (!procedures) {
//                procedures = Ext.create('NeqMobile.store.Procedure');
//            }
//             procedures.load({
//                callback:function (records, operation, success) {
//                    diagnoseOverlay.down('#toppart').down('#therapy').down('#pcd_code').setStore(procedures);
//
//                },
//                scope:this
//            });


            this.overlay = Ext.Viewport.add(diagnoseOverlay);
            this.overlay.show();

        },

        onSubmitNewDiagnoseTap:function (button, e, eOpts) {
            this.getDiagnoseoverlay().setHidden(true);
            var me = this;
            //disease Code
            var diagnoseoverlay = this.getDiagnoseoverlay();
            var extra_info = diagnoseoverlay.down('#extrainfo').getValue();
            if (!extra_info){
                extra_info = false;
            }
            var toppart = diagnoseoverlay.down('#toppart');
            var diseaseInfo = toppart.down('#diseaseInfo');
            var pathology = diseaseInfo.down('#pathology').getValue();
            var status = diseaseInfo.down('#status').getValue();
            var disease_severity = diseaseInfo.down('#disease_severity').getValue();
            var is_infectious = diseaseInfo.down('#is_infectious').getValue();
            var is_active = diseaseInfo.down('#is_active').getValue();
            var therapy = toppart.down('#therapy');
            var is_on_treatment = therapy.down('#is_on_treatment').getValue();
            var treatment_description = therapy.down('#treatment_description').getValue();
            if (!treatment_description){
                treatment_description = false;
            }
            var date_start_treatment = therapy.down('#date_start_treatment').getValue().getTime();
            var date_stop_treatment = therapy.down('#date_stop_treatment').getValue().getTime();

            var middlepart = diagnoseoverlay.down('#middlepart');
            var diagnoseInfo = diagnoseoverlay.down('#diagnoseInfo');
            var diagnosed_date = diagnoseInfo.down('#diagnosed_date').getValue().getTime();
            var age = diagnoseInfo.down('#age').getValue();
            var healed_date = diagnoseInfo.down('#healed_date').getValue().getTime();

            var allergies = diagnoseoverlay.down('#allergies');
            var is_allergy = allergies.down('#is_allergy').getValue();
            var allergy_type = allergies.down('#allergy_type').getValue();
            if (!allergy_type){
                allergy_type = false;
            }
            var pregnancy_warning = allergies.down('#pregnancy_warning').getValue();
            var weeks_of_pregnancy = allergies.down('#weeks_of_pregnancy').getValue();

            var doctor = (NeqMobile.manager.Session.getSession()).get('userinfo').get('id');
            var patient_id = NeqMobile.manager.Session.getCurrentPatient();
            var shortComment = false;
            var pcs_code = false;
            var newDisease = Ext.create('NeqMobile.model.Diagnose', {
                status: status,
                is_allergy:is_allergy,
                doctor: doctor,
                pregnancy_warning:pregnancy_warning,
                age:age,
                weeks_of_pregnancy:weeks_of_pregnancy,
                date_start_treatment:date_start_treatment,
                short_comment:shortComment,
                is_on_treatment:is_on_treatment,
                is_active:is_active,
                diagnosed_date:diagnosed_date,
                treatment_description:treatment_description,
                healed_date:healed_date,
                date_stop_treatment:date_stop_treatment,
                pcs_code:pcs_code,
                pathology:pathology,
                allergy_type:allergy_type,
                disease_severity:disease_severity,
                is_infectious:is_infectious,
                extra_info:extra_info,
                patient_id:patient_id
            });
            newDisease.save({
                    success:function (newDisease) {
                        console.log("diagnose successfully saved");
                        var diagnosestore = Ext.data.StoreManager.lookup('newdiagnoses');
                        if (!diagnosestore) {
                            diagnosestore = Ext.create('NeqMobile.store.NewDiagnose');
                        }
                        diagnosestore.load({
                            callback:function (records, operation, success) {
                                var response = operation.getResponse();
                                var responseObject = Ext.decode(response.responseText);
                                me.getPatientview().loadNewDiagnose(responseObject);
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

                    }
            })
        },

        onDiseaseTypeSelect: function(button, e, eOpts){
            var diseasetypeoverlay;
            if (this.getDiseasetype()) {
                diseasetypeoverlay = this.getDiseasetype();
            }
            else {
                diseasetypeoverlay = Ext.create('NeqMobile.view.patient.create.DiseaseType');
            }

            var diseasetypestore = Ext.data.StoreManager.lookup('diseasetypes');
            if (!diseasetypestore) {
                diseasetypestore = Ext.create('NeqMobile.store.DiseaseType');
            }
           diseasetypestore.load({
                callback:function (records, operation, success) {
                    diseasetypeoverlay.down('#diseaselist').setStore(diseasetypestore);

                },
                scope:this
            });
            this.overlay = Ext.Viewport.add(diseasetypeoverlay);
            this.overlay.show();
        },
        onDiseaseSelect: function(list, record, eOpts){
            var selectedDisease = this.getDiseasetype().down('#diseaselist').getSelection()[0];
            this.getDiagnoseoverlay().down('#toppart').down('#diseaseInfo').down('#diseasename').down('#diseasefield').setValue(selectedDisease.get('name'));
            this.getDiagnoseoverlay().down('#toppart').down('#diseaseInfo').down('#diseasename').down('#pathology').setValue(selectedDisease.get('id'));
            this.getDiseasetype().setHidden(true);
        },

        doFilter:function (searchfield, e, eOpts) {
        var store = Ext.data.StoreManager.lookup('diseasetypes');
        var searchstring = Ext.String.trim(searchfield.getValue());
        searchstring = searchstring.replace(/\s+/g, '|')
        store.clearFilter();
        store.filter(
            {filterFn:function (item) {
                var name = item.get('name');
                var code = item.get('code');
                var searchexpr = new RegExp(searchstring, 'i');
                if (searchexpr.test(name) || searchexpr.test(code)) {
                    return true
                }
                else {
                    return false
                }
            }}
        );

    },
        onTapRefreshButton:function (button, e, eOpts) {
            var store = Ext.data.StoreManager.lookup('diseasetypes');
            store.load({
                callback:function (records, operation, success) {
                    this.doFilter(this.getWorkspace().down('patientlist searchfield'));
                },
                scope:this
            });
        },

        onProcedureSelect: function (button, e, eOpts){
            var procedureoverlay;
            if (this.getProcedure()) {
                procedureoverlay = this.getProcedure();
            }
            else {
                procedureoverlay = Ext.create('NeqMobile.view.patient.create.Procedure');
            }

            var procedurestore = Ext.data.StoreManager.lookup('procedures');
            if (!procedurestore) {
                procedurestore = Ext.create('NeqMobile.store.Procedure');
            }
            procedurestore.load({
                callback:function (records, operation, success) {
                    procedureoverlay.down('#pcdlist').setStore(procedurestore);

                },
                scope:this
            });
            this.overlay = Ext.Viewport.add(procedureoverlay);
            this.overlay.show();
        },
        onDProcedureListSelect: function(list, record, eOpts){
            var selectedProcedure = this.getProcedure().down('#pcdlist').getSelection()[0];
            this.getDiagnoseoverlay().down('#toppart').down('#therapy').down('#procedure').down('#pcs_code').setValue(selectedProcedure.get('description'));
            this.getProcedure().setHidden(true);
        }

}

);