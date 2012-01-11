/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 30.11.11
 * Time: 15:23
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.view.Workspace', {
        extend:'Ext.navigation.View',
        alias:'widget.workspace',

        initialize:function () {
            this.callParent(arguments);

            this.on({

                painted:function (view) {

                    view.getNavigationBar().add({
                        xtype:'button',
                        text:'Test',
                        handler:function () {
                            this.push({
                                title:'A new view',
                                html:'Some new content'
                            });
                        }
                    });


                }

            });
        },

        config:{
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
                    title:'PatientOverview',
                    xclass:'NeqMobile.view.PatientOverview'
                }
            ]
        }
    }

);