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
                        itemId:'simple',
                        iconCls:'settings',
                        iconMask:true
                    }
                ]

            },
            {


                xtype:'formpanel',
                scrollable:false,
                style:'margin:0px; padding:0px; margin-left:auto; margin-right: auto; width:400px;',
                items:[
                    {
                        xtype:'image',
                        src:'../../theme/images/DefaultAvatar_small.jpg',
                        style:' display: block; margin-left: auto; margin-right: auto; border: 5px solid black; width: 200px; height: 200px;'
                    },
                    {
                        xtype:'textfield',
                        value:'admin',
                        label:'User',
                        name:'user',
                        placeHolder:'Enter your Username',
                        autoComplete:true,
                        autoCorrect:true,
                        style:'border:5px solid black; margin:5px; background-color:grey; border-radius: 15px;',
                        //baseCls:'textfield',
                        cls:'login'
                    },
                    {
                        xtype:'passwordfield',
                        value:'iswi223<<',
                        label:'Password',
                        name:'password',
                        placeHolder:'Enter your Password',
                        style:'border:5px solid black; margin:5px; background-color:grey; border-radius: 15px;',
                        //baseCls:'passwordfield',
                        cls:'login'
                    },
                    {
                        xtype:'list',
                        width:400,
                        height:75,
                        itemTpl:'<div class="contact">{name}'

                    },
                    {
                        xtype:'button',
                        text:'Login',
                        style:'border:5px solid black; margin:20px; background-color:grey; border-radius: 15px;',
                        itemId:'submitButton',
                        baseCls:'button',
                        cls:'login'
                    }


                ]

            }


        ]
    }
});