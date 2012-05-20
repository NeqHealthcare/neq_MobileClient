/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 07.05.12
 * Time: 00:00
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.store.Procedure', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.Procedure',

        config:{
            model:'NeqMobile.model.Procedure',
            storeId:'procedures'
        }}
);