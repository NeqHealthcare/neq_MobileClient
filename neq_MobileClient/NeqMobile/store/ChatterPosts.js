/**
 * Created by JanGansen
 */
Ext.define('NeqMobile.store.ChatterPosts', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.ChatterPost',


        config:{model:'NeqMobile.model.ChatterPost',
            sorters: [
                {
                    property:'timestamp',
                    direction:'DESC'
                }
                ],

            //           autoLoad:true,
            //           autoSync:true,
            storeId:'chatterPosts'
        }}
);
