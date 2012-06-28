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
        style: 'text-align: left; background-color: #f7f7f7; border-top: 1px solid #ccc;',
        scrollable: false,
        items: [
                    {
                        xtype:'fieldset',
                        layout: 'vbox',
                        margin: '3 6 3 6',
                        pack: 'center',
                        title: 'General Information',
                        items:[

                            {
                                xtype: 'textfield',
                                style: 'text-align: right;',
                                label: 'Institution:',
                                labelWidth: '30%',
                                name: 'institution_rec_name',
                                readOnly: true
                            },
                            {
                                xtype: 'datepickerfield',
                                style: 'text-align: right;',
                                label: 'Expiration Date:',
                                labelWidth: '30%',
                                name: 'date',
                                placeHolder: '-',
                                dateFormat: 'd.m.Y',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                style: 'text-align: right;',
                                label: 'Lot Number:',
                                labelWidth: '30%',
                                name: 'vaccine_lot',
                                readOnly: true
                            }
                        ]
                    },
                    {
                        xtype:'fieldset',
                        layout: 'vbox',
                        margin: '3 6 3 6',
                        pack: 'center',
                        title: 'Notes',
                        items:[

                            {
                                xtype: 'textareafield',
                                labelAlign: 'top',
                                name: 'observations',
                                readOnly: true
                            }
                        ]
                    } ,
                    {
                        xtype: 'container',
                        html:'<div>&nbsp;</div>'

                    }

                ]
            }


});