/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 14.02.12
 * Time: 19:09
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.store.Documents', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.Document',


        config:{model:'NeqMobile.model.Document',
            sorters:'description',
            //autoLoad:true,
            //autoSync:true,
            storeId:'documents'
        }}
);

