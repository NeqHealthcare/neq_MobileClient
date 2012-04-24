/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 10.04.12
 * Time: 02:06
 * To change this template use File | Settings | File Templates.
 */



Ext.define('NeqMobile.model.LabDetail', {
    extend:'Ext.data.Model',
    requires:['NeqMobile.model.LabTestCriteria'],
    config:{
        fields:[
            'test',
            'name',
            'test_rec_name',
            {name: 'pathologist_rec_name', type: 'string',
                convert: function(value){
                    if (value != "false")
                        {
                            return value;
                        }
                    else
                        return "-";
                }},
            {name: 'date_requested', type: 'date', dateFormat: 'time'},
            {name:'date_analysis', type: 'date', dateFormat: 'time'},
            'requestor_rec_name',
            'criteria'

        ],
        associations:[
            {
                type:'hasMany',
                name:'labtestcriteria',
                model:'NeqMobile.model.LabTestCriteria',
                autoLoad:true,
                associationKey:'criteria' // read child data from child_groups
            }
        ],
        proxy:{
            type:'neqproxy',
            customUrl:'/labtest/one/detail' }

    }
});