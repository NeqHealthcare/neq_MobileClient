Ext.Loader.setConfig({
    enabled:true
});

Ext.application({
    name:'NeqMobile',
    controllers:['Viewport','Session'],
    launch: function() {
        Ext.create('NeqMobile.view.Viewport');
    }
});
