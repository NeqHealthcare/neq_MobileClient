/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 14.02.12
 * Time: 19:09
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.store.Diagnoses', {
        extend:'Ext.data.Store',
        requires:'NeqMobile.model.Diagnose',


        config:{model:'NeqMobile.model.Diagnose',
            //  sorters: 'lastName',
 //           autoLoad:true,
 //           autoSync:true,
            storeId:'diagnoses',
            sorters: [
                {
                    property:'diagnosed_date',
                    direction:'DESC'
                }
            ]
        }}
);
