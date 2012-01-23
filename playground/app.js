Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'SkeletonApp',

    controllers: ['Main'],
    models:['Skeleton'] ,
    stores:['Skeletons'] ,

    launch: function() {
        Ext.create('SkeletonApp.view.Viewport');
    }
});