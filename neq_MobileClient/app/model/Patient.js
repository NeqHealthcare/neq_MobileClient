Ext.define('NeqMobile.model.Patient', {
    extend:'Ext.data.Model',
    config:{

        fields:['id', 'rec_name', 'age' ,'diseases', 'latestDiagnoseRecName', 'primary_care_doctor_name', 'primary_care_doctor_rec_name', 'sex']
//        proxy:{
//            type:'ajax',
//            reader:{
//                type:'json',
//                rootProperty:'results'
//            }
//        }
    }
})
;