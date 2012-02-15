/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 14.01.12
 * Time: 02:57
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.controller.Dashboard', {
        extend:'Ext.app.Controller',
        requires:['NeqMobile.view.Viewport', 'NeqMobile.store.Patients'],

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
                }
            }
        },
        doNothing:function () {
        },
        onPatientSelect:function (list, patientrecord, options) {
            console.log('loading patient');
            var patientid = patientrecord.get('id');

            var diagnosestore = Ext.data.StoreManager.lookup('diagnoses');
            if(!diagnosestore)
            {
                diagnosestore = new NeqMobile.store.Diagnoses();
            }
            diagnosestore.getProxy().setExtraParam('id', patientid);
            diagnosestore.load({
                callback: function(records, operation, success) {
                   var patientinfo = Ext.ComponentQuery.query('Dashboard patientInfo');
                   patientinfo.loadPatient(patientrecord,diagnosestore);
                },
                scope: this
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