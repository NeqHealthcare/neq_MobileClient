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
                scrollable:false,
                items:[
                    {
                        xtype:'image',
                        src:'theme/images/user/DefaultAvatar_small.jpg'

                    },
                    {
                        xtype:'textfield',
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
                        value:'iswi223<<',
                        label:'Password',
                        name:'password',
                        placeHolder:'Enter your Password',

                        cls:'login'
                    },
//                    {xtype:'selectfield',
//                        store:'Domains'
//                    },
                    {
                        xtype:'list',
                        width:400,
                        height:75,
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