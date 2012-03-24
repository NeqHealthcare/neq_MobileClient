/**
 * Created by J.G.
 */
Ext.define('NeqMobile.store.LabTestRequests', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.LabTestRequest',

        config:{model:'NeqMobile.model.LabTestRequest',
            storeId:'labtestrequests'
        }}
);
