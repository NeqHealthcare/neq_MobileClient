/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 14.01.12
 * Time: 02:57
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.controller.Dashboard', {
        extend:'Ext.app.Controller',
        requires:['NeqMobile.view.Viewport', 'NeqMobile.store.Patients', 'NeqMobile.store.Diagnoses', 'NeqMobile.store.Vaccinations','NeqMobile.store.Medications'],

        config:{

            refs:{
                loginButton:'button[action=login]',
                patientInfo:'patientInfo',
                patientInfoContd1:'patientInfoContd1',
                patientListContainer:'Dashboard patientList #patientListContainer'
            },
            control:{
                'Dashboard #patientsearchfield':{
                    keyup:'doFilter'
                },
                'Dashboard patientList list':{
                    select:'onPatientSelect'
                },
                'Dashboard patientList #x-hidePatientListButton':{
                    tap:'onHideElementTap'
                },
                'patientInfoContd1 #x-createNewLabRequestButton':{
                    tap:'onCreateNewLabRequestTap'
                }
                ,
                'Dashboard #diagnoses':{itemexpanded:'onItemTap'},
                'Dashboard #medications':{itemexpanded:'onItemTap'},
                'Dashboard #vaccinations':{itemexpanded:'onItemTap'}
            }
        },
        onHideElementTap:function(button,e,eOpts){
            var patientListContainer = this.getPatientListContainer();
            if(patientListContainer.isHidden()){
                patientListContainer.setHidden(false);
            }else{
                patientListContainer.setHidden(true);
            }
        },
        onCreateNewLabRequestTap:function(button,e,eOpts){
            var labTestRequestOverlay = Ext.create('NeqMobile.view.patient..create.CreateLabTestRequest');
            this.overlay = Ext.Viewport.add(labTestRequestOverlay);
            this.overlay.show();
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
                if (maxmove < wantmove){tomove = maxmove;}
                if (tomove > 0) {
                    myscroll.scrollBy(0, tomove, true);
                }
            }

            //   detailcont.on('painted', callback, me, { single:true });


            Ext.Function.defer(callback
                , 150, this);

        },
        onPatientSelect:function (list, patientrecord, options) {

            var me = this;

            var patientinfo = this.getPatientInfo();
            var patientInfoContd1 = this.getPatientInfoContd1();

            var finishcount = 0;
            var finishwaiter = function () {
                finishcount++;
                if (finishcount === 3)
                {
                    patientinfo.setMasked(false);
                }
            }

            if(patientinfo.isHidden()){
                patientinfo.setHidden(false);
            }
            if(patientInfoContd1.isHidden()){
                patientInfoContd1.setHidden(false);
            }
            var patientid = patientrecord.get('id');
            this.getPatientInfo().loadPatientHeader(patientrecord);

            this.getPatientInfo().setMasked({ xtype:'loadmask', message:'loading patient details'});


            var diagnosestore = Ext.data.StoreManager.lookup('diagnoses');
            if (!diagnosestore) {
                diagnosestore = Ext.create('NeqMobile.store.Diagnoses');
            }
            diagnosestore.getProxy().setExtraParam('id', patientid);
            diagnosestore.load({
                callback:function (records, operation, success) {
                    patientinfo.loadDiagnoses(diagnosestore);
                    finishwaiter();
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
                    finishwaiter();
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
                    finishwaiter();

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