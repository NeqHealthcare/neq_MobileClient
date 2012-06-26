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
              'NeqMobile.view.patient.PatientInfoImages', 'NeqMobile.view.patient.PatientStatistics','NeqMobile.view.patient.create.DiseaseType'],
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
                    { iconMask: true, iconCls: 'photo2', itemId:'showDocuments' },
                    { iconMask: true, iconCls: 'user', itemId:'showPatientMain' },
                    { iconMask: true, iconCls: 'lab', itemId:'showLabTest' },
                    { iconMask: true, iconCls: 'heart', itemId:'showVitalData' }
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
                xtype:'patientstatistics'
            }

        ]

    }
})