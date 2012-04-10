/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 10.04.12
 * Time: 03:27
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.store.LabDetail', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.LabDetail',
        config:{
            model:'NeqMobile.model.LabDetail',
            storeId:'labdetails'
        }}
);