Ext.Loader.setConfig({
    enabled:true
});

Ext.application({
    name:'NeqMobile',
    controllers:['General','Session','settings.Domains'],
    launch: function() {
        Ext.create('NeqMobile.view.Viewport');
    }
});
