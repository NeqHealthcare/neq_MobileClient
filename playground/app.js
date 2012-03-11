Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'SkeletonApp',
    launch: function() {
       var d = new Date(0);
       console.log(d);
    }
});