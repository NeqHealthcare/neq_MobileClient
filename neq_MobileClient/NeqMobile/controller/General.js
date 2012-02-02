Ext.define('NeqMobile.controller.General', {
    extend:'Ext.app.Controller',
    requires:[ 'NeqMobile.store.Patients'],
    config:{
        refs:[
        {   ref:'viewport',
            selector:'viewport',
            xtype:'viewport',
            autoCreate:true},
        { ref:'Workspace',
            selector:'Workspace',
            xtype:'Workspace',
            autoCreate:true}
    ]
    },

    init:function () {
        this.callParent(arguments);
        console.log('Init Viewport controller');
    }

});