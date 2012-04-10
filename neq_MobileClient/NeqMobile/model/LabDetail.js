/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 10.04.12
 * Time: 02:06
 * To change this template use File | Settings | File Templates.
 */



Ext.define('NeqMobile.model.LabDetail', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'test',
            'name',
            'test_rec_name',
            'pathologist_rec_name',
            'date_requested',
            'date_analysis',
            'requestor_rec_name'
     //       'criteria'
        ],
 //       hasMany: {model: 'NeqMobile.model.LabDetail', name: 'criteria'},

        proxy:{
            type:'neqproxy',
            customUrl:'/labtest/one/detail',
            reader: {
                type: 'json',
                root: 'data'
            },

        associations: [{
            type: 'hasMany',
            model: 'NeqMobile.model.LabDetail',
            primaryKey: 'test',
            autoLoad: 'true',
            associationKey: 'criteria'

        },{
            type: 'belongsTo',
            model: 'NeqMobile.model.LabDetail',
            primaryKey: 'test',
            associationKey: 'data'
        }
        ]
}

}

});