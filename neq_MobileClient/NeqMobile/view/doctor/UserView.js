Ext.define('NeqMobile.view.doctor.UserView', {
    extend:'Ext.carousel.Carousel',
    requires:['NeqMobile.view.doctor.dashboard.DoctorDashboard', 'NeqMobile.view.doctor.chatter.ChatterContainer'],
    xtype:'userview',

    config:{
        itemId: 'userview',
        items:[
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
                    { iconMask: true, iconCls: 'home', itemId:'showUserDashboardIcon' },
                    { iconMask: true, iconCls: 'chat3', itemId:'showChatterIcon' }
                ],
                layout: {
                    pack : 'center',
                    align: 'center'
                }
            },

            {
                xtype:'doctordashboard'
            },
            {
                xtype:'chattercontainer'
            }
        ]

    }
})