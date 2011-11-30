/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 30.11.11
 * Time: 15:23
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.view.Workarea', {
        extend:'Ext.Panel',
        requires:['NeqMobile.view.login.LoginForm'],
        alias: 'widget.workarea',


        config: {

            defaults: {
              //  styleHtmlContent: true
            },

            layout: {
                type: 'card',
                animation: {
                    type: 'fade'
                }
            },

            items: [
                {
                    xtype:'loginform'
                }
            ]
        }}

);