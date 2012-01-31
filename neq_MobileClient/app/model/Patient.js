Ext.define('NeqMobile.model.Patient', {
    extend:'Ext.data.Model',
    config:{

        fields:['id', 'rec_name', 'doctor', 'firstName', 'lastName', 'age', 'sex', 'other', 'disease', 'station', 'maritalstatus'],
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