/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 30.11.11
 * Time: 15:23
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.view.Workspace', {
        extend:'Ext.Panel',
        requires:['NeqMobile.view.login.LoginForm'],
        alias: 'widget.workspace',


        config: {

            layout: {
                type: 'card',
                animation: {
                    type: 'slide',
                   direction: 'left'
                }
            },

            items: [
                {
                    xtype:'loginform'
                },
                {xtype: 'patientoverview'
                }
            ]
        }}

);