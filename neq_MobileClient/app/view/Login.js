/**
 * @author chopsuey
 */

Ext.define('NeqMobile.view.Login', {
    extend:'Ext.Container',
    requires:['NeqMobile.store.Domains', 'NeqMobile.store.Patients'],
    xtype:'Login',
    config:{

        items:[

            {
                docked:'top',
                xtype:'toolbar',
                ui:'light',
                title:'NEQ Mobile Client',
                items:[
                    {xtype:'spacer'},
                    {
                        xtype:'button',
                        itemId:'settingsbutton',
                        iconCls:'settings',
                        iconMask:true
                    }
                ]

            },
            {
                xtype:'formpanel',

                  centered: 'true',
                //pack: 'start',
                ui:'login',
//                style:'background-color: white;'
//                    +
//                    'display: -webkit-box;' +
//                    '-webkit-box-align: center;' +
//                    '-webkit-box-pack: center',

                scrollable:false,
                items:[
                    {
                        html:'<img src="theme/images/user/DefaultAvatar_small.jpg"' +
                            'style="padding:0px; margin: 0px; margin-left: 75px; height: 150px; width: 150px;"/>'
                        /*                        xtype:'image',
                         width: 150,
                         height: 150,
                         margin:0,
                         padding:0,
                         id: 'image',
                         src:'theme/images/user/DefaultAvatar_small.jpg',*/


                    },
                    {
                        xtype:'textfield',
                        id:'textfield',
                        value:'jgansen',
                        label:'User',
                        name:'user',
                        width:300,
                        margin:0,
                        padding:0,
                        placeHolder:'Enter your Username',
                        autoComplete:true,
                        autoCorrect:true

                        //    cls:'login'
                    },
                    {
                        xtype:'passwordfield',
                        id:'passwordfield',
                        value:'iswi223<<',
                        label:'Password',
                        width:300,
                        margin:0,
                        padding:0,
                        name:'password',
                        placeHolder:'Enter your Password'
                        //    cls:'login'
                    },
//                    {xtype:'selectfield',
//                        store:'Domains'
//                    },
                    {
                        xtype:'list',
                        width:300,
                        height:48,
                        margin:0,
                        padding:0,
                        style:'border: 0px; padding: 0px; margin: 0px; align: center;',
                        store:'Domains',
                        itemTpl:'{name}'
                    },
                    {
                        xtype:'button',
                        text:'Login',
                        ui:'confirm',
                        itemId:'submitButton'
                        //baseCls:'button',
                        //       cls:'login'
                    }


                ]

            }


        ]
    }
});