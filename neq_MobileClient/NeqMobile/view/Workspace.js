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

            listeners:
            {
              erased:function(cmp,eOpts){
                  cmp.destroy();
                  console.log('workspace destroyed')
              }
            }   ,
            layout:'fit',
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
                            iconMask:true,
                            iconCls:'chat3',
                            itemId:'chatterButton'
                        },
                        {
                            xtype:'spacer'
                        },

                        {
                            xtype:'label',
                            tpl:'<span style="color:#E6E6E6">{name}</span>',
                            align:'right',
                            itemId:'doctorname',
                            iconMask:true
                        },
                        {
                            xtype:'button',
                            //icon:'theme/images/user/doctor_avatar_small.jpg',
                            align:'right',
                            itemId:'asdf',
                            text:'bla',
                            handler:function(

                                )
                            {Ext.ComponentQuery.query('medicationdetail')[0].destroy();}
                        },
                        {
                            xtype:'button',
                            //icon:'theme/images/user/doctor_avatar_small.jpg',
                            align:'right',
                            itemId:'doctorimage',
                            tpl:'<img src="http://{image_url}?height=40&width=40" ' +
                                'style="background-size: cover; background-position: center center;' +
                                'background: #ddd; border-radius: 1px;' +
                                '-webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6);"' +
                                //'height=48' +
                                '/>',
                            //iconMask: false
                            style:'border: none;'
                            //, height:48, width:48
                            //,padding: 10, margin:'0 10 0 10'
                        }
                        ,
                        {
                            xtype:'button',
                            itemId:'SettingsButton',
                            iconCls:'settings',
                            iconMask:true,
                            align:'right'
                            //,margin: 0
                            //,padding: 10
                            //,style:'border: none;'
                        }
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
                           xtype:'medicationdetail'
                        }
                    ]
                }
            ]
        }
    }

);