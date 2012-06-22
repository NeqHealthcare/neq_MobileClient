/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 10.05.12
 * Time: 18:13
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.view.doctor.dashboard.AppointmentView',{
    extend:'Ext.Container',
    xtype: 'appointmentview',
    config:{
        layout: 'card',
        padding: 5,
       // width: 300,
        height:270,
        items: [
            {
            xtype: 'list',
            id:'appointmentlist',
            scrollable:true,
            itemTpl:['<div>{[NeqMobile.util.Renderer.daterenderer(values.appointment_date)]} '+'{patient_rec_name}</div>'],
            store: 'appointments'
            },
            {
                xtype:'container',
                id:'appointmentdetail',
                scrollable: false,
               items: [
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
                        placeHolder: '-'
                    },
                   {
                       align: 'center',
                       width: 50,
                       xtype: 'button',
                       iconCls:'reply',
                       iconMask:true
                   }

                ]
            }

               ]

    }
    }
);
