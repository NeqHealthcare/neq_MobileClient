Ext.Loader.setConfig({
    enabled:true
});

Ext.application({
//    appFolder: 'NeqMobile',
//    viewport:{ xclass: 'NeqMobile.view.Viewport'
//    },
    name:'NeqMobile',
    controllers:['General','Session','settings.Domains','Dashboard'],
    launch: function() {
     //   this.callParent(arguments);
       Ext.Viewport.add(
            Ext.create('NeqMobile.view.Viewport'));
    }
});
