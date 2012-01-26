Ext.define('NeqMobile.store.Patients', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.Patient',


        config:{model:'NeqMobile.model.Patient',
            //  sorters: 'lastName',
            autoLoad:true,
            autoSync:true,
//    getGroupString:function (record) {
//        return record.get('lastName')[0];
//    }

            storeId:'myPatientsStore'
        }}
);
