/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 27.03.12
 * Time: 00:42
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.view.patient.PatientView', {
    extend:'Ext.carousel.Carousel',
    requires:['NeqMobile.view.patient.PatientDashboard', 'NeqMobile.view.patient.PatientLab',
              'NeqMobile.view.patient.PatientInfoImages', 'NeqMobile.view.patient.PatientHistoricData','NeqMobile.view.patient.create.DiseaseType'],
    xtype:'patientview',

    config:{
        items:[

            {
                xtype:'patientinfoimages'
            },
            {
                xtype : 'toolbar',
                ui: 'neutral',
                docked: 'top',
                scrollable: false,
                defaults: {
                    iconMask: true,
                    ui      : 'plain'
                },
                items: [
                    { iconMask: true, iconCls: 'compose', itemId:'showDocuments' },
                    { iconMask: true, iconCls: 'home', itemId:'showPatientMain' },
                    { iconMask: true, iconCls: 'maps', itemId:'showLabTest' },
                    { iconMask: true, iconCls: 'locate', itemId:'showVitalData' }
                ],
                layout: {
                    pack : 'center',
                    align: 'center'
                }
            },
            {
                xtype:'patientdashboard'
            }
            ,
            {
                xtype:'patientlab'
            },
            {
                xtype:'patienthistoricdata'
            }

        ]

    }
})