Ext.application({
                                    name:'centeredBug',
                                    launch:function () {

                                        Ext.Msg.setZIndex(10);

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

                                                    {     xtype:'container',
                                                        title:'asdf',
                                                        layout:'vbox',
                                                        items:[
                                                            {xtype:'button',
                                                                centered:true,
                                                                text:'Click Me',
                                                                handler:function () {
                                    // Ext.Viewport.setMasked(true);
                                    Ext.Msg.alert('Choose a Connection', 'Choose a connection.', Ext.emptyFn);
                                    // Ext.Viewport.setMasked(false);
                                }
                            }
                            ,
                            {xtype:'button',
                                text:'blallala'}
                        ]
                    }
                ]
            }
        );
        Ext.Viewport.add(container);
    }
});