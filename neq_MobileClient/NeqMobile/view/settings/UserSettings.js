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
                        title:'Select the other user you want to follow',
                        margin: '0',
                        padding: '5',
                        items:[
                            {
                                xtype:'touchgridpanel',
                                itemId:'chatterUserTable',
                                id: 'chatterUserTableView',
                                width: '100%',
                                scrollable:false,
                                columns:[
                                    {
                                        header:'Name',
                                        dataIndex:'rec_name',
                                        style: 'padding-left: 1em; background-color: #FFFFFF;',
                                        width:'80%'
                                    },
                                    {
                                        header:'Following?',
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