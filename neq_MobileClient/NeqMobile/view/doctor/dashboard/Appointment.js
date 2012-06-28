/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 21.04.12
 * Time: 13:49
 * To change this template use File | Settings | File Templates.
 */


Ext.define('NeqMobile.view.doctor.dashboard.Appointment',{
    extend:'Ext.form.FieldSet',
    requires:'NeqMobile.view.doctor.dashboard.AppointmentView',
    xtype: 'appointment',
    config: {
        padding: '5',
        //height: 150,
       // width:300,
        title: 'Appointments',
        items: [
            {
                type: 'container',
                layout:'hbox',
                width: '100%',
                items: [
                    {
                        xtype: 'button',
                        iconCls:'arrow_left',
                        iconMask:true,
                        id: 'appointmentBackButton',
                        round:true,
                        margin: '0px 10 px 0px 0px',
                        hidden:true
                    },
                    {
                        xtype: 'selectfield',
                        width: 250,
                        id: 'appointmentsnumberselctfield',
                        label: 'Appointments',
                        labelWidth: 135,
                        padding:'0, 0, 10, 0',
                        value: '10',
                        options: [
                            {text: '5', value: '5'},
                            {text: '10', value: '10'},
                            {text: '15', value: '15'}
                        ]

                    }
                ]
            },


            {
                xtype: 'appointmentview',
                padding: 5
                ,scrollable: false
                ,margin: 0
            }
        ]
    }

})