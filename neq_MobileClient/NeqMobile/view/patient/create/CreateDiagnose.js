/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 24.04.12
 * Time: 10:46
 * To change this template use File | Settings | File Templates.
 */


Ext.define('NeqMobile.view.patient.create.CreateDiagnose',{
    extend:'Ext.Panel',
    xtype: 'createnewdiagnoseoverlay',
    config:{
            modal: true,
            hideOnMaskTap: true,
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
            },
            centered:true,
            width: 800,
            height: 500,
            styleHtmlContent:true,
            layout: {
                align: 'center',
                pack: 'center',
                type: 'vbox'
            },
            scrollable: true,
            items:[
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Create New Diagnose'
            },
            //top part
            {
                xtype: 'fieldset',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Disease Information',
                        items:[
                            {
                                xtype: 'textfield',
                                label: 'Disease',
                                value: 'asdf'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Status',
                                value: 'asdf'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Severity',
                                value: 'asdf'
                            },
                            {
                                xtype: 'checkboxfield',
                                label: 'Infectious'
                                //id
                            },
                            {
                                xtype: 'checkboxfield',
                                label: 'Active'
                                //id
                            }
                        ]
                    },
                    {
                        xtype:'fieldset',
                        title: 'Therapy',
                        items:[
                            {
                                xtype: 'checkboxfield',
                                label: 'Currently on Treatment:',
                                value: 'asdf'
                            },
                            {
                                xtype: 'selectfield',
                                label: 'Treatment Description'
                            },
                            {
                                xtype: 'datepickerfield',
                                destroyPickerOnHide: true,
                                name: 'date',
                                dateFormat: 'd.m.Y.',
                                label: 'Start of Treatment:',
                                labelWidth: '30%',
                                width: '100%',
                                value: new Date(),
                                picker: {
                                    yearFrom: new Date().getYear()
                                }
                            },
                            {
                                xtype: 'datepickerfield',
                                destroyPickerOnHide: true,
                                name: 'date',
                                dateFormat: 'd.m.Y.',
                                label: 'End of Treatment:',
                                labelWidth: '30%',
                                width: '100%',
                                value: new Date(),
                                picker: {
                                    yearFrom: new Date().getYear()
                                }
                            },
                            {
                                xtype: 'selectfield',
                                label: 'Code'
                                //id
                            }
                        ]
                    }
                ]
            },
            //Middle Part
            {
                    xtype: 'fieldset',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Diagnose Information',
                            items:[
                                {
                                    xtype: 'datepickerfield',
                                    destroyPickerOnHide: true,
                                    name: 'date',
                                    dateFormat: 'd.m.Y.',
                                    label: 'Date of Diagnosis:',
                                    labelWidth: '30%',
                                    width: '100%',
                                    value: new Date(),
                                    picker: {
                                        yearFrom: new Date().getYear()
                                    }
                                },
                                {
                                    xtype: 'numberfield',
                                    label: 'Age when diagnosed'
                                   // value: 'asdf'
                                },
                                {
                                    xtype: 'datepickerfield',
                                    destroyPickerOnHide: true,
                                    name: 'date',
                                    dateFormat: 'd.m.Y.',
                                    label: 'Healed:',
                                    labelWidth: '30%',
                                    width: '100%',
                                    value: new Date(),
                                    picker: {
                                        yearFrom: new Date().getYear()
                                    }
                                },
                                {
                                    xtype: 'selectfield',
                                    label: 'Physician'
                                    //id
                                }
                            ]
                        },
                        {
                            xtype:'fieldset',
                            title: 'Allergies & Pregnancy',
                            items:[
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Allergic Disease',
                                    value: 'asdf'
                                },
                                {
                                    xtype: 'selectfield',
                                    label: 'Allergy Type'
                                },
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Pregnancy Warning',
                                    value: 'asdf'
                                },
                                {
                                    xtype: 'numberfield',
                                    label: 'Contracted in pregnancy week #'
                                    //id
                                }
                            ]
                        }
                    ]
                },
            //Bottom Part
            {
                xtype: 'textareafield',
                label: 'Extra Info',
                labelAlign: 'top',
                name: 'notes'
                },
            //button
            {
                width: 250,
                xtype: 'button',
                id: 'x-submitDiagnoseButton',
                text: 'Save Diagnose'
            }
            ]
    }
    }
)