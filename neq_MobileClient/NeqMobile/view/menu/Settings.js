/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 22.01.12
 * Time: 19:20
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.view.menu.Settings', {
    extend:'Ext.Panel',
    singleton:true,
    xtype:'menuSettings',
//    initialize:function () {
//        this.callParent(arguments);
//        this.on({
//            disabledchange:function (panel) {
//                panel.destroy();
//            }});
//    },
    destroy:function () {
        console.log('menuSettings destroyed')
        this.callParent(arguments);
    },
    config:{
       // modal:true,
        hideOnMaskTap:true,
        hidden: true,
        // hidden:true,
        // height:300,
        width: 120,
        height: 45,
        autoDestroy:true,
        items:[
            {

                xtype:'button',
                text:'Logout',
                itemId:'logoutbutton',
                ui: 'decline'
            }
        ]}
});