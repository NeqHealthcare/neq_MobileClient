var full_url = "";

Ext.define('NeqMobile.view.patient.detail.DocumentContainer', {

        extend:'Ext.Panel',
        xtype:'documentcontainer',
        requires:'Ux.PinchZoomImage'  ,
//        plugins:[
//            {
//                xclass:'Ext.plugin.Pinchemu',
//                helpers:true
//            }
//        ],


        config:{

            xtype:'panel',
            id:'documentcontainer',
            layout:'card',
            //width:'100%',
            flex:1,
            //height:1000,
            margin:'1.2em',

            items:[

                {
                    xtype:'fieldset',
                    title:'Documents',
                    layout:'vbox',
                    flex:1,
                    title:'Documents',
                    items:[

                        {
                            xtype:'list',
                            flex:1,
                            itemTpl:'<div class="list">' +
                                '<div>{description}</div>' +
                                '<img src={url} height="100">' +
                                ' </div>',
                            id:'documentList',
                            //store: store
                            listeners:{
                                //painted:function(obj, eOpts ) {
                                //Ext.Viewport.add(self.touchHelpers[0]);
                                //                                 }

                                select:function (el, record, eOpts) {
                                    full_url = record.get('url_big');
                                    console.log(full_url);
                                    Ext.ComponentManager.get('imageScreen').applySrc(full_url);
                                    Ext.ComponentManager.get('documentcontainer').setActiveItem(1);
                                    //Ext.ComponentManager.get('backbutton').setStyle('opacity: 0.3;');
                                    Ext.ComponentManager.get('backbutton').show();

                                }



                            }
                        }
                    ]
                },


                {
                    id:'imageScreen',
                    xtype:'pinchzoomimage',
                    flex:1
                    //width:1000,
                    //height:1000


                }   ,


                {

                    id:'backbutton',
                    xtype:'button',
                    style:'opacity: 0.3;',
                    iconMask:true,
                    iconCls:'arrow_left',
                    //docked:'top',
                    round:true,
                    width:50,
                    top:5,
                    right:5,
                    hidden:true,
                    listeners:{
                        tap:function (obj, e, eOpts) {
                            Ext.ComponentManager.get('documentcontainer').setActiveItem(0);
                            this.hide();
                        }
                    }
                }
            ]



        }
    }
)
