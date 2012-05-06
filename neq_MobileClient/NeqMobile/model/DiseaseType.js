/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 27.04.12
 * Time: 03:12
 * To change this template use File | Settings | File Templates.
 */



Ext.define('NeqMobile.model.DiseaseType', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'code',
            'name',
            'category_reg_name'
        ],
        proxy:{
            type:'neqproxy',
            customUrl:'/diagnose/diseases'
        }

    }
});