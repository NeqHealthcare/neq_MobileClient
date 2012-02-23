var myproxy = Ext.create('NeqMobile.proxy.NeqProxy',
    {customUrl:'/dashboard/one'});

Ext.define('NeqMobile.model.Diagnose', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'id',
            'age',
            'allergy_type',
            'date_start_treatment',
            'diagnosed_date',
            'disease_severity',
            'doctor',
            'doctor_rec_name',
            'extra_info',
            'healed_date',
            'is_active',
            'is_allergy',
            'is_infectious',
            'is_on_treatment',
            'pathology_rec_name'
        ],
        proxy:myproxy

    }
});