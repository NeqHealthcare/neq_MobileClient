/**
 *
 * Jan Gansen
 *
 */
Ext.define('NeqMobile.view.settings.UserSettings', {
    extend:'Ext.Container',
    requires:[    'Ext.ux.touch.grid.View',
        'Ext.ux.touch.grid.feature.Feature',
        'NeqMobile.controller.settings.UserSettings',
        'Ext.ux.touch.grid.feature.Sorter'],
    xtype:'userSettings',
    loadChatterUsers:function (chatterUsersStore) {
        chatterUsersStore.sort('rec_name','ASC');
        this.down('#chatterUserTable').setStore(chatterUsersStore);
    },
    config:{
        //  styleHtmlContent:true,
        cls: 'x-UserSettings',
        layout:'hbox',
        items:[

            {   //this is the toolbar at the top
                docked:'top',
                xtype:'toolbar',
                // ui:'light',
                items:[
                    {
                        iconMask:true, ui:'back', iconCls:'reply', itemId:'userSettingsBackbutton'
                      ,
                        handler:function () {
                            history.back();
                        }
                    }
                ]
            },
            {
                xtype:'container',
                flex:1,
                layout:'vbox',
                minWidth:75,
                maxWidth:250,
                items:[
                    {
                        xtype:'list',
                        disableSelection: true,
                        flex:1,
                        itemTpl:'<strong>{option}</strong>',
                        data:[
                            {option: 'Chatter'}
                        ]
                    }
                ]
            }
            ,

            {
                flex:5,
                styleHtmlContent:true,
                xtype:'container',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                maxWidth:'100%',
                items:[
                    {xtype:'fieldset',
                        title:'People',
                        instructions:'Select people you want to follow',
                        margin: '0',
                        padding: '5',
                        layout:'vbox',
                        items:[

                            {
                                xtype:'searchfield',
                                itemId:'peoplesearchfield',
                                width:'25%'

                            },
                            {
                                xtype:'touchgridpanel',
                                itemId:'chatterUserTable',
                                id: 'chatterUserTableView',
                                width: '100%',
                                scrollable:false,
                                features   : [
                                    {
                                        ftype    : 'NeqMobile.controller.settings.UserSettings',
                                        launchFn : 'initialize'
                                    }
                                ],
                                columns:[
                                    {
                                        header:'',
                                        dataIndex:'image_url',
                                        style:'text-align: center;background-color: #FFFFFF;',
                                        width:'15%',
                                        height: '45px',
                                        enderer:NeqMobile.util.Renderer.imageRenderer
                                    },
                                    {
                                        header:'Id',
                                        dataIndex:'id',
                                        style: 'text-align: center; background-color: #FFFFFF;',
                                        width:'10%'
                                    },
                                    {
                                        header:'Name',
                                        dataIndex:'rec_name',
                                        style: 'padding-left: 1em; background-color: #FFFFFF;',
                                        width:'60%'
                                    },
                                    {
                                        header:'Following',
                                        dataIndex:'isFollowed',
                                        style:'text-align: center;',
                                        width:'15%',
                                        renderer:NeqMobile.util.Renderer.followRenderer
                                    }

                                ]
                            }
                        ]

                    }


                ]}
        ]
    }
});