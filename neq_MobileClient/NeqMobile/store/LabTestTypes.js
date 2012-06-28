/**
 * Created by J.G.
 */
Ext.define('NeqMobile.store.LabTestTypes', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.LabTestType',

        config:{model:'NeqMobile.model.LabTestType',
            sorters: [
                {
                    property : 'name',
                    direction: 'ASC'
                }],
            storeId:'labtesttypes'
        }}
);
