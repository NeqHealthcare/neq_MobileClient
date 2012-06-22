Ext.define('NeqMobile.view.doctor.UserView', {
    extend:'Ext.carousel.Carousel',
    requires:['NeqMobile.view.doctor.dashboard.DoctorDashboard', 'NeqMobile.view.doctor.chatter.ChatterContainer'],
    xtype:'userview',

    config:{
        itemId: 'userview',
        items:[

            {
                xtype:'doctordashboard'
            },
            {
                xtype:'chattercontainer'
            }
        ]

    }
})