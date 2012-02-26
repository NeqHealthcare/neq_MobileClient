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
        items: [
            {
                xtype: 'fieldset',
                layout: {
                    align: 'start',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'textfield',
                        width: 250,
                        label: 'Indication:',
                        labelWidth: '42%',
                        name: 'indication_rec_name',   //glaube nicht das es hier stimmt muss value sein oder so
                        readOnly: true,
                        flex: 1
                    },
                    {
                        xtype: 'textfield',
                        width: 250,
                        label: 'Physician:',
                        labelWidth: '42%',
                        name: 'physician',
                        readOnly: true,
                        flex: 2
                    }
                ]
            },
            {
                xtype: 'fieldset',
                layout: {
                    type: 'default'
                },
                title: 'Dosage',
                items: [
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'container',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        width: 250,
                                        label: 'Form:',
                                        labelWidth: '42%',
                                        name: 'form',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: 250,
                                        label: 'Administration Route:',
                                        labelWidth: '42%',
                                        name: 'aroute',
                                        readOnly: true
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        width: 250,
                                        label: 'Dose:',
                                        labelWidth: '42%',
                                        name: 'dose',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: 250,
                                        label: 'Dose Unit:',
                                        labelWidth: '42%',
                                        name: 'doseUnit',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: 250,
                                        label: 'X-Times:',
                                        labelWidth: '42%',
                                        name: 'xtimes',
                                        readOnly: true
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        width: 250,
                                        label: 'Treatment Duration:',
                                        labelWidth: '42%',
                                        name: 'treatmentDuration',
                                        readOnly: true
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: 250,
                                        label: 'Treatment Periode:',
                                        labelWidth: '42%',
                                        name: 'treatmentPeriod',
                                        readOnly: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'container',
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        title: 'Common Dosage',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                label: 'Field'
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: 'Field'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        title: 'Specific Dosage',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                label: 'Field'
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: 'Field'
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
                layout: {
                    align: 'start',
                    type: 'hbox'
                },
                title: 'Notes',
                items: [
                    {
                        xtype: 'textareafield',
                        label: 'Field',
                        flex: 2
                    }
                ]
            }
        ]
    }

});