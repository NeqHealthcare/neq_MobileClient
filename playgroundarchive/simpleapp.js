/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 25.02.12
 * Time: 20:19
 * To change this template use File | Settings | File Templates.
 */
Ext.Loader.setConfig({
    enabled:true
});

Ext.define('ItemOverview',
    {
        extend:'Ext.Panel',

        config:{
            scrollable:false,
            layout:'hbox',
            items:[

                {
                    xtype:'textfield',
                    name:'name',
                    label:'Name'
                },
                {
                    xtype:'emailfield',
                    name:'email',
                    label:'Email'
                },
                {
                    xtype:'passwordfield',
                    name:'password',
                    label:'Password'
                }

            ]}});


Ext.application({
    name:'SkeletonApp',
    launch:function () {


        var form = Ext.create('Ext.form.Panel', {
            scrollable:false,
            items:[

                {
                    xtype:'textfield',
                    name:'name',
                    disabled:true,

                    value:'blaa'
                },
                {
                    xtype:'emailfield',
                    name:'email',
                    label:'Email',
                    value:'sadf@coasdf.com'
                },
                {
                    xtype:'passwordfield',
                    name:'password',
                    label:'Password'
                }
            ]
        });


        var newform = Ext.create('ItemOverview')  ;

        var mycont = Ext.create('Ext.Container',
            {fullscreen:true,
                // width:1500,
//                styleHtmlContent:true,
//                scrollable:true,
//                layout:{type:'vbox',
//                    flex:1},
               // layout:'fit',
                items:[newform]
            }
        )
        // Ext.Viewport.add(mycont);


    }
});