/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 30.11.11
 * Time: 15:23
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.view.Workarea', {
        extend:'Ext.Container',
        requires:['NeqMobile.view.login.LoginForm','NeqMobile.view.PatientOverview'],
        alias: 'widget.workarea',


        config: {

            defaults: {
              //  styleHtmlContent: true
            },

            layout: 'card'

,active:1,

            items: [
                {
                    xtype:'loginform'
                }
            ]
        }}

);