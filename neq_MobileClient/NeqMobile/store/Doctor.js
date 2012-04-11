Ext.define('NeqMobile.store.Doctor', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.Userinfo',


        config:{model:'NeqMobile.model.Userinfo',
            sorters: 'doc_rec_name',
            sorters: 'last_login',
//            autoLoad:true,
//            autoSync:true,

            storeId:'myDoctorStore'
        }}
);
