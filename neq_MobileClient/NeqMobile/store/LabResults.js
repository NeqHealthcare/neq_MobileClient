/**
 * Created by JetBrains WebStorm.
 * User: joohee
 * Date: 3/20/12
 * Time: 2:59 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.store.LabResults', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.LabResults',
        config:{
            model:'NeqMobile.model.LabResults',
            storeId:'labresults',
            sorters: [
                {
                    property:'date_analysis',
                    direction:'DESC'
                }
            ]
        }}
);