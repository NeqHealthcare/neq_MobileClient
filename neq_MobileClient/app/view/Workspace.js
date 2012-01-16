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

        initialize:function () {
            this.callParent(arguments);

            this.on({

                painted:function (view) {


                    view.getNavigationBar().add({
                        xtype:'button',
                        align:'right',
                        text:'Logout',
                        itemId:'LogoutButton'

                    });


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
                    title:'Dashboard',
                    xclass:'NeqMobile.view.Dashboard'
                }
            ]
        }
    }

);