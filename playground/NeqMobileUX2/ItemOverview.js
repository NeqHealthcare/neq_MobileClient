/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 25.02.12
 * Time: 23:22
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.ux.expandableList.ItemOverview',
    {
        extend:'Ext.form.Panel',
        xtype:'itemoverview',
        config:{
            layout:{type:'hbox', flex:1},
            scrollable:false,
            // disabled:true,
            items:[
                {
                    xtype:'textfield',
                    name:'name',
                    disabled:true,
                    value:'Azziophrene',
                    flex:1
                },
                {
                    xtype:'textfield',
                    name:'email',
                    disabled:true,
                    value:'02.01.2011'  ,
                    flex:1

                },
                {
                    xtype:'textfield',
                    name:'password',
                    disabled:true,
                    value:'23.02.2011'  ,
                    flex:1
                }                     ,
                {
                    xtype:'checkboxfield',
                    disabled:true,
                    checked:'true'   ,
                    flex:1
                } ,
                {xtype:'checkboxfield',
                    disabled:true,
                    checked:'false',
                    flex:1}
            ]

        }

    })