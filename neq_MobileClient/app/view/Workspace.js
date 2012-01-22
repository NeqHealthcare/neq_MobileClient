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
                                html:'doctorname',
                                align:'right'},

                            {
                                xtype:'label',
                                html:' picture ',
                                align:'right'
                            },
                            {
                                xtype:'button',
                                itemId:'SettingsButton',
                                iconCls:'settings',
                                iconMask:true,
                                align:'right'
                            }


                        ]);


                }

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