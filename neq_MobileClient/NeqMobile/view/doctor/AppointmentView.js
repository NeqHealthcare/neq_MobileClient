/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 10.05.12
 * Time: 18:13
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.view.doctor.AppointmentView',{
    extend:'Ext.Container',
    xtype: 'appointmentview',
    config:{
        //layout: 'card',
        items: [
            {
            xtype: 'list',
            id:'appointmentlist',
            width: 300,
            height: 200,
            scrollable:false,
            itemTpl:['<div>{[NeqMobile.util.Renderer.daterenderer(values.appointment_date)]}'+'{patient_rec_name}</div>'],
            store: 'appointments'
            },
            {
                xtype:'container',
                id:'appointmentdetail',
                width: 300,
                height:400,
                items: [
                    {
                        width: 40,
                        xtype: 'button',
                        iconCls:'reply',
                        iconMask:true
                    },
                    {
                        xtype: 'datepickerfield',
                        label: 'Appointment Time',
                        dateFormat: 'd.m.Y H:i',
                        id:'appointmenttime',
                        readOnly: 'true'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Patient',
                        id:'patientname',
                        readOnly: 'true'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Urgency Level',
                        id:'urgency',
                        readOnly: 'true'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Type',
                        id:'appointmenttype',
                        readOnly: 'true'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Speciality',
                        id: 'speciality',
                        placeHolder: '-',
                        readOnly: 'true'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Consultation Service',
                        id: 'consultation',
                        readOnly: 'true',
                        placeHolder: '-',
                        readOnly: 'true'
                    }

                ]
            }

               ]

    }
    }
);
