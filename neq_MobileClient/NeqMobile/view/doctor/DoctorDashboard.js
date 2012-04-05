/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 27.03.12
 * Time: 00:42
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.view.doctor.DoctorDashboard', {
    extend:'Ext.Container',
    requires:['NeqMobile.view.doctor.DoctorHeader','NeqMobile.view.doctor.DoctorDashboardLab'],
    xtype:'doctordashboard',
    config:{
        items:[
            { xtype:'doctorheader'},
            {xtype:'doctordashboardlab'}        ]
    }
})