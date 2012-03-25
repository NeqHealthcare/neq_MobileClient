/**
 * Created by J.G.
 */

var myproxy = Ext.create('NeqMobile.proxy.NeqProxy',
    {customUrl:'/labtest/request'});

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
        proxy:myproxy

    }
});