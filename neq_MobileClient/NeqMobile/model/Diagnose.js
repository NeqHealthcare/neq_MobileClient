var myproxy = Ext.create('NeqMobile.proxy.NeqProxy',
    {customUrl:'/dashboard/one'});

Ext.define('NeqMobile.model.Diagnose', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'id',
            'age',
            'allergy_type',
            {name:'date_start_treatment', type:'date',dateFormat:'time'},
            {name:'diagnosed_date', type:'date',dateFormat:'time'},
            'disease_severity',
            'doctor',
            'doctor_rec_name',
            'extra_info',
            {name:'healed_date', type:'date',dateFormat:'time'},
            'is_active',
            'is_allergy',
            'is_infectious',
            'is_on_treatment',
            'pathology_rec_name'
        ],
        proxy:myproxy

    }
});