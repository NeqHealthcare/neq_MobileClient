Ext.define('MyApp.view.ui.MyContainer', {
    extend: 'Ext.Container',

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
                        name: 'indication',
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