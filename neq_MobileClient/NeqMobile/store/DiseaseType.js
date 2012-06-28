/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 27.04.12
 * Time: 03:14
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.store.DiseaseType', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.DiseaseType',

        config:{model:'NeqMobile.model.DiseaseType',
            storeId:'diseasetypes',
            sorters: [
                {
                    property:'name',
                    direction:'ASC'
                }
            ]
        }}
);
