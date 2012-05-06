Ext.define('NeqMobile.store.VitalData', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.VitalData',


        config:{
            model:'NeqMobile.model.VitalData',
            sorters:'date',
            //autoLoad:true,
            //autoSync:true,
            storeId:'vitaldata'
        }}
);
