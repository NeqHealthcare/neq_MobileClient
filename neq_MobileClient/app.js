Ext.Loader.setConfig({
    enabled:true
});

Ext.application({
    name:'NeqMobile',
    controllers:['General','Session','settings.Domains','Dashboard'],
    launch: function() {
        Ext.create('NeqMobile.view.Viewport');
    }
});
