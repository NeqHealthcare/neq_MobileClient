/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 14.01.12
 * Time: 02:57
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.controller.Dashboard', {
        extend:'Ext.app.Controller',
        requires:['NeqMobile.view.Viewport', 'NeqMobile.store.Patients', 'NeqMobile.store.Diagnoses', 'NeqMobile.store.Vaccinations'],

        config:{

            refs:{
                loginButton:'button[action=login]',
                patientInfo:'patientInfo'
            },
            control:{
                'Dashboard #patientsearchfield':{
                    keyup:'doFilter'
                },
                'Dashboard patientList list':{
                    select:'onPatientSelect'
                },
                'Dashboard #newdiagnoses':{itemexpanded:'onItemTap'}
            }
        },
        doNothing:function () {
        },
        onItemTap:function (dw, index, item, record, e, eOpts) {


      //trying to make appropriate scrolling when item is expanded


//            Ext.Function.defer(function () {
//                var myscroll = this.getPatientInfo().getScrollable().getScroller();
//                var patientEl = this.getPatientInfo().element;
//                var itempositiony = myscroll.position.y + item.getY() - patientEl.getY();
//                console.log(myscroll.position.y)
//                console.log(itempositiony)
//
//                this.getSize().y - this.getContainerSize().y  ;
//                var target = bottom
////                if (movepixels > 0) {
////                    myscroll.scrollTo(0, movepixels, true);
////                }
//            }, 500,this);

        },
        onPatientSelect:function (list, patientrecord, options) {
            console.log('loading patient');
            var patientid = patientrecord.get('id');
            this.getPatientInfo().loadPatientHeader(patientrecord);

            var diagnosestore = Ext.data.StoreManager.lookup('diagnoses');
            if (!diagnosestore) {
                diagnosestore = Ext.create('NeqMobile.store.Diagnoses');
            }

            this.getPatientInfo().setMasked({ xtype:'loadmask', message:'loading patient details'});
            diagnosestore.getProxy().setExtraParam('id', patientid);
            diagnosestore.load({
                callback:function (records, operation, success) {
                    var patientinfo = this.getPatientInfo();
                    var response = operation.getResponse();
                    var responseobject = Ext.decode(response.responseText);
                    patientinfo.loadDiagnosesDeprecated(responseobject);
                    patientinfo.loadDiagnoses(diagnosestore);
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
                    var patientinfo = this.getPatientInfo();
                    patientinfo.setMasked(false);
                    var response = operation.getResponse();
                    console.log('vaccinations: ' + response);
                    var responseobject = Ext.decode(response.responseText);
                    patientinfo.loadVaccinations(responseobject);
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
                    console.log('the searchstring is:' + searchstring);
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
            console.log('applying filter');
        }
    }


);