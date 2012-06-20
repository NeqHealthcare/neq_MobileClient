var full_url = "";

var tpl = new Ext.XTemplate(
  ['<div class="x-container x-panel" id="list-document">',
   '<img class="x-container x-panel x-docked-left" style="background-size: cover; background-position: center center;',
        ' background: #ddd; border-radius: 3px;' ,
        ' -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6);"' ,
        ' src="{url}" width="145" height="145"/>',
    '<div class="x-inner x-panel-inner x-layout-vbox" id="ext-element-102" style="-webkit-box-align: stretch; padding: 5px !important; "><div class="x-container x-field-text x-field x-label-align-left x-field-labeled">',
    '<div x-container x-field-text x-field x-label-align-left x-field-labeled" id="list-block-bold">{description}<div/>' ,
    '<div x-container x-field-text x-field x-label-align-left x-field-labeled> {name} </div>' ,
    '<div x-container x-field-text x-field x-label-align-left x-field-labeled" id="list-block-normal">Last used by: {last_user}&nbsp;</div>',
    '</div></div></div>'].join('')


);


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
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
            //width:'100%',
            flex:1,
            //height:1000,
            margin:'1.2em',

            items:[

                {
                    xtype:'fieldset',
                    title:'Pictures',
                    layout:'vbox',
                    flex:1,
                    items:[


                        {
                            xtype:'list',
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
