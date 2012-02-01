Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'SkeletonApp',
    controllers: ['Main'],
    models:['Skeleton'] ,
    stores:['Skeletons'] ,

    launch: function() {
     Ext.Viewport.add(Ext.create('SkeletonApp.view.Viewport'));
    }
});