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
              'NeqMobile.view.patient.PatientInfoImages', 'NeqMobile.view.patient.PatientHistoricData'],
    xtype:'patientview',

    config:{
        items:[

            {
                xtype:'patientinfoimages'
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