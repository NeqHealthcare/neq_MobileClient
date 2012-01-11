Ext.define('NeqMobile.view.Main', {
        extend:'Ext.Panel',
        requires:['NeqMobile.view.login.LoginForm', 'NeqMobile.view.Workspace'],
        xtype: 'main',
        config:{

            layout: {
                            type: 'card',
                            animation: {
                                type: 'slide',
                               direction: 'left'
                            }
                        },
            fullscreen:true,
            items:[
             /*   {
                    docked : 'top',
                    xtype: 'toolbar',
                    ui   : 'light',
                    title: 'Neq Healthcare Mobile'},*/

                {   xclass: 'NeqMobile.view.login.LoginForm'}
            ]

        }
    }

);

// Ext.define('MH.view.Viewport', {
// extend: 'Ext.Panel'
// ,config: {
// fullscreen: true
// ,html: 'Hello!'
// }
// });
//		
//		

// [
// {
// xtype : 'panel',
// layout : {
// type : 'hbox',
// align : 'stretch'
// },
// items : [{
// xtype : 'patientlist',
// flex: 5
// }]
// },
// {
//					
// xtype: 'panel',
// title: 'Users',
// html : 'List of users will go here'}]
