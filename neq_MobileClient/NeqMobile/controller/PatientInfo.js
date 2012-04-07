/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 31.03.12
 * Time: 22:06
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.controller.PatientInfo', {
    extend:'Ext.app.Controller',
    requires:[ 'NeqMobile.store.Patients'],
    config:{
        refs:{
            patientinfo:'patientinfo',
            workspace:'workspace'
        },
        control:{
            'workspace patientlist list':{select:'onPatientSelect'}
        },
        routes: {
            'patients/:id/dashboard/': 'showPatient'
        }
    },

    onPatientSelect:function (list, patientrecord, options) {

        if (this.getPatientinfo() === null || this.getPatientinfo() === undefined) {
            console.log('creating patient Info Container');
            new NeqMobile.view.patient.PatientInfo;
        }

        // < var definitions
        var patientinfo = this.getPatientinfo();
        var patientdashboard = patientinfo.down('patientdashboard');
        //  var definitions >


        this.getWorkspace().down('#dashboardcontainer').setActiveItem(this.getPatientinfo());
        selectedPatient = patientrecord;
        var me = this;
        var finishcounterInfo = 0;
        var finishwaiter = function () {
            finishcounterInfo++;
            if (finishcounterInfo === 3) {
                me.getPatientinfo().down('patientdashboard').setMasked(false);
            }
        };

        var patientid = patientrecord.get('id');
        patientdashboard.loadPatientHeader(patientrecord);

        patientdashboard.setMasked({xtype:'loadmask', message:'loading patient details',transparent:true});

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
                patientinfo.down('patientlab').loadLabTestRequests(responseObject);
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
                patientinfo.down('patientlab').loadLabResults(labresultstore);
            },
            scope:this
        });
    }

});