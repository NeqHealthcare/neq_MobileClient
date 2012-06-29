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
        listeners:
        {
            erased:function(cmp,eOpts){
                cmp.destroy();
                console.log('usersettings destroyed')
            }
        } ,
        cls: 'x-UserSettings',
        layout:'hbox',
        items:[
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
                                        width:'20%',
                                        renderer:NeqMobile.util.Renderer.chatterSettingsImageRenderer
                                    },
                                    {
                                        header:'Name',
                                        dataIndex:'rec_name',
                                        style: 'padding-left: 1em;',
                                        width:'65%'
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