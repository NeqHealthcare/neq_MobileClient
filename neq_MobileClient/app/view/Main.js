Ext.define('NeqMobile.view.Main', {
        extend:'Ext.Panel',
        requires:['NeqMobile.view.login.LoginForm'],
        xtype: 'main',
        config:{

            fullscreen:true,
            items:[
                {
                    dock : 'top',
                    xtype: 'toolbar',
                    ui   : 'light',
                    title: 'Neq Healthcare Mobile'},
               {  xtype : 'loginform'
                }
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
