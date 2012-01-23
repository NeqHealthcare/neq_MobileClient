Ext.Loader.setConfig({
    enabled:true
});

Ext.application({
    name:'NeqMobile',
    controllers:['General','Session'],
    launch: function() {
        Ext.create('NeqMobile.view.Viewport');
    }
});
