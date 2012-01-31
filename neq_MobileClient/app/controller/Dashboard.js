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

            var searchstring = Ext.String.trim(searchfield.getValue());
            searchstring = searchstring.replace(/\s+/g,'|')
            store.clearFilter();
            store.filter(
                {filterFn:function (item) {
                    var name = item.get('rec_name');
                    var id = item.get('id');
                    console.log(name);
                        console.log(id);

                    console.log('the searchstring is:' + searchstring);
                    var searchexpr = new RegExp(searchstring,'i');
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