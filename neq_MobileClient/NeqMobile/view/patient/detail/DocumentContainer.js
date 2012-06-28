var full_url = "";

var tpl = new Ext.XTemplate(
    ['<div class="x-container x-panel" id="list-document">',
        '<img class="x-container x-panel x-docked-left" style="background-size: cover; background-position: center center;',
        ' background: #ddd; border-radius: 3px;' ,
        ' -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6);"' ,
        ' src="{url}" width="145" height="145"/>',
        '<div class="x-inner x-panel-inner x-layout-vbox" id="ext-element-102" style="-webkit-box-align: stretch; padding: 5px !important; "><div class="x-container x-field-text x-field x-label-align-left x-field-labeled">',
        '<div x-container x-field-text x-field x-label-align-left x-field-labeled" id="list-block-bold">{description}<div/>' ,
        '<div x-container x-field-text x-field x-label-align-left x-field-labeled> {name} </div>',
        '</div></div></div>'].join('')


);


Ext.define('NeqMobile.view.patient.detail.DocumentContainer', {

        extend:'Ext.Container',
        xtype:'documentcontainer',
        requires:'Arkivus.ImageViewer', //Ux.ImageViewer.js
//        plugins:[
//            {
//                xclass:'Ext.plugin.Pinchemu',
//                helpers:true
//            }
//        ],


        config:{

            id:'documentcontainer',
            layout:'card',
            scrollable:{
                direction:'vertical',
                directionLock:true
            },
            //width:'100%',
            flex:1,
            //height:1000,
            margin:'15em',

            listeners:{
                activeitemchange:function (container, value, oldValue, eOpts) {
                    if (container.getScrollable() && oldValue.src) {
                        oldValue.resetZoom();
                        this.getActiveItem().resize();
                    }
                },

                /*  resize: function(component, eOpts){
                 this.getActiveItem().resize();
                 },
                 */
                activate:function (component) {
                    component.setActiveItem(0);
                }
            },


            items:[

                {
                    xtype:'fieldset',
                    title:'Pictures',
                    layout:'vbox',
                    margin:'0',
                    padding:'5',
                    flex:1,
                    items:[


                        {
                            xtype:'list',
                            style:'background-color:white;',
                            flex:1,


                            itemTpl:tpl,
                            /*'<div class="list">' +
                             '<p><img src={url} height="100"/><p/>' +
                             '<p>{description}</p>'+
                             '<p>{name}</p>'           +
                             '<p>{last_user}</p>'+
                             '</div>',*/
                            id:'documentList',
                            //store: store
                            listeners:{
                                //painted:function(obj, eOpts ) {
                                //Ext.Viewport.add(self.touchHelpers[0]);
                                //                                 }

                                itemtap:function (ref, index, target, record, e, eOpts) {
                                    full_url = record.get('url_big');
                                    console.log(full_url);
                                    Ext.ComponentManager.get('documentcontainer').setActiveItem(1);
                                    if (!Ext.ComponentManager.get('documentcontainer').imageSrc) {

                                        Ext.Function.defer(function () {

                                                Ext.ComponentManager.get('imageScreen').loadImage(full_url);
                                            }
                                            , 500);

                                    }

                                    else {
                                        Ext.ComponentManager.get('imageScreen').loadImage(full_url);
                                        Ext.ComponentManager.get('imageScreen').resetZoom();
                                    }


                                    //Ext.ComponentManager.get('backbutton').setStyle('opacity: 0.3;');
                                    Ext.ComponentManager.get('backbutton').show();

                                },
                                deactivate:function () {
                                }



                            }
                        }

                    ]
                },

                {
                    id:'imageScreen',
                    xtype:'imageviewer',
                    flex:1
                    //width:1000,
                    //height:1000


                },


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
                    left:5,
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
