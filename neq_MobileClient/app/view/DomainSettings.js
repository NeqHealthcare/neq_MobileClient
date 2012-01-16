/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 16.01.12
 * Time: 00:26
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.view.DomainSettings', {
    extend:'Ext.Container',
    xtype:'DomainSettings',
    config:{
        items:[
            {
                dock:'top',
                xtype:'toolbar',
                title:'Domain Settings',
                items:[
                    {xtype:'button',
                        text:'Back',
                        ui:'backwards'}
                ]
            }
        ]
    }});

