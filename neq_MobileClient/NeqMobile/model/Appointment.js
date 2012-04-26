/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 21.04.12
 * Time: 14:03
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.model.Appointment', {
    extend:'Ext.data.Model',

        config:{
            fields: [
                'appointment_type',
                'urgency',
                'patient_rec_name',
                'patient',
                'speciality_rec_name',
                'doctor',
                {name: 'appointment_date', type:'date',dateFormat:'time'}

            ],

            proxy: {
                type: 'neqproxy',
                customUrl: '/appointment/latest'
            }
        }

    }
)

