/**
 * @author chopsuey
 */

Ext.define('NeqMobile.view.login.LoginForm', {
    extend:'Ext.Container',
    requires:'NeqMobile.store.Users',
    alias:'widget.loginform',

    config:{
        fullscreen: true,

        layout:{
            type:'fit',
            align:'center'
        },

        items:[
            /*{
                xtype:'image',
                

            },*/
            {
                html:[
                    '<h1>Welcome to</h1>',
                    '<img src="images/ci/neq.png" height="148px" width="240px" />',
                    '<h1>NEQ Mobile Healthcare Application!</h1>',
                    "<p>Please login for accessing further Data.</p>",
                    '<br /><img src="images/user/defaultUser.png" height="100px" width="100px" />'
                ].join("")
            },
            {
                xtype:'fieldset',
                title:'Login',
                width:400,
                instructions:'Verify your Access',

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
                ]
            },
            {
                xtype:'button',
                ui:'confirm',
                text:'Login',
                width:400,
                action:'submitLogin'
            }
        ]
    }
});