/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 22.01.12
 * Time: 19:20
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.view.menu.Settings', {
    extend:'Ext.Panel',
var overlay = Ext.create('Ext.Panel', {
            floating        : true,
            modal           : true,
            hidden          : true,
            height          : 300,
            width           : '50%',
            contentEl       : 'content',
            styleHtmlContent: true,
            scrollable      : true,
            items: [{
                    docked: 'top',
                    xtype : 'toolbar',
                    title : 'Overlay Title'
            }]
}