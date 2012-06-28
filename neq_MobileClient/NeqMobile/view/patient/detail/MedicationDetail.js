/*
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
 */

Ext.define('NeqMobile.view.patient.detail.MedicationDetail', {
    extend: 'Ext.form.Panel',
    xtype:'medicationdetail',

    config: {
        layout: {
            type: 'vbox'
        },
        scrollable: false,
        style: 'text-align: left; background-color: #f7f7f7; border-top: 1px solid #ccc;',
        items: [


            {
                xtype:'fieldset',
                layout: 'vbox',
                padding: '3 6 3 6',
                pack: 'center',
                title:'General Information',
                items:[
                    {
                        xtype: 'textfield',
                        style: 'text-align: right;',
                        label: 'Indication:',
                        labelWidth: '30%',
                        name: 'indication_rec_name',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        style: 'text-align: right;',
                        label: 'Physician:',
                        labelWidth: '30%',
                        name: 'doctor_rec_name',
                        readOnly: true
                    }
                ]
            },
            {
                xtype:'fieldset',
                layout: 'vbox',
                padding: '3 6 3 6',
                pack: 'center',
                title:'Dosage Information',
                items:[
                    {
                        xtype: 'textfield',
                        border: 1,
                        style: 'text-align: right;',
                        label: 'Form:',
                        labelWidth: '30%',
                        name: 'form_rec_name',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        border: 1,
                        style: 'text-align: right;',
                        label: 'Administration Route:',
                        labelWidth: '30%',
                        name: 'route_rec_name',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        border: 1,
                        style: 'text-align: right;',
                        label: 'Dose:',
                        labelWidth: '30%',
                        name: 'dose',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        border: 1,
                        style: 'text-align: right;',
                        label: 'Dose Unit:',
                        labelWidth: '30%',
                        name: 'dose_unit_rec_name',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        border: 1,
                        style: 'text-align: right;',
                        label: 'X:',
                        labelWidth: '30%',
                        name: 'dosex',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        border: 1,
                        style: 'text-align: right;',
                        label: 'Treatment Duration:',
                        labelWidth: '30%',
                        name: 'duration',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        border: 1,
                        style: 'text-align: right;',
                        label: 'Treatment Period:',
                        labelWidth: '30%',
                        name: 'duration_period',
                        readOnly: true
                    },
                    {
                        xtype: 'label',
                        padding: '10 0 0 0',
                        html: '<span style="font-weight: bold; font-size: 0.9em; padding-left: 3px">Common Dosage</span>'

                    },
                    {
                        xtype: 'textfield',
                        border: 1,
                        style: 'text-align: right;',
                        label: 'Frequency:',
                        labelWidth: '30%',
                        name: 'common_dosage',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        border: 1,
                        style: 'text-align: right;',
                        label: 'Admin Hours:',
                        labelWidth: '30%',
                        name: 'admin_times',
                        readOnly: true
                    },
                    {
                        xtype: 'label',
                        padding: '10 0 0 0',
                        html: '<span style="font-weight: bold; font-size: 0.9em; padding-left: 3px">Specific Dosage</span>'

                    },
                    {
                        xtype: 'textfield',
                        border: 1,
                        style: 'text-align: right;',
                        label: 'Frequency:',
                        labelWidth: '30%',
                        name: 'frequency',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        border: 1,
                        style: 'text-align: right;',
                        label: 'Unit:',
                        labelWidth: '30%',
                        name: 'frequency_unit',
                        readOnly: true
                    },
                    {
                        xtype: 'label',
                        padding: '10 0 0 0',
                        html: '<span style="font-weight: bold; font-size: 0.9em; padding-left: 3px">Notes</span>'

                    },
                    {
                        xtype: 'textareafield',
                        labelAlign: 'top',
                        name: 'notes',
                        style:'border: 1px solid #ccc;',
                        readOnly: true
                    }

                ]
            },
            {
                xtype: 'label',
                html: ''

            }
        ]
    }

});