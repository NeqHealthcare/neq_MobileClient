/**
 * Created by J.G.
 */

Ext.define('NeqMobile.model.LabTestType', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'id',
            'code',
            'name'
        ],
        proxy:{
            type:'neqproxy',
            customUrl:'/labtest/params'
        }

    }
});
