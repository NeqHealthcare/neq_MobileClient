Ext.define('NeqMobile.view.Viewport', {
        extend:'Ext.Container',
       requires:['NeqMobile.view.Login'],
        xtype:'Viewport',

       config:{
            autoDestroy:true,
            fullscreen:true,
            layout:{
                type:'card',
                animation:{
                    type:'slide',
                    direction:'left'
                }
            },

            items:[
                {   xclass:'NeqMobile.view.Login'}
            ]

        }
    }
);
