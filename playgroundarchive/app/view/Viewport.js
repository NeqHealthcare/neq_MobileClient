Ext.define('SkeletonApp.view.Viewport', {
    extend:'Ext.Container',
    config:{
        fullscreen:true,

        layout:{
            type:'vbox'
        },
        items:[

            {
                flex:1,
                xtype:'list',
                layout:'auto',
                store:'Skeletons',
                itemTpl:'Hello {name}!'
            }
            ,
            {  xtype:'selectfield',
                options:[
                    {text:'First Option', value:'first'},
                    {text:'Second Option', value:'second'},
                    {text:'Third Option', value:'third'}
                ]
            }
        ]}

})


;