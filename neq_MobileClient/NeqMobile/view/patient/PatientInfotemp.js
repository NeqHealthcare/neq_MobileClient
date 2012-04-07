/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 27.03.12
 * Time: 00:42
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.view.patient.PatientInfo', {
    extend:'Ext.carousel.Carousel',
    requires:['NeqMobile.view.patient.PatientDashboard','NeqMobile.view.patient.PatientLab'],
    xtype:'patientinfo',
    config:{
        items:[
            {
                xtype:'patientdashboard'
            }
            ,
            {
                xtype:'patientlab'
            }
        ]

    }
})