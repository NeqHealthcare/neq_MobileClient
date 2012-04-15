/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 03.02.12
 * Time: 02:16
 * To change this template use File | Settings | File Templates.
 */

Ext.Loader.setConfig({
    enabled:true,
    disableCaching:true // for debugging
});

Ext.Loader.setPath({
    'NeqMobile.ux.expandableList':'./NeqMobileUX'
})

//Ext.define('Custombutton', {
//        extend:'Ext.Button',
//        xtype:'custombutton',
//        config:{
//        }}
//)




Ext.application({
    name:'SkeletonApp',
    requires:['NeqMobile.ux.expandableList.ItemOverview'],
    launch:function () {

        var dataviewconfig = {
            headerCmp:{
                xtype:'container',
                layout:'hbox',
                title:'My Toolbar',
                items:[
        {html:'Medication',flex:1},{html:'start of treatment',flex:1},{html:'end of treatment',flex:1},{html:'Course Completed',flex:1},{html: 'Discontinued',flex:1},{html:'Active',flex:1}
             ]
            },
            overviewXtype:'itemoverview',
            detailXtype:'formpanel',
            scrollable:false,
            store:{
                fields:['name', 'age'],
                data:[
                    {name:'Jamie Avins', age:100},
                    {name:'Rob Dougan', age:21},
                    {name:'Tommy Maintz', age:24},
                    {name:'Jacky Nguyen', age:24},
                    {name:'Ed Spencer', age:26},
                    {name:'Jamie Avins', age:100},
                    {name:'Rob Dougan', age:21},
                    {name:'Tommy Maintz', age:24},
                    {name:'Jacky Nguyen', age:24},
                    {name:'Ed Spencer', age:26},
                    {name:'Jamie Avins', age:100},
                    {name:'Rob Dougan', age:21},
                    {name:'Tommy Maintz', age:24},
                    {name:'Jacky Nguyen', age:24},
                    {name:'Ed Spencer', age:26},
                    {name:'Jamie Avins', age:100},
                    {name:'Rob Dougan', age:21},
                    {name:'Tommy Maintz', age:24},
                    {name:'Jacky Nguyen', age:24},
                    {name:'Ed Spencer', age:26},
                    {name:'Jamie Avins', age:100},
                    {name:'Rob Dougan', age:21},
                    {name:'Tommy Maintz', age:24},
                    {name:'Jacky Nguyen', age:24},
                    {name:'Ed Spencer', age:26},
                    {name:'Jamie Avins', age:100},
                    {name:'Rob Dougan', age:21},
                    {name:'Tommy Maintz', age:24},
                    {name:'Jacky Nguyen', age:24},
                    {name:'Ed Spencer', age:26},
                    {name:'Jamie Avins', age:100},
                    {name:'Rob Dougan', age:21},
                    {name:'Tommy Maintz', age:24},
                    {name:'Jacky Nguyen', age:24},
                    {name:'Ed Spencer', age:26},
                    {name:'Jamie Avins', age:100},
                    {name:'Rob Dougan', age:21},
                    {name:'Tommy Maintz', age:24},
                    {name:'Jacky Nguyen', age:24},
                    {name:'Ed Spencer', age:26}
                ]
            }
        };

        var dw1 = Ext.create('NeqMobile.ux.expandableList.ExpandableList', dataviewconfig);
        var dw2 = Ext.create('NeqMobile.ux.expandableList.ExpandableList', dataviewconfig);
        var dw3 = Ext.create('NeqMobile.ux.expandableList.ExpandableList', dataviewconfig);

        Ext.create('Ext.Container',
            {fullscreen:true,
                // width:1500,
                styleHtmlContent:true,
                scrollable:true,
//                layout:{type:'vbox',
//                    flex:1},
                items:[

                    dw1,
                    {html:'<h1>das ist ein Abstandshalter - Groesse 100 px</h1>' }
//                        height:100},
//                    dw2,
//                    {html:'<h1>das ist ein Abstandshalter - Groesse 200 px</h1>', height:200},
//                    dw3
                ]
            }
        )

//     Ext.Viewport.add(Ext.create('SkeletonApp.view.Viewport'));
//    }
    }});
