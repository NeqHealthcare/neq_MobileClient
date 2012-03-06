/**
 * Created with JetBrains WebStorm.
 * User: chopsuey
 * Date: 06.03.12
 * Time: 02:27
 * To change this template use File | Settings | File Templates.
 */


Ext.define('NeqMobile.view.patient.detail.DiseaseDetail', {
    extend: 'Ext.form.Panel',
    xtype:'diseasedetail',

    config: {
        layout: {
            type: 'vbox'
        },
        scrollable: false,
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Main',
                        items: [
                            {
                                xtype: 'panel',
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
                                                label: 'Disease:'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        items: [
                                            {
                                                xtype: 'datepickerfield',
                                                label: 'Date of diagnosis:',
                                                placeHolder: 'mm/dd/yyyy'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                label: 'Physician:'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                layout: {
                                    align: 'center',
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 2,
                                        items: [
                                            {
                                                xtype: 'selectfield',
                                                label: 'Status of the disease:'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 2,
                                        items: [
                                            {
                                                xtype: 'selectfield',
                                                label: 'Severity:'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        items: [
                                            {
                                                xtype: 'togglefield',
                                                label: 'Infectious disease:'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Allergies',
                        items: [
                            {
                                xtype: 'panel',
                                layout: {
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 4,
                                        items: [
                                            {
                                                xtype: 'selectfield',
                                                label: 'Allergy type:'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        items: [
                                            {
                                                xtype: 'togglefield',
                                                label: 'Allergic disease:'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Therapy',
                        items: [
                            {
                                xtype: 'panel',
                                layout: {
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 2,
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                label: 'Start of Treatment:'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 2,
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                label: 'End of treatmeant:'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        items: [
                                            {
                                                xtype: 'togglefield',
                                                label: 'Currently on treatment:'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
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
                                                label: 'Treatment description:'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                label: 'Code:'
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