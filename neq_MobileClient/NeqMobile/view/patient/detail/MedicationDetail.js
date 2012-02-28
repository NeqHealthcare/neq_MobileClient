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
        items: [
            {
                xtype: 'fieldset',
                padding: '0 10 0 10',
                items: [
                    {
                        xtype: 'panel',
                        margin: '10 0 10 0',
                        layout: {
                            type: 'hbox'
                        },
                        flex: 2,
                        items: [
                            {
                                xtype: 'panel',
                                flex: 2,
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        margin: '10 0 10 10',
                                        layout: {
                                            align: 'start',
                                            type: 'default'
                                        },
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                style: 'text-align: right;',
                                                label: 'Indication:',
                                                labelWidth: '55%',
                                                name: 'indication'
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
                                flex: 2,
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        margin: '10 10 10 0',
                                        layout: {
                                            type: 'default'
                                        },
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                style: 'text-align: right;',
                                                label: 'Physician:',
                                                labelWidth: '55%',
                                                name: 'physician'
                                            }
                                        ]
                                    }
                                ]
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
                                                name: 'form',
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
                                                name: 'dose'
                                            },
                                            {
                                                xtype: 'textfield',
                                                border: 1,
                                                style: 'text-align: right;',
                                                label: 'Dose Unit:',
                                                labelWidth: '55%',
                                                name: 'doseunit'
                                            },
                                            {
                                                xtype: 'textfield',
                                                border: 1,
                                                style: 'text-align: right;',
                                                label: 'X:',
                                                labelWidth: '55%',
                                                name: 'dosex'
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
                                                name: 'treatmentduration'
                                            },
                                            {
                                                xtype: 'textfield',
                                                border: 1,
                                                style: 'text-align: right;',
                                                label: 'Treatment Period:',
                                                labelWidth: '65%',
                                                name: 'treatmentperiod'
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
                                                name: 'frequency'
                                            },
                                            {
                                                xtype: 'textfield',
                                                border: 1,
                                                style: 'text-align: right;',
                                                label: 'Admin Hours:',
                                                labelWidth: '55%',
                                                name: 'adminhours'
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
                                                labelWidth: '65%'
                                            },
                                            {
                                                xtype: 'textfield',
                                                border: 1,
                                                style: 'text-align: right;',
                                                label: 'Unit:',
                                                labelWidth: '65%'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        margin: '10 10 10 10',
                        flex: 1,
                        items: [
                            {
                                xtype: 'textareafield',
                                label: 'Notes',
                                labelAlign: 'top'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});