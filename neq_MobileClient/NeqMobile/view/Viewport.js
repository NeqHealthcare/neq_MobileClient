Ext.define('NeqMobile.view.Viewport', {
        extend:'Ext.Container',
        requires:['NeqMobile.view.Login'],
        xtype:'Viewport',
        initialize:function () {
            console.log('registering deactive event');
            Ext.ComponentQuery.query('Viewport')[0].on('deactivate', function (oldActiveItem, container, newActiveItem, eOpts) {
                console.log('destroying old viewport item');
                oldActiveItem.destroy();
            });
        },

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
