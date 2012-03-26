/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 27.03.12
 * Time: 00:42
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.view.patient.PatientDashboard', {
    extend:'Ext.carousel.Carousel',
    xtype:'patientdashboard',
    config:{
        items:[
            {
                xtype:'patientinfo'
            },
            {
                xtype:'patientInfoContd1'
            }
        ]

    }
})