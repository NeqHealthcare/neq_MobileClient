/**
 * Created by J.G.
 */
Ext.define('NeqMobile.store.Vaccinations', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.Vaccination',

        config:{
            model:'NeqMobile.model.Vaccination',
            storeId:'vaccinations',
            sorters: [
                {
                    property:'next_dose_date',
                    direction:'DESC'
                }
            ],
        }}
);