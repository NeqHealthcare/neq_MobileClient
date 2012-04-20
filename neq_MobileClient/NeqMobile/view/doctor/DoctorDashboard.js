/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 27.03.12
 * Time: 00:42
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.view.doctor.DoctorDashboard', {
    extend:'Ext.Container',
    requires:['NeqMobile.view.doctor.DoctorHeader', 'NeqMobile.view.doctor.DoctorDashboardLab',
              'NeqMobile.view.chart.TestChart', 'NeqMobile.view.doctor.DoctorNewsFeedContainer'],
    xtype:'doctordashboard',
    config:{
        styleHtmlContent:true,
        scrollable:true,
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
                xtype: 'doctornewsfeedcontainer'
            }

//            ,
//          {
                // xtype:'testchart'
//            }

        ]
    }
});