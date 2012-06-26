/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 30.11.11
 * Time: 15:23
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.view.Workspace', {
        extend:'Ext.Container',
        xtype:'workspace',
        requires:['NeqMobile.view.ViewHolder'
        ],

        config:{
            layout:'fit',
            autoDestroy:true,
            items:[

                {xtype:'toolbar',
                    id:'mainToolbar',
                    docked:'top',
                    items:[
                        {
                            iconMask:true,
                            ui:'back',
                            iconCls:'reply',
                            itemId:'backbutton',
                            handler:function () {
                                history.back();
                            }
                        },
                        {
                            iconMask:true,
                            iconCls:'home',
                            itemId:'homebutton'
                        },
                        {
                            xtype:'spacer'
                        },
                        {
                            xtype:'label',
                            tpl:'<span style="color:#E6E6E6">{name}</span>',
                            align:'right',
                            itemId:'doctorname',
                            iconMask: true
                        },
                        {
                            xtype:'button',
                            //icon:'theme/images/user/doctor_avatar_small.jpg',
                            align:'right',
                            itemId:'doctorimage',
                            tpl:'<img src="http://{image_url}?height=28&width=28" height="28" width="28" />',
                            iconMask: true
                        }
                        ,
                        {
                            xtype:'button',
                            itemId:'SettingsButton',
                            iconCls:'settings',
                            iconMask:true,
                            align:'right'}
                    ]
                },
                {
                    layout:{
                        type:'card',
                        animation:{
                            type:'slide',
                            direction:'left'
                        }
                    },
                    itemId:'contentcontainer',
                    items:[
                        {
                            xtype:'viewholder'

                        }
                    ]
                }
            ]
        }
    }

);