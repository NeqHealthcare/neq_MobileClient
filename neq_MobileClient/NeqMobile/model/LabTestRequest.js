/**
 * Created by J.G.
 */

Ext.define('NeqMobile.model.LabTestRequest', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'patient_id',
            'state',
            'rec_name',
            'doctor_rec_name',
            {name:'date', type:'date',dateFormat:'time'}
        ],
        proxy:{
            type:'neqproxy',
            customUrl:'/labtest/request'
        }

    }
});