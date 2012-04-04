/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 31.03.12
 * Time: 22:06
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.controller.PatientDashboard', {
    extend:'Ext.app.Controller',
    requires:[ 'NeqMobile.store.Patients'],
    config:{
        refs:{
            patientdashboard:'patientdashboard',
            workspace:'workspace'
        },
        control:{
            'workspace patientlist list':{select:'onPatientSelect'}
        }
    },

    onPatientSelect:function (list, patientrecord, options) {

        if (this.getPatientdashboard() === null || this.getPatientdashboard() === undefined) {
            console.log('creating patient dashboard');
            new NeqMobile.view.patient.PatientDashboard;
        }

        // < var definitions
        var patientdashboard = this.getPatientdashboard();
        var patientinfo = patientdashboard.down('patientinfo');
        //  var definitions >


        this.getWorkspace().down('#dashboardcontainer').setActiveItem(this.getPatientdashboard());
        selectedPatient = patientrecord;
        var me = this;
        var finishcounterInfo = 0;
        var finishwaiter = function () {
            finishcounterInfo++;
            if (finishcounterInfo === 3) {
                me.getPatientdashboard().down('patientinfo').setMasked(false);
            }
        };

        var patientid = patientrecord.get('id');
        patientinfo.loadPatientHeader(patientrecord);

        patientinfo.setMasked({xtype:'loadmask', message:'loading patient details',transparent:true});

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
                patientdashboard.down('patientInfoContd1').loadLabTestRequests(responseObject);
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
                patientdashboard.down('patientInfoContd1').loadLabResults(labresultstore);
            },
            scope:this
        });
    }
//>>> DO NOT DELETE THIS!!!  <<<
    //>>> DO NOT DELETE THIS!!!  <<<
    //>>> DO NOT DELETE THIS!!!  <<<
//    ,
//    onItemTap:function (dw, index, item, record, e, eOpts, detailcont) {
//
//        var me = this;
//
//        var callback = function () {
//
//            var myscroll = me.getPatientInfo().getScrollable().getScroller();
//            var patientEl = me.getPatientInfo().element;
//            var maxmove = item.getY() - patientEl.getY();
//            var wantmove = maxmove + item.getHeight() - patientEl.getHeight();
//            var tomove = wantmove;
//            if (maxmove < wantmove) {
//                tomove = maxmove;
//            }
//            if (tomove > 0) {
//                myscroll.scrollBy(0, tomove, true);
//            }
//        }
//        Ext.Function.defer(callback
//            , 150, this);
//
//    }
    //>>> DO NOT DELETE THIS!!!  <<<
    //>>> DO NOT DELETE THIS!!!  <<<
    //>>> DO NOT DELETE THIS!!!  <<<
});