/**
 *
 * Jan Gansen
 *
 */
Ext.define('NeqMobile.view.settings.UserSettings', {
    extend:'Ext.Container',
 //   requires:['NeqMobile.store.UserSettings'],
    xtype:'userSettings',
    loadChatterUsers:function (chatterUsersStore) {

        this.down('#chatterUserTable').setStore(chatterUsersStore);

    },
    config:{
        //  styleHtmlContent:true,
        cls: 'x-settingsDomains',
        layout:'hbox',
        items:[

            {   //this is the toolbar at the top
                docked:'top',
                xtype:'toolbar',
                // ui:'light',
                items:[
                    {
                        iconMask:true, ui:'back', iconCls:'reply', itemId:'backbutton',
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
                xtype:'formpanel',
                scrollable:false,
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
                                itemId:'chatterSearchfield',
                                width:'25%'

                            },
                            {
                                xtype:'touchgridpanel',
                                itemId:'chatterUserTable',
                                id: 'chatterUserTableView',
                                width: '100%',
                                scrollable:false,
                                columns:[
                                    {
                                        header:'',
                                        dataIndex:'image_url',
                                        style:'text-align: center;',
                                        width:'45px',
                                        height: '45px',
                                        enderer:NeqMobile.util.Renderer.imageRenderer
                                    },
                                    {
                                        header:'Name',
                                        dataIndex:'rec_name',
                                        style: 'padding-left: 1em; background-color: #FFFFFF;',
                                        width:'70%'
                                    },
                                    {
                                        header:'Following',
                                        dataIndex:'isFollowed',
                                        style:'text-align: center;',
                                        width:'20%',
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