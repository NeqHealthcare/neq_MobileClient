/**
 * Created by JanGansen
 */
Ext.define('NeqMobile.store.ChatterPosts', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.ChatterPost',


        config:{model:'NeqMobile.model.ChatterUser',
            sorters: 'timestamp',
            //           autoLoad:true,
            //           autoSync:true,
            storeId:'chatterPosts'
        }}
);
