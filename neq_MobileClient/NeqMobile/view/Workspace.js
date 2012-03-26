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
        requires:['NeqMobile.view.patient.PatientInfo', 'NeqMobile.view.patient.PatientList', 'NeqMobile.view.patient.PatientInfoContd1'],

        config:{
            layout:'fit',
            autoDestroy:true,
            items:[

                {xtype:'toolbar',
                    docked:'top',
                    items:[
                        {xtype:'spacer'},

                        {
                            xtype:'label',
                            html:'<span style="color:#E6E6E6">Dr. Jan Gansen</span>',
                            align:'right'},
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
                            layout:'card',
                            flex:5,
                            region:'center',
                            items:[
                                {
                                    xtype:'patientdashboard'
                                }
                            ]
                        }
                    ]                  }
            ]
        }
    }

);