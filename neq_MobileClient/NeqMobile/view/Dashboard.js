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
   requires:['NeqMobile.view.patient.PatientInfo', 'NeqMobile.view.patient.PatientList','NeqMobile.view.patient.PatientInfoContd1'],

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
                xtype:'patientlist'
          },
            {
                xtype: 'carousel',
                flex:5,
                region: 'center',
                items: [
                    {
                        xtype:'patientinfo'
                    },
                    {
                        xtype:'patientInfoContd1'
                    }
                ]
            }

        ]
    }
});