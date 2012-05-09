Ext.define('NeqMobile.store.VitalData', {
        extend:'Ext.data.Store',
        requires:['NeqMobile.model.VitalData', 'Ext.DateExtras'],


        config:{
            model:'NeqMobile.model.VitalData',
            sorters:'date',
            //autoLoad:true,
            //autoSync:true,
            storeId:'vitaldata',
            startDate: function(){
                console.log(Ext.Date.add(new Date(), Ext.Date.DAY, -100));
                return Ext.Date.add(new Date(), Ext.Date.DAY, -7);
            }(),
            endDate: new Date()


        }}
);




