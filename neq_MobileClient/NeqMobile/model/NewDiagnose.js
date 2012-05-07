/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 06.05.12
 * Time: 23:49
 * To change this template use File | Settings | File Templates.
 */


Ext.define('NeqMobile.model.NewDiagnose', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'status',
            'allergy',
            'doctor',
            'pregnancy_warning',
            'age',
            'allergy_type',
            'weeks_of_pregnancy',
            {name:'date_start_treatment', type:'date',dateFormat:'time'},
            'short_comment',
            'is_on_treatment',
            'is_active',
            {name:'diagnosed_date', type:'date',dateFormat:'time'},
            'treatment_description',
            {name:'healed_date', type:'date',dateFormat:'time'},
            {name:'date_stop_treatment', type:'date',dateFormat:'time'},
            'pcs_code',
            //disease_id
            'pathology',
            'allergy_type',
            'diseas_severity',
            'is_infectious',
            'extra_info',
            'patient_id',
            'doctor',
            'doctor_rec_name',
            'extra_info'
        ],
        proxy:{
            type:'neqproxy',
            customUrl:'/diagnose/create'
        }

    }
});