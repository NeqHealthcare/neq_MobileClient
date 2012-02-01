Ext.application({
    name:'centeredBug',
    launch:function () {
        var container = Ext.create('Ext.Container',
            {
                fullscreen:true,
                items:[
                    {   //this is the toolbar at the top
                        docked:'top',
                        xtype:'toolbar',
                        // ui:'light',

                        items:[
                            {
                                ui:'back',
                                text:'Back',
                                itemId:'backbutton'
                            }
                        ]
                    },
                    {xtype:'toolbar',
                        docked:'top', items:[
                        {
                            xtype:'button',
                            iconCls:'add',
                            iconMask:true,
                            itemId:'addbutton'
                        }
                    ]
                    },

                    {
                        xtype:'toolbar',
                        docked:'top',
                        scrollable:{
                            direction:'horizontal',
                            indicators:false
                        },
                        items:[
                            { ui:'back', text:'Back' },
                            { text:'Default' },
                            { ui:'round', text:'Round' },

                            { xtype:'spacer' },

                            {
                                xtype:'segmentedbutton',
                                items:[
                                    { text:'Option 1' },
                                    { text:'Option 2', pressed:true },
                                    { text:'Option 3' }
                                ]
                            },

                            { xtype:'spacer' },

                            { ui:'action', text:'Action' },
                            { ui:'forward', text:'Forward' },
                            {
                                xtype:'segmentedbutton',
                                allowMultiple:true,
                                items:[
                                    { text:'Toggle 1', pressed:true },
                                    { text:'Toggle 2', pressed:true },
                                    { text:'Toggle 3' }
                                ]
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