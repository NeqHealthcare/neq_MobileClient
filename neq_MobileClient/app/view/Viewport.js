Ext.define('NeqMobile.view.Viewport', {
        extend:'Ext.Container',
        requires:['NeqMobile.view.Login'],
        xtype:'Viewport',

        initialize:function () {
            this.callParent(arguments);

            this.on({
                activeitemchange:function (view) {
                    console.log('card switched');
                }})
        },

        config:{

            layout:{
                type:'card',
                animation:{
                    type:'slide',
                    direction:'left'
                }
            },
            fullscreen:true,
            items:[
                {   xclass:'NeqMobile.view.Login'}
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
