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
        requires:['NeqMobile.view.doctor.DoctorDashboard', 'NeqMobile.view.patient.PatientView', 'NeqMobile.view.patient.PatientList',
            'NeqMobile.view.patient.PatientLab', 'NeqMobile.view.patient.PatientInfoImages', 'NeqMobile.view.patient.PatientHistoricData'
        ],

        config:{
            layout:'fit',
            autoDestroy:true,
            items:[

                {xtype:'toolbar',
                    docked:'top',
                    items:[
                        { iconMask:true, ui:'back', iconCls:'reply', itemId:'backbutton',
                            handler:function () {
                                history.back();
                            }},
                        { iconMask:true, iconCls:'home', itemId:'homebutton'},

                        {xtype:'spacer'},




                        {
                            xtype:'label',
                            tpl:'<span style="color:#E6E6E6">{name}</span>',
                            align:'right',
                            itemId:'doctorname'
                        },
                        {
                            xtype:'button',
                            icon:'theme/images/user/doctor_avatar_small.jpg',
                            align:'right',
                            itemId:'doctorimage'
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
                    layout:'hbox',
                    items:[
                        {
                            region:'west',
                            xtype:'patientlist'
                        },
                        {
                            xtype:'container',
                            layout:{
                                type:'card',
                                animation:'fade'
                            },
                            flex:5,
                            region:'center',
                            itemId:'dashboardcontainer',
                            items:[
                                {
                                    xtype:'doctordashboard'
                                }
                            ]
                        }
                    ]                  }
            ]
        }
    }

);