Ext.define('NeqMobile.store.DoctorNewsTopics', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.DoctorNewsTopic',


        config:{
            model:'NeqMobile.model.DoctorNewsTopic',
            storeId:'doctornewstopics'
        }}
);