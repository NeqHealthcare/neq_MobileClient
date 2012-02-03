Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'SkeletonApp',
    launch: function() {
     Ext.Viewport.add(Ext.create('SkeletonApp.view.Viewport'));
    }
});