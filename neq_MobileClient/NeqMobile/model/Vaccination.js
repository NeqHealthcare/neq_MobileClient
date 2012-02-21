/**
 * Created by J.G.
 */
var myproxy = Ext.create('NeqMobile.proxy.NeqProxy',
    {customUrl:'/vaccination/all'});

Ext.define('NeqMobile.model.Vaccination', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'dose',
            'vaccine_rec_name',
            'vaccine_lot',
            'institution_rec_name',
            'date',
            'next_dose_date',
            'observations'
        ],
        proxy:myproxy

    }
});