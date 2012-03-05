/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 30.11.11
 * Time: 14:51
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.view.Dashboard', {
    extend:'Ext.Container',
    xtype:'Dashboard',
   requires:['NeqMobile.view.patient.Info', 'NeqMobile.view.patient.List'],

    initialize:function () {
        this.callParent(arguments);

        this.on({

            painted:function (dashboard) {
            }
//                ,
//                show:function(view){alert('show event fired')},
//                hide:function(view){alert('hide event fired')}
        });
    },
    config:{
        layout:'hbox',

        items:[

            {
                region: 'west',
                xclass:'NeqMobile.view.patient.List'
          },
            {
                xclass:'NeqMobile.view.patient.Info',
                region: 'center',
                flex:5
               }
        ]
    }
});