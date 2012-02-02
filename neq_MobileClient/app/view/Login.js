/**
 * @author chopsuey
 */

Ext.define('NeqMobile.view.Login', {
    extend:'Ext.Container',
    requires:['NeqMobile.store.Domains', 'NeqMobile.store.Patients'],
    xtype:'Login',
    cls: 'login',
    config:{

        items:[

            {
                docked:'top',
                xtype:'toolbar',
                ui:'light',
                //title:'NEQ Mobile Client',
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
                //centered:'true',
                //pack: 'start',
                //ui:'login',
                StyleHtmlContent: true,
                cls:'loginform',
                //style:'background-color: white;',
                scrollable:false,
                items:[
                    {
                        html:'<img src="theme/images/user/DefaultAvatar_small.jpg"/>'
                    },
                    {
                        xtype:'textfield',
                        id:'textfield',
                        value:'jgansen',
                        label:'User',
                        name:'user',
                        //width:300,
                        //margin:0,
                        //padding:0,
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
                        //width:300,
                        //margin:0,
                        //padding:0,
                        name:'password',
                        placeHolder:'Enter your Password'
                        //    cls:'login'
                    },
                    {xtype:'selectfield',
                        store:'Domains',
                        displayField: 'name',
                        valueField:'id'
                    },
                    {
                        xtype:'button',
                        text:'Login',
                        id:'login-button',
                        ui:'login-button',
                        itemId:'submitButton'
                        //baseCls:'button',
                        //       cls:'login'
                    }


                ]

            }


        ]
    }
});