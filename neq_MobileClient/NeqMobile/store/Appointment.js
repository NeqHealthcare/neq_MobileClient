/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 21.04.12
 * Time: 14:02
 * To change this template use File | Settings | File Templates.
 */


Ext.define('NeqMobile.store.Appointment', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.Appointment',


        config:{model:'NeqMobile.model.Appointment',
            storeId:'appointments',
            sorters: [
                {
                    property:'appointment_date',
                    direction:'DESC'
                }
            ]
        }}
);
