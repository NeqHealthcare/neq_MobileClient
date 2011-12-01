Ext.Loader.setConfig({
    enabled:true
});

Ext.application({
    name:'NeqMobile',
    controllers:['Home'],


    launch: function() {
        Ext.create('NeqMobile.view.Main');
    }
});
