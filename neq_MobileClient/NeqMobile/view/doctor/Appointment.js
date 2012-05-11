/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 21.04.12
 * Time: 13:49
 * To change this template use File | Settings | File Templates.
 */


Ext.define('NeqMobile.view.doctor.Appointment',{
    extend:'Ext.form.FieldSet',
    requires:'NeqMobile.view.doctor.AppointmentView',
    xtype: 'appointment',
    config: {
        margin: '0',
        padding: '5',
        title: 'Appointments',
        items: [
            {
                xtype: 'selectfield',
                id: 'appointmentsnumberselctfield',
                label: 'Appointments',
                value: '10',
                options: [
                    {text: '1', value: '1'},
                    {text: '5', value: '5'},
                    {text: '10', value: '10'},
                    {text: '15', value: '15'}
                ]

            },
            {
                xtype: 'appointmentview'
            }
        ]
    }

})