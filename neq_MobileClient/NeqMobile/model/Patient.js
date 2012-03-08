var myproxy = Ext.create('NeqMobile.proxy.NeqProxy',
    {customUrl:'/patients/all_for_user'});

Ext.define('NeqMobile.model.Patient', {
        extend:'Ext.data.Model',
        config:{
            fields:['id', 'rec_name',{name:'age', type:'date',dateFormat:'time'},
                'diseases', 'latestDiagnoseRecName', 'primary_care_doctor_name', 'primary_care_doctor_rec_name', 'sex'
            ],
            proxy:myproxy,
            associations:[
                {
                    type:'hasMany',
                    model:'NeqMobile.model.DiagnoseOverview',
                    primaryKey:'id',
                    foreignKey:'primary_care_doctor',
                    filterProperty:'primary_care_doctor_name',
                    autoLoad:true
                   // associationKey:'diseases'
                }
            ]
        }
    }
);