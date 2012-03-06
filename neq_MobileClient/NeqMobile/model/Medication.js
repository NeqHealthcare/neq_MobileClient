/**
 * Created by J.G.
 */
var myproxy = Ext.create('NeqMobile.proxy.NeqProxy',
    {customUrl:'/medication/all'});

Ext.define('NeqMobile.model.Medication', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'dose',
            'route',
            'duration_period',
            'frequency_unit',
            'dose_unit',
            'frequency',
            'indication',
            'notes',
            {name:'is_active', type:'bool'},
            'admin_times',
            'common_dosage',
            'duration',
            'form_rec_name',
            'doctor_rec_name',
            'route_rec_name',
            'dose_unit_rec_name',
            'indication_rec_name',
            'common_dosage_rec_name',
            {name:'course_completed',type:'bool'},
            {name:'discontinued',type:'bool'},
            'medicament_rec_name',
            {name:'start_treatment', type:'date',dateFormat:'time'},
            {name:'end_treatment', type:'date',dateFormat:'time'}
        ],
        proxy:myproxy

    }
});