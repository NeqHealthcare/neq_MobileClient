Ext.define('NeqMobile.store.DoctorNews', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.DoctorNews',


        config:{
            model:'NeqMobile.model.DoctorNews',
            storeId:'doctornews'
        }}
);