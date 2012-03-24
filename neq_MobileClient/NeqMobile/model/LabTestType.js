/**
 * Created by J.G.
 */

var myproxy = Ext.create('NeqMobile.proxy.NeqProxy',
    {customUrl:'/labtest/params'});

Ext.define('NeqMobile.model.LabTestType', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'id',
            'code',
            'name'
        ],
        proxy:myproxy

    }
});
