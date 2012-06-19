/**
 * Created by JanGansen
 */
Ext.define('NeqMobile.store.ChatterUsers', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.ChatterUser',


        config:{model:'NeqMobile.model.ChatterUser',
              sorters: 'name',
            //           autoLoad:true,
            //           autoSync:true,
            storeId:'chatterUsers'
        }}
);
