Ext.define('NeqMobile.store.Patients', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.Patient',


        config:{model:'NeqMobile.model.Patient',
            //  sorters: 'lastName',
//            autoLoad:true,
//            autoSync:true,

            storeId:'myPatientsStore'
        }}
);
