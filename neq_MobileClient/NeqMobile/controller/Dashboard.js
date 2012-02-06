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
                    select:'doNothing'
                }
            }
        },
        doNothing:function () {
        },
        onPatientSelect:function (list, record, options) {
            console.log('loading patient');


            //
            //
            // console.log(record.diagnoseoverviews().data);
            var ageFilter = new Ext.util.Filter({
                property:'age',
                value:32
            });


//            var longNameFilter = new Ext.util.Filter({
//                filterFn: function(item) {
//                    return true
//                }
//            });


            var store = Ext.create('Ext.data.Store', {
                model:'NeqMobile.model.Patient',
                filters:longNameFilter,
                remoteFilter:true
            });
            store.load();
//
//            var store = Ext.create('Ext.data.Store', {
//                model:'NeqMobile.model.DiagnoseOverview',
//                filters:[
//                    {
//                        property:'id',
//                        value:'2'
//                    }
//                ]
//            });
//
//
//            store.load(
//                {
//                    params:{id:1}
//                });
//
//            console.log(store);

            //this.getPatientInfo().loadPatient(record);
//                xtype:'container',
//                html: '<table border="1">' +
//                  '<tr>' +
//                    '<th>Berlin</th>'+
//                 '   <th>Hamburg</th>' +
//                 '  <th>M&uuml;nchen</th>' +
//                '  </tr>' +
//                '  <tr>' +
//                 '   <td>Milj&ouml;h</td>' +
//                 '   <td>Kiez</td>' +
//                    '<td>Bierdampf</td>' +
//                '  </tr>' +
//                 '<tr>' +
//                   ' <td>Buletten</td>' +
//                   '<td>Frikadellen</td>' +
//                   ' <td>Fleischpflanzerl</td>' +
//                  '</tr>' +
//                '</table>'

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