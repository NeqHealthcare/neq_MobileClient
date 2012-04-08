Ext.define('Init_Document', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            "id", "link", "description", "type"
        ],
        proxy:myproxy

    }
});


var store = Ext.create('Ext.data.Store', {
    model:'Init_Document',
    //sorters: 'lastName',

    data:[
        {   id:"id", link:"link", description:"description", type:"type"}
    ]
});

var full_url = "";

Ext.define('NeqMobile.view.patient.detail.DocumentContainer', {

        extend:'Ext.Panel',
        xtype:'documentcontainer',
        requires:'Ux.PinchZoomImage',
        plugins:[
            {
                xclass:'Ext.plugin.Pinchemu',
                helpers:true
            }
        ],


        config:{

            xtype:'panel',
            id:'patientListContainer',
            layout:'card',
            //width:'100%',
            flex:1,
            //height:1000,

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
                            Ext.ComponentManager.get('patientListContainer').setActiveItem(1);
                            //Ext.ComponentManager.get('backbutton').setStyle('opacity: 0.3;');
                            Ext.ComponentManager.get('backbutton').show();

                        }
                    }



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
                            Ext.ComponentManager.get('patientListContainer').setActiveItem(0);
                            this.hide();
                        }
                    }
                }
            ]



        }
    }
)
