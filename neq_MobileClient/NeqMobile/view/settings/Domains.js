/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 22.01.12
 * Time: 23:48
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.view.settings.Domains', {
    extend:'Ext.Container',
   requires:['NeqMobile.store.Domains'],
    xtype:'settingsDomains',
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
                        ui:'back',
                        text:'Back',
                        itemId:'backbutton'
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
                    {xtype:'toolbar',
                        docked:'top', items:[
                        {
                            xtype:'button',
                            iconCls:'add',
                            iconMask:true,
                            itemId:'addbutton'
                        }
                    ]
                    },
                    {
                        xtype:'list',
                        store:'Domains',
                        flex:1,
                        onItemDisclosure:function () {

                        },


//                            function(record,btn,index)
//                        {
//                            Ext.Msg.alert('Tap','Disclose more info for ' + record.get('firstName'), Ext.emptyFn);
//
//                        },
                        //     store:'Domains',
                        itemId:'domainslist',
                        itemTpl:'<strong>{name}</strong>'
                    }
                ]
            }
            ,

            {
                flex:5,
                styleHtmlContent:true,
                xtype:'formpanel',
                scrollable:false,
                maxWidth:500,
                items:[
                    {xtype:'fieldset',
                        title:'Connection Settings',
                        instructions:'Enter the Connection data, you received from your administrator',
                        items:[
                            {
                                xtype:'textfield',
                                label:'Connection Name',
                                name:'name',
                                placeHolder:'Enter a self chosen Connection Name',
                                autoComplete:true,
                                autoCorrect:true,
                                cls:'settings_Domains'
                            },
                            {
                                xtype:'textfield',
                                label:'IP / Domain Address',
                                name:'ip',
                                placeHolder:'www.yourdomain.com',
                                cls:'settings_Domains'
                            },

                            {
                                xtype:'numberfield',
                                label:'Port',
                                name:'port',
                                placeHolder:'8080',
                                cls:'settings_Domains'
                            },
                            {xtype:'textfield',
                                label:'Backend SID',
                                name:'backendSid',
                                cls:'settings_Domains'}
                            ,
                            {xtype:'selectfield',
                                label:'Protocol',
                                cls:'settings_Domains',
                                name:'protocol',
                                options:[
                                    {text:'HTTP', value:'HTTP'},
                                    {text:'HTTPS', value:'HTTPS'}
                                ]
                            }
                            ,
                            {
                                xtype:'button',
                                text:'save changes',
                                //  style:'border:5px solid black; margin:20px; background-color:grey; border-radius: 15px;',
                                itemId:'savebutton',
                                cls:'settings_Domains'
                            }


                        ]

                    }


                ]}
        ]
    }
});