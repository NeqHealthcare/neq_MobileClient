Ext.define('NeqMobile.view.Viewport', {
        extend:'Ext.Container',
        requires:['NeqMobile.view.Login'],
        xtype:'Viewport',


        config:{
//
//            listeners:{
//                activeitemchange:function (container, newvalue, oldvalue, eOpts) {
//                    console.log('destroying old viewport item');
//                    Ext.defer(oldvalue.destroy(),25000);
//                    return;
//                }},

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
