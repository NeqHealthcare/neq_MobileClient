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

 //// TEST ANFANG
 /*
        Ext.setup({
            onReady: function() {
                //create draw component with a yellow circle in it
                var drawComponent = new Ext.draw.Component({
                    items: [{
                        type: 'circle',
                        fill: '#ffc',
                        radius: 100,
                        x: 100,
                        y: 100
                    }]
                });

                //add the component to the panel
                new Ext.chart.Panel({
                    fullscreen: true,
                    title: 'Yellow Circle',
                    items: drawComponent
                });

                //make sure we render the image
                drawComponent.surface.renderFrame();
            }
        });
*/
/// TEST ENDE


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