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
        requires:['NeqMobile.view.Viewport', 'NeqMobile.store.Patients', 'NeqMobile.store.Diagnoses', 'NeqMobile.store.Vaccinations', 'NeqMobile.store.Medications', 'NeqMobile.model.LabTestRequest', 'NeqMobile.view.patient.create.CreateLabTestRequest', 'NeqMobile.store.LabResults'],
        config:{
            refs:{
                workspace:'workspace'
            },
            control:{
                'workspace #patientsearchfield':{keyup:'doFilter'},
                'workspace patientlist #refreshbutton':{tap:'onTapRefreshButton'},

                'workspace patientlist #showHidePatientListButton':{tap:'showHidePatientlist'}
            }
        },
        showHidePatientlist:function (button, e, eOpts) {
            var patientListContainer = this.getWorkspace().down('patientlist #patientListContainer');
            if (patientListContainer.isHidden()) {
                patientListContainer.setHidden(false);
            } else {
                patientListContainer.setHidden(true);
            }
        },
        onTapRefreshButton:function () {
            var store = Ext.data.StoreManager.lookup('myPatientsStore');
            store.load({
                callback:function (records, operation, success) {
                    this.doFilter(this.getWorkspace().down('patientlist searchfield'));
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