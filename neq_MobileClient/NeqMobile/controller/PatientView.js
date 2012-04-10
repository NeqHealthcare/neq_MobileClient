/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 31.03.12
 * Time: 22:06
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.controller.PatientView', {
    extend:'Ext.app.Controller',
    requires:[ 'NeqMobile.store.Patients'],
    config:{
        refs:{
            patientview:'patientview',
            workspace:'workspace'
        },
        control:{
            'workspace patientlist list':{select:'onPatientSelect'},
            'patientview #diagnoses':{beforeitemexpand:'testtap'}
        },
        routes:{
            'patient/:id':'showPatient',
            'patient/:id/lab':'showPatientLab'
        },
        before:{
        } },

    testtap:function(expandfeature, dw, index, item, itemrecord, e, eOpts){

        //dw.expand(dw,index,item,itemrecord,e,eOpts);

        console.log('some item was tapped');

        expandfeature.expand(dw,index,item,itemrecord,e,eOpts);

    },
    createPatientView:function () {
        if (this.getPatientview() === null || this.getPatientview() === undefined) {
            console.log('creating Patient View Container');
            var patientview = new NeqMobile.view.patient.PatientView;
            patientview.setActiveItem(1);
        }
    },
    onPatientSelect:function (list, patientrecord, options) {
        console.log('on patient select called');
        this.redirectTo(patientrecord);
    },
    showPatient:function (id) {
        console.log('showing patient');
        this.createPatientView();
        this.getWorkspace().down('#dashboardcontainer').setActiveItem(this.getPatientview());
        this.loadPatientData(id);
    },
    showPatientLab:function (id) {
        this.showPatient(id);
        this.getPatientview().setActiveItem(this.getPatientview().down('patientlab'));
    },
    loadPatientData:function (patientid) {
        // < var definitions
        var me = this;
        NeqMobile.manager.Session.setCurrentPatient(patientid);
        var patientview = this.getPatientview();
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
        var patientmodel = Ext.ModelMgr.getModel('NeqMobile.model.Patient');
        patientmodel.load(patientid, {
            success:function (patientrecord) {
                patientdashboard.loadPatientHeader(patientrecord);
            }
        });
        patientdashboard.setMasked({xtype:'loadmask', message:'loading patient details', transparent:true});
        patientinfoimages.setMasked({ xtype:'loadmask', message:'loading patient documents'});

        var documentstore = Ext.data.StoreManager.lookup('documents');

        if (!documentstore) {
            documentstore = Ext.create('NeqMobile.store.Document');
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



    }

});