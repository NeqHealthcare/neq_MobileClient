/*
 'dose',
 'vaccine_rec_name',
 'vaccine_lot',
 'institution_rec_name',
 'date',
 'next_dose_date',
 'observations'
 */

Ext.define('NeqMobile.view.patient.detail.VaccinationDetail', {
    extend: 'Ext.form.Panel',
    xtype:'vaccinationdetail',

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
                                                xtype: 'panel',
                                                itemId: 'topPanelLeft',
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
                                                                label: 'Institution:',
                                                                labelWidth: '55%',
                                                                name: 'institution_rec_name',
                                                                readOnly: true
                                                            },
                                                            {
                                                                xtype: 'textfield',
                                                                border: 1,
                                                                style: 'text-align: right;',
                                                                label: 'Expiration Date:',
                                                                labelWidth: '55%',
                                                                name: 'date',
                                                                readOnly: true
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
                                                label: 'Lot Number:',
                                                labelWidth: '55%',
                                                name: 'vaccine_lot',
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

});