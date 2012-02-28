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
        scrollable: false,
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'fieldset',
                        padding: '0 10 0 10',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                flex: 1,
                                items: [
                                    {
                                        xtype: 'textfield',
                                        style: 'text-align: right;',
                                        label: 'Indication:',
                                        name:  'indication_rec_name'
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                flex: 1
                            },
                            {
                                xtype: 'panel',
                                flex: 1,
                                items: [
                                    {
                                        xtype: 'textfield',
                                        style: 'text-align: right;',
                                        label: 'Physician:',
                                        name: 'doctor_rec_name'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        padding: '0 10 0 10',
                        title: 'Dosage',
                        items: [
                            {
                                xtype: 'panel',
                                padding: '10 0 0 0',
                                layout: {
                                    type: 'hbox'
                                },
                                flex: 1,
                                items: [
                                    {
                                        xtype: 'panel',
                                        itemId: 'dosagePanelLeft',
                                        padding: '0 0 0 10',
                                        flex: 2,
                                        items: [
                                            {
                                                xtype: 'fieldset',
                                                items: [
                                                    {
                                                        xtype: 'textfield',
                                                        border: 1,
                                                        style: 'text-align: right;',
                                                        label: 'Form:',
                                                        labelWidth: '55%',
                                                        name: 'form_rec_name',
                                                        readOnly: true
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        border: 1,
                                                        style: 'text-align: right;',
                                                        label: 'Administration Route:',
                                                        labelWidth: '55%',
                                                        name: 'adminroute',
                                                        readOnly: true
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        itemId: 'dosagePanelMiddle',
                                        margin: '0 50 0 50',
                                        flex: 1,
                                        items: [
                                            {
                                                xtype: 'fieldset',
                                                items: [
                                                    {
                                                        xtype: 'textfield',
                                                        border: 1,
                                                        style: 'text-align: right;',
                                                        label: 'Dose:',
                                                        labelWidth: '55%',
                                                        name: 'dose',
                                                        readOnly: true
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        border: 1,
                                                        style: 'text-align: right;',
                                                        label: 'Dose Unit:',
                                                        labelWidth: '55%',
                                                        name: 'dose_unit_rec_name',
                                                        readOnly: true
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        border: 1,
                                                        style: 'text-align: right;',
                                                        label: 'X:',
                                                        labelWidth: '55%',
                                                        name: 'frequency',
                                                        readOnly: true
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        itemId: 'dosagePanelRight',
                                        padding: '0 10 0 0',
                                        flex: 2,
                                        items: [
                                            {
                                                xtype: 'fieldset',
                                                items: [
                                                    {
                                                        xtype: 'textfield',
                                                        border: 1,
                                                        style: 'text-align: right;',
                                                        label: 'Treatment Duration:',
                                                        labelWidth: '65%',
                                                        name: 'treatmentduration',
                                                        readOnly: true
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        border: 1,
                                                        style: 'text-align: right;',
                                                        label: 'Treatment Period:',
                                                        labelWidth: '65%',
                                                        name: 'treatmentperiod',
                                                        readOnly: true
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                padding: '0 0 10 0',
                                layout: {
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        xtype: 'panel',
                                        padding: '0 0 0 10',
                                        flex: 2,
                                        items: [
                                            {
                                                xtype: 'fieldset',
                                                title: 'Common Dosage',
                                                items: [
                                                    {
                                                        xtype: 'textfield',
                                                        border: 1,
                                                        style: 'text-align: right;',
                                                        label: 'Frequency:',
                                                        labelWidth: '55%',
                                                        name: 'frequency',
                                                        readOnly: true
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        border: 1,
                                                        style: 'text-align: right;',
                                                        label: 'Admin Hours:',
                                                        labelWidth: '55%',
                                                        name: 'adminhours',
                                                        readOnly: true
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        margin: '0 50 0 50',
                                        flex: 1
                                    },
                                    {
                                        xtype: 'panel',
                                        padding: '0 10 0 0',
                                        flex: 2,
                                        items: [
                                            {
                                                xtype: 'fieldset',
                                                title: 'Specific Dosage',
                                                items: [
                                                    {
                                                        xtype: 'textfield',
                                                        border: 1,
                                                        style: 'text-align: right;',
                                                        label: 'Frequency',
                                                        labelWidth: '65%',
                                                        readOnly: true
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        border: 1,
                                                        style: 'text-align: right;',
                                                        label: 'Unit:',
                                                        labelWidth: '65%',
                                                        readOnly: true
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

});