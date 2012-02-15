var myproxy = Ext.create('NeqMobile.proxy.AbstractProxy',
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
            'healead_date',
            'is_active',
            'is_allergy',
            'is_infectious',
            'is_on_treatment'
        ],
        proxy:myproxy
//          associations:[
//
//
//
//                        {
//                            type:'belongsTo',
//                            model:'Patient',
//                            primaryKey:'id',
//                            foreignKey:'id',
//                            ownerModel:'Patient',
//                            associatedModel:'Patient',
//                            associationKey:'id' // read child data from child_groups
//                        }]

        // ]
    }
});