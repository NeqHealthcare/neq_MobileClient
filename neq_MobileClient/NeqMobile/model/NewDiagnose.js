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
            'is_allergy',
            'doctor',
            'pregnancy_warning',
            'age',
            'weeks_of_pregnancy',
            'date_start_treatment',
            'short_comment',
            'is_on_treatment',
            'is_active',
            'diagnosed_date',
            'treatment_description',
            'healed_date',
            'date_stop_treatment',
            'pcs_code',
            'pathology',
            'allergy_type',
            'disease_severity',
            'is_infectious',
            'extra_info',
            'patient_id'
        ],
        proxy:{
            type:'neqproxy',
            customUrl:'/diagnose/create'
        }

    }
});