/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 30.11.11
 * Time: 14:51
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.view.Dashboard', {
    extend:'Ext.Container',
    xtype:'Dashboard',
    required:['NeqMobile.view.patient.Info', 'NeqMobile.view.patient.List'],

    config:{
        layout:'hbox',
        fullscreen:true,
        items:[

            {xclass:'NeqMobile.view.patient.List',
                flex:25},
            {
                xclass:'NeqMobile.view.patient.Info',
                flex:75}
        ]
    }
});