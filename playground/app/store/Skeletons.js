Ext.define('SkeletonApp.store.Skeletons', {
    extend:'Ext.data.Store',
    requires:'SkeletonApp.model.Skeleton',

    config:{
        model:'SkeletonApp.model.Skeleton',
        // Overriding the model's default proxy
        proxy:{
            type:'ajax',
            url:'app/model/data/skeletons.json',
            reader:{
                type:'json',
                rootProperty:'skeletons'
            }
        },
        autoLoad:true
    }});

