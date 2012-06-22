Ext.define('NeqMobile.view.doctor.UserView', {
    extend:'Ext.carousel.Carousel',
    requires:['NeqMobile.view.doctor.DoctorDashboard', 'NeqMobile.view.doctor.ChatterContainer'],
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