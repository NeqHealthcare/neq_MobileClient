Ext.application({
    name:'centeredBug',
    launch:function () {
        var container = Ext.create('Ext.Container',
            {
                fullscreen:true,
                items:[
      {
                        docked:'top',
                        xtype:'toolbar',
                        title:'blabla',
                        items:[
                            {xtype:'spacer'},
                            {
                                xtype:'button',
                                itemId:'settingsbutton',
                                iconCls:'settings',
                                iconMask:true
                            }
                        ]
                    },
                    {xtype:'button',
                        centered:true,
                        text:'Click Me',
                        handler:function () {
                           // Ext.Viewport.setMasked(true);
                            Ext.Msg.alert('Choose a Connection', 'Choose a connection.', Ext.emptyFn);
                           // Ext.Viewport.setMasked(false);
                        }
                    }
                ]
            }
        );
        Ext.Viewport.add(container);
    }
});