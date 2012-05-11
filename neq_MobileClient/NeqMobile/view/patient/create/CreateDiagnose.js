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
                    width: '100%',
                    padding: 10,
                    margin: 5,
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Disease Information',
                            id: 'diseaseInfo',
                            flex:1,
                            items:[
                                {
                                    //tpl: '<bold>{categoriy_rec_name}</bold>'
                                    xtype:'container',
                                    layout: 'hbox',
                                    id: 'diseasename',
                                    items:[
                                        {
                                            xtype: 'textfield',
                                            label: 'Disease',
                                            labelWidth:'35%',
                                            id: 'diseasefield',
                                            flex: 10
                                        },
                                        {
                                        xtype:'button',
                                        //text:'Type',
                                        iconCls: 'add',
                                        id: 'diseasebutton',
                                            flex:1
                                        }
                                    ]
                                },
                                {
                                    xtype: 'selectfield',
                                    label: 'Status',
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
                                    label: 'Severity',
                                    labelWidth:'30%',
                                    id: 'severity',
                                    options: [
                                       {text: 'Mild', value: '1_mi'},
                                        {text: 'Moderate', value: '2_mo'},
                                        {text: 'Severe', value: '3_se'}
                                    ]
                                },
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Infectious',
                                    labelWidth:'30%',
                                    id: 'infectability',
                                    value: false
                                },
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Active',
                                    labelWidth:'30%',
                                    id: 'activeness',
                                    value: false
                                }
                            ]
                        },
                        {
                            xtype:'fieldset',
                            id: 'therapy',
                            flex: 1,
                            title: 'Therapy',
                            items:[
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Currently on Treatment:',
                                    labelWidth:'30%',
                                    id: 'treatment',
                                    value: false
                                },
                                {
                                    xtype: 'textfield',
                                    label: 'Treatment Description',
                                    labelWidth:'30%',
                                    id: 'description'
                                },
                                {
                                    xtype: 'datepickerfield',
                                    id: 'treatmentStart',
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
                                    id: 'treatmentEnd',
                                   name: 'date',
                                    dateFormat: 'd.m.Y',
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
                                    labelWidth:'30%',
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
                    padding: 10,
                    width: '100%',
                    margin: 5,
                    id: 'middlepart',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Diagnose Information',
                            flex: 1,
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
                                    labelWidth:'30%',
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
                                    labelWidth:'30%',
                                    id: 'physicianSelectfield',
                                    readOnly: true
                                }
                            ]
                        },
                        {
                            xtype:'fieldset',
                            title: 'Allergies & Pregnancy',
                            flex: 1,
                            id: 'allergies',
                            items:[
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Allergic Disease',
                                    id: 'allergicDisease',
                                    labelWidth:'30%',
                                    value: false
                                },
                                {
                                    xtype: 'selectfield',
                                    label: 'Allergy Type',
                                    labelWidth:'30%',
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
                                    labelWidth:'30%',
                                    id:'pregnancyWarning',
                                    value: false
                                },
                                {
                                    xtype: 'numberfield',
                                    label: 'Contracted in pregnancy week #',
                                    labelWidth:'30%',
                                    minValue: 0,
                                    maxValue: 45,
                                    id:'pregnancy',
                                    placeHolder: '-'
                                }
                            ]
                        }
                    ]
                },
                //Bottom Part
                {
                    xtype: 'textareafield',
                    label: 'Extra Info',
                    id: 'extrainfo',
                    width: '100%',
                    labelAlign: 'top',
                    name: 'notes'
                },
                //button
                {
                    align: 'right',
                    width: 250,
                    xtype: 'button',
                    id: 'submitDiagnoseButton',
                    text: 'Save Diagnose'
                }
            ]
        }
    }
)