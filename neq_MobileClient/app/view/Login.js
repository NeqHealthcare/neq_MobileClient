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
                title: 'NEQ Mobile Client',
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
                //layout: {
                //    type: 'vbox',
                //    align: 'middle'
                //},
                centered: 'true',
                //pack: 'start',
                ui: 'login',
                style: 'background-color: white;',
                scrollable:false,
                items:[
                    {
                        xtype:'image',
                        id: 'image',
                        src:'theme/images/user/DefaultAvatar_small.jpg',


                    },
                    {
                        xtype:'textfield',
                        id: 'textfield',
                        value:'admin',
                        label:'User',
                        name:'user',
                        placeHolder:'Enter your Username',
                        autoComplete:true,
                        autoCorrect:true

                    //    cls:'login'
                    },
                    {
                        xtype:'passwordfield',
                        id: 'passwordfield',
                        value:'iswi223<<',
                        label:'Password',
                        name:'password',
                        placeHolder:'Enter your Password'
                    //    cls:'login'
                    },
//                    {xtype:'selectfield',
//                        store:'Domains'
//                    },
                    {
                        xtype:'list',
                        width:400,
                        height:55,
                        margin:0,
                        padding:0,
                        style: 'border: 0px; padding: 0px; margin: 0px; align: center;',
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