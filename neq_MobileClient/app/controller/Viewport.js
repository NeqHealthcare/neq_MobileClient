Ext.define('NeqMobile.controller.Viewport', {
    extend:'Ext.app.Controller',
    views:['Viewport'],
    requires:[ 'NeqMobile.store.Patients'],
    refs:[
        {   ref:'viewport',
            selector:'viewport',
            xtype:'viewport',
            autoCreate:true},
        { ref:'Workspace',
            selector:'Workspace',
            xtype:'Workspace',
            autoCreate:true}
    ],

    init:function () {
        this.callParent(arguments);
        console.log('Init Viewport controller');
    }

});