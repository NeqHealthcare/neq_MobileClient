/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 27.03.12
 * Time: 00:42
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.view.doctor.dashboard.DoctorDashboard', {
    extend:'Ext.Container',
    requires:['NeqMobile.view.doctor.dashboard.DoctorHeader',
              'NeqMobile.view.doctor.dashboard.DoctorDashboardLab',
              'NeqMobile.view.doctor.dashboard.DoctorNewsFeedContainer',
              'NeqMobile.view.doctor.dashboard.Appointment'],
    xtype:'doctordashboard',


    config:{
        styleHtmlContent:true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        layout:{
            itemId: 'doctordashboard',
            layout: 'vbox',
            cls: 'x-doctordashboard'
        },
        margin: 0,
        padding: 15,
        items:[

            {
                xtype:'doctorheader'

            },
            {
                xtype:'doctordashboardlab'
            },
            {
                xtype: 'appointment'
            },
            {
                xtype: 'doctornewsfeedcontainer'
            }
//            ,
//          {
                // xtype:'testchart'
//            }

        ]
    }
});