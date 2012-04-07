/**
 * Created by J.G.
 */

Ext.define('NeqMobile.model.Vaccination', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'dose',
            'vaccine_rec_name',
            'vaccine_lot',
            'institution_rec_name',
            {name:'date', type:'date', dateFormat:'time'},
            {name:'next_dose_date', type:'date', dateFormat:'time'},
            'observations'
        ],
        proxy:{
            type:'neqproxy',
            customUrl:'/vaccination/all'
        }

    }
});