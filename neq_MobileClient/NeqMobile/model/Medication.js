/**
 * Created by J.G.
 */
var myproxy = Ext.create('NeqMobile.proxy.NeqProxy',
    {customUrl:'/medication/one'});

Ext.define('NeqMobile.model.Medication', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'id'
            //need input from backend team
        ],
        proxy:myproxy

    }
});