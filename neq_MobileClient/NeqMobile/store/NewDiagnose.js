/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 06.05.12
 * Time: 23:49
 * To change this template use File | Settings | File Templates.
 */


Ext.define('NeqMobile.store.NewDiagnose', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.NewDiagnose',


        config:{model:'NeqMobile.model.NewDiagnose',
                storeId:'newdiagnoses'
        }}
);
