/**
 * @author chopsuey
 */

Ext.define('NeqMobile.view.Login', {
    extend:'Ext.Container',
    requires:['NeqMobile.store.Domains', 'NeqMobile.store.Patients'],
    xtype:'Login',
    config:{
        layout:'hbox',
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
                flex:5,

                // title:'Login',
                //  width:400,
//fullscreen: true,
                //   instructions:'Enter your credentials',

                items:[
                    {
                        xtype:'textfield',
                        label:'Username',
                        name:'user'
                    },
                    {
                        xtype:'passwordfield',
                        label:'Password',
                        name:'pass'
                    },

                    {
                        xtype:'button',
                        ui:'confirm',
                        text:'Login',
                        itemId:'submitButton'
                    },
                    {
                        xtype:'list',
                        flex:1,
                        itemTpl:'<div class="contact">{name}'

                    }


                ]

            }


        ]
    }
})
;