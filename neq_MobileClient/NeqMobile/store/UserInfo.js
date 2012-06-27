Ext.define('NeqMobile.store.Patients', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.Patient',


        config:{model:'NeqMobile.model.Patient',
            sorters:'rec_name',
            //  sorters: 'lastName',
//            autoLoad:true,
//            autoSync:true,

            storeId:'patients'
        }}
);
