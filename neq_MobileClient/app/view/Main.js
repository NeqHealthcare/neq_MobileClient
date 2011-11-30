Ext.define('NeqMobile.view.Main', {
        extend:'Ext.Panel',
        requires:['NeqMobile.view.patient.List',
            'NeqMobile.view.patient.Dashboard'],
        
        config:{

            fullscreen:true,
            layout:'hbox',
            items:[
                {
                    xtype:'patientlist',
                    flex:25
                },
                { xtype:'patientdashboard',
                flex:75}
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
