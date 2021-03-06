/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 24.04.12
 * Time: 10:46
 * To change this template use File | Settings | File Templates.
 */


Ext.define('NeqMobile.view.patient.create.CreateDiagnose',{
        extend:'Ext.form.Panel',
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
                type: 'vbox',
                align: 'center'
            },
            scrollable: true,
            items:[
                {
                    docked: 'top',
                    xtype: 'toolbar',
                    title: 'Create New Diagnose'
                },
                        {
                            xtype: 'fieldset',
                            title: 'Disease Information',
                            id: 'diseaseInfo',
                            width: '100%',
                            items:[
                                {
                                    xtype:'container',
                                    layout: 'hbox',
                                    id: 'diseasename',
                                    items:[
                                        {
                                            xtype: 'textfield',
                                            readOnly: true,
                                            label: 'Disease:',
                                            labelWidth:'35%',
                                            id: 'diseasefield',
                                            flex: 10
                                        },
                                        {
                                            xtype: 'textfield',
                                            label: 'Pathology:',
                                            id: 'pathology',
                                            hidden: true
                                        },
                                        {
                                        xtype:'button',
                                        iconMask: true,
                                        iconCls: 'search',
                                        id: 'diseasebutton',
                                            flex:1
                                        }
                                    ]
                                },
                                {
                                    xtype: 'selectfield',
                                    label: 'Status:',
                                    labelWidth:'30%',
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
                                    label: 'Severity:',
                                    labelWidth:'30%',
                                    id: 'disease_severity',
                                    options: [
                                       {text: 'Mild', value: '1_mi'},
                                        {text: 'Moderate', value: '2_mo'},
                                        {text: 'Severe', value: '3_se'}
                                    ]
                                },
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Infectious:',
                                    labelWidth:'30%',
                                    id: 'is_infectious',
                                    value: false
                                },
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Active:',
                                    labelWidth:'30%',
                                    id: 'is_active',
                                    value: false
                                }
                            ]
                        },
                        {
                            xtype:'fieldset',
                            id: 'therapy',
                            title: 'Therapy',
                            width: '100%',
                            items:[
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Currently on Treatment:',
                                    labelWidth:'30%',
                                    id: 'is_on_treatment',
                                    value: false
                                },
                                {
                                    xtype: 'textfield',
                                    label: 'Treatment Description:',
                                    labelWidth:'30%',
                                    id: 'treatment_description',
                                    placeHolder: '-'
                                },
                                {
                                    xtype: 'datepickerfield',
                                    id: 'date_start_treatment',
                                    placeHolder: '-',
                                    destroyPickerOnHide: true,
                                    name: 'date',
                                    dateFormat: 'd.m.Y',
                                    label: 'Start of Treatment:',
                                    labelWidth:'30%',
                                    labelWidth: '30%',
                                    width: '100%',
                                    value: new Date(),
                                    picker: {
                                        yearFrom: new Date().getYear()
                                    }
                                },
                                {
                                    xtype: 'datepickerfield',
                                    id: 'date_stop_treatment',
                                   name: 'date',
                                    dateFormat: 'd.m.Y',
                                    label: 'End of Treatment:',
                                    labelWidth: '30%',
                                    width: '100%',
                                  //  value: new Date(),
                                    picker: {
                                        yearFrom: new Date().getYear()
                                    }
                                },
                                {
                                    xtype: 'container',
                                    id: 'procedure',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            label: 'Code:',
                                            labelWidth:'35%',
                                            id: 'pcs_code',
                                            flex: 10
                                        },
                                       {
                                            xtype:'button',
                                            iconMask: true,
                                            iconCls: 'search',
                                            id: 'pcdbutton',
                                            flex:1
                                        }
                                        ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Diagnose Information',
                            id: 'diagnoseInfo',
                            width: '100%',
                            items:[
                                {
                                    xtype: 'datepickerfield',
                                    id: 'diagnosed_date',
                                    destroyPickerOnHide: true,
                                    name: 'date',
                                    dateFormat: 'd.m.Y',
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
                                    label: 'Age when diagnosed:',
                                    labelWidth:'30%',
                                    minValue:0,
                                    maxValue: 150,
                                    id: 'age'
                                },
                                {
                                    xtype: 'datepickerfield',
                                    id: 'healed_date',
                                    destroyPickerOnHide: true,
                                    name: 'date',
                                    dateFormat: 'd.m.Y',
                                    label: 'Healed:',
                                    labelWidth: '30%',
                                    width: '100%',
                                   // value: new Date(),
                                    picker: {
                                        yearFrom: new Date().getYear()
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    label: 'Physician:',
                                    labelWidth:'30%',
                                    id: 'physicianSelectfield',
                                    readOnly: true
                                }
                            ]
                        },
                        {
                            xtype:'fieldset',
                            title: 'Allergies & Pregnancy',
                            id: 'allergies',
                            width: '100%',
                            items:[
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Allergic Disease:',
                                    id: 'is_allergy',
                                    labelWidth:'30%',
                                    value: false
                                },
                                {
                                    xtype: 'selectfield',
                                    label: 'Allergy Type:',
                                    labelWidth:'30%',
                                    id: 'allergy_type',
                                    options: [
                                        {text: 'Drug Allergy', value:'da'},
                                        {text: 'Food Allergy', value:'fa'},
                                        {text: 'Misc Allergy', value:'ma'},
                                        {text: 'Misc Contraindication', value:'mc'}
                                    ]
                                },
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Pregnancy Warning:',
                                    labelWidth:'30%',
                                    id:'pregnancy_warning',
                                    value: false
                                },
                                {
                                    xtype: 'numberfield',
                                    label: 'Contracted in pregnancy week #:',
                                    labelWidth:'30%',
                                    minValue: 0,
                                    maxValue: 45,
                                    id:'weeks_of_pregnancy',
                                    placeHolder: '-'
                                }
                            ]
                        },
                        {
                            xtype: 'textareafield',
                            label: 'Extra Info:',
                            id: 'extrainfo',
                            width: '100%',
                            labelAlign: 'top'
                        },
                        //button
                        {
                            width: 250,
                            margin: '10 0 0 0',
                            xtype: 'button',
                            id: 'submitDiagnoseButton',
                            text: 'Save Diagnose'
                        }
            ]
        }
    }
)