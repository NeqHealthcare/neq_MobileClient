Ext.define('NeqMobile.store.Patients', {
    extend:'Ext.data.Store',
    requires:'NeqMobile.model.Patient',
    model:'NeqMobile.model.Patient',
    //  sorters: 'lastName',
    autoLoad:true,
//    getGroupString:function (record) {
//        return record.get('lastName')[0];
//    }

     storeId: 'myPatientsStore'
    }
);
