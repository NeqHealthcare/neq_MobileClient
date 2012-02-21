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
        'is_active',
        'admin_times',
        'common_dosage',
        'duration',
        'form_rec_name',
        'doctor_rec_name',
        'route_rec_name',
        'dose_unit_rec_name',
        'indication_rec_name',
        'common_dosage_rec_name',
        'course_completed',
        'discontinued',
        'medicament_rec_name',
        'start_treatment',
        'end_treatment'
        ],
        proxy:myproxy

    }
});