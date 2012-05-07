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
                id: 'toppart',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Disease Information',
                        id: 'diseaseInfo',
                        items:[
                            {
                                xtype: 'selectfield',
                                label: 'Disease',
                                id: 'diseasefield'
                                //tpl: '<bold>{categoriy_rec_name}</bold>'
                            },
                            {
                                xtype: 'selectfield',
                                label: 'Status',
                                id:'status',
                                options: [
                                    {text: 'acute', value: 'a'},
                                    {text: 'chronic', value: 'c'},
                                    {text: 'unchanged', value: 'u' },
                                    {text: 'healed', value: 'h'},
                                    {text: 'improving', value:'i' },
                                    {text: 'worsening', value: 'w'}
                                ]
                            },
                            {
                                xtype: 'selectfield',
                                label: 'Severity',
                                id: 'severity',
                                options: [
                                    {text: '-'},
                                    {text: 'Mild', value: '1_mi'},
                                    {text: 'Moderate', value: '2_mo'},
                                    {text: 'Severe', value: '3_se'}
                                ]
                            },
                            {
                                xtype: 'checkboxfield',
                                label: 'Infectious',
                                id: 'infectability',
                                value: false
                            },
                            {
                                xtype: 'checkboxfield',
                                label: 'Active',
                                id: 'activeness',
                                value: false
                            }
                        ]
                    },
                    {
                        xtype:'fieldset',
                        id: 'therapy',
                        title: 'Therapy',
                        items:[
                            {
                                xtype: 'checkboxfield',
                                label: 'Currently on Treatment:',
                                id: 'treatment',
                                value: false
                            },
                            {
                                xtype: 'textfield',
                                label: 'Treatment Description',
                                id: 'description'
                            },
                            {
                                xtype: 'datepickerfield',
                                id: 'treatmentStart',
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
                                id: 'treatmentEnd',
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
                                label: 'Code',
                                id: 'procedures'
                            }
                        ]
                    }
                ]
            },
            //Middle Part
            {
                    xtype: 'fieldset',
                    layout: 'hbox',
                    id: 'middlepart',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Diagnose Information',
                            id: 'diagnoseInfo',
                            items:[
                                {
                                    xtype: 'datepickerfield',
                                    id: 'diagnosisDate',
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
                                    label: 'Age when diagnosed',
                                    minValue:0,
                                    maxValue: 150,
                                    id: 'age'
                                },
                                {
                                    xtype: 'datepickerfield',
                                    id: 'healedDate',
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
                                    xtype: 'textfield',
                                    label: 'Physician',
                                    id: 'physicianSelectfield',
                                    readOnly: true
                                }
                            ]
                        },
                        {
                            xtype:'fieldset',
                            title: 'Allergies & Pregnancy',
                            id: 'allergies',
                            items:[
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Allergic Disease',
                                    id: 'allergicDisese',
                                    value: false
                                },
                                {
                                    xtype: 'selectfield',
                                    label: 'Allergy Type',
                                    id: 'allergyType',
                                    options: [
                                        {text: 'Drug Allergy', value:'da'},
                                        {text: 'Food Allergy', value:'fa'},
                                        {text: 'Misc Allergy', value:'ma'},
                                        {text: 'Misc Contraindication', value:'mc'}
                                    ]
                                },
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Pregnancy Warning',
                                    id:'pregnancyWarning',
                                    value: false
                                },
                                {
                                    xtype: 'numberfield',
                                    label: 'Contracted in pregnancy week #',
                                    minValue: 0,
                                    maxValue: 45,
                                    id:'pregnancy'
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