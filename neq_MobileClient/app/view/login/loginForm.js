/**
 * @author chopsuey
 */

Ext.define('NeqMobile.view.login.LoginForm', {
    extend:'Ext.Container',
   // requires:'NeqMobile.store.Users',
    alias:'widget.loginform',

    config:{

        items:[{

                xtype:'fieldset',
                title:'Login',
                width:400,

                instructions:'Enter your credentials',

                items:[
                    {
                        xtype:'textfield',
                        label:'Name',
                        name:'name'
                    },
                    {
                        xtype:'passwordfield',
                        label:'Password',
                        name:'password'
                    },
                    {
                        xtype:'selectfield',
                        label:'Server',
                        name:'server',
                        options:[
                            { text:'NEQ Healthcare Theilemann ', value:'first' },
                            { text:'Uni Mannheim', value:'second' }
                        ]
                    }
             ,
                     {
                xtype:'button',
                ui:'confirm',
                text:'Login',
                width:400
            }
                ]
           },

            {
                xtype: 'button',
                ui :'action',
                id: 'settingsButton',
                text:'Settings',
                width:200}

        ]
    }
});