/**
 * Created by J.G.
 */
Ext.define('NeqMobile.store.Medications', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.Medication',

        config:{model:'NeqMobile.model.Medication',
            storeId:'medications',
            sorters: [
                {
                    property:'start_treatment',
                    direction:'DESC'
                }
            ]
        }}
);
