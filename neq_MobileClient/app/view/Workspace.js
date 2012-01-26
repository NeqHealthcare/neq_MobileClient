/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 30.11.11
 * Time: 15:23
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.view.Workspace', {
        extend:'Ext.navigation.View',
        xtype:'Workspace',
        requires:['NeqMobile.view.Dashboard'],

        initialize:function () {
            this.callParent(arguments);

            this.on({

                painted:function (view) {
                    view.getNavigationBar().add(
                        [

                            {
                                xtype:'label',
                                html:'<span style="color:#E6E6E6">Dr. Jan Gansen</span>',
                                align:'right'},
                            {
                                xtype:'button',
                                icon:'patientdummy.PNG',
                                align:'right',
                                itemId:'doctorimage'
                            }
                            ,

                            {
                                xtype:'button',
                                itemId:'SettingsButton',
                                iconCls:'settings',
                                iconMask:true,
                                align:'right'
                            }


                        ]);


                }
//                ,
//                show:function(view){alert('show event fired')},
//                hide:function(view){alert('hide event fired')}
            });
        },

        config:{

            autoDestroy:true,
            items:[
                /*
                 items:[
                 {
                 dock:'top',
                 xtype:'toolbar',
                 ui:'light',

                 items:[
                 {
                 text:'Logout'
                 }
                 ]
                 },
                 */
                {
                    xclass:'NeqMobile.view.Dashboard'
                }
            ]
        }
    }

);