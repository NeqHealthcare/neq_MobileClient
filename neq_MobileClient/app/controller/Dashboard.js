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
        views:['Viewport', 'patient.List', 'Dashboard', 'Workspace'],
        models:['Patient', 'Session'],
        stores:['Patients'],
        config:{

            control:{
                'Dashboard #patientsearchfield':{
                    keyup:'doFilter'
                }
            },

            refs:{
                loginButton:'button[action=login]'
            }},


        doFilter:function (searchfield, e, eOpts) {
            var store = Ext.data.StoreManager.lookup('myPatientsStore');

            store.clearFilter();
            store.filter(
                {filterFn:function (item) {
                    var name = item.get('rec_name');
                    var id = item.get('id');
                    console.log(name);
                        console.log(id);

                    console.log(searchfield.getValue());
                    var searchstring = "/" + searchfield.getValue () + "/";
                    console.log(searchstring);
                    if (searchstring.test(name) || searchstring.test(id)) {
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