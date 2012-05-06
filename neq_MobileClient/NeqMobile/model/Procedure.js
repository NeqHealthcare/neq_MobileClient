/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 07.05.12
 * Time: 00:00
 * To change this template use File | Settings | File Templates.
 */


Ext.define('NeqMobile.model.NewDiagnose', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'description',
            'name'
        ],
        proxy:{
            type:'neqproxy',
            customUrl:'/diagnose/procedure'
        }

    }
});