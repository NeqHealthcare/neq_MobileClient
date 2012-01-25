Ext.define('SkeletonApp.view.Viewport', {
    extend:'Ext.Container',
    config:{
        fullscreen:true,

        layout:{
            type:'vbox'
        },
        items:[
            {
                xtype:'navigationbar',
                title:'Hello',
                docked:'top'

            },
            {

                flex:1,
                xtype:'list',
                layout:'auto',
                store:'Skeletons',
                itemTpl:'Hello {name}!'
            }
        ]



    }


});