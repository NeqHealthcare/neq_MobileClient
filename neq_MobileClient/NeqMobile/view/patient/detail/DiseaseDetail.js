/**
 * Created with JetBrains WebStorm.
 * User: chopsuey
 * Date: 06.03.12
 * Time: 02:27
 * To change this template use File | Settings | File Templates.
 */
/*
 Ext.define('NeqMobile.model.Diagnose', {
 extend:'Ext.data.Model',
 config:{
 fields:[
 'id',
 'age',
 'allergy_type',
 {name:'date_start_treatment', type:'date',dateFormat:'time'},
 {name:'diagnosed_date', type:'date',dateFormat:'time'},
 'disease_severity',
 'doctor',
 'doctor_rec_name',
 'extra_info',
 {name:'healed_date', type:'date',dateFormat:'time'},
 'is_active',
 'is_allergy',
 'is_infectious',
 'is_on_treatment',
 'pathology_rec_name'
 */

Ext.define('NeqMobile.view.patient.detail.DiseaseDetail', {
    extend:'Ext.form.Panel',
    xtype:'diseasedetail',

    config:{
        layout:{
            type:'vbox'
        },
        style: 'text-align: left; background-color: #f7f7f7; border-top: 1px solid #ccc;',
        scrollable:false,
        items:[
                    {
                      xtype:'fieldset',
                      layout: 'vbox',
                      margin: '3 6 3 6',
                      pack: 'center',
                      title: 'Disease Information',
                      items:[
                          {
                              xtype:'textfield',
                              style:'text-align: right;',
                              label:'Disease:',
                              labelWidth:'30%',
                              name:'pathology_rec_name',
                              readOnly:true
                          },
                          {
                              xtype:'selectfield',
                              style:'text-align: right;',
                              label:'Severity:',
                              labelWidth:'30%',
                              name:'disease_severity',
                              readOnly:true,
                              store:'diagnoses'
                          },
                          {
                              xtype:'togglefield',
                              style:'text-align: right;',
                              label:'Infectious disease:',
                              labelWidth:'30%',
                              name:'is_infectious'
                          },
                          {
                              xtype:'selectfield',
                              style:'text-align: right;',
                              label:'Status of the Disease:',
                              labelWidth:'30%',
                              name:'is_active',
                              readOnly:true,
                              store:'diagnoses'
                          }
                      ]
                    },
                    {
                        xtype:'fieldset',
                        layout: 'vbox',
                        margin: '3 6 3 6',
                        pack: 'center',
                        title: 'Diagnose Information',
                        items:[
                            {
                                xtype:'datepickerfield',
                                style:'text-align: right;',
                                label:'Date of diagnosis:',
                                labelWidth:'30%',
                                name:'diagnosed_date',
                                placeHolder:'-',
                                dateFormat: 'd.m.Y',
                                readOnly:true
                            },
                            {
                                xtype: 'textfield',
                                label: 'Age when diagnosed',
                                style:'text-align: right;',
                                labelWidth:'30%',
                                name:'age',
                                readOnly:true
                            },
                            {
                                xtype:'datepickerfield',
                                style:'text-align: right;',
                                label:'End of treatmeant:',
                                labelWidth:'30%',
                                name:'healed_date',
                                dateFormat: 'd.m.Y',
                                placeHolder: '-',
                                readOnly:true
                            },
                            {
                                xtype:'textfield',
                                style:'text-align: right;',
                                label:'Physician:',
                                labelWidth:'30%',
                                name:'doctor_rec_name',
                                readOnly:true
                            }

                        ]
                    },

                    {
                        xtype:'fieldset',
                        layout: 'vbox',
                        padding: '3 6 3 6',
                        pack: 'center',
                        title:'Allergies & Pregnancy',
                        items:[
                            {
                                xtype:'togglefield',
                                style:'text-align: right;',
                                label:'Allergic disease:',
                                labelWidth:'30%',
                                name:'is_allergy'
                            },
                            {
                                xtype:'textfield',
                                style:'text-align: right;',
                                label:'Allergy type:',
                                labelWidth:'30%',
                                name:'allergy_type',
                                readOnly:true,
                                store:'diagnoses'
                            },
                            {
                                xtype: 'togglefield',
                                label: 'Pregnancy Warning',
                                name: 'pregnancy_warning',
                                style:'text-align: right;',
                                labelWidth:'30%'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Pregnancy week #',
                                style:'text-align: right;',
                                name: 'weeks_of_pregnancy',
                                labelWidth:'30%',
                                readOnly: true
                            }
                        ]
                    },
                    {
                        xtype:'fieldset',
                        layout: 'vbox',
                        padding: '3 6 3 6',
                        pack: 'center',
                        title: 'Therapie',
                        items:[
                            {
                                xtype:'togglefield',
                                label:'Currently on treatment:',
                                style:'text-align: right;',
                                labelWidth:'30%',
                                name:'is_on_treatment'
                            },
                            {
                                xtype:'textfield',
                                style:'text-align: right;',
                                label:'Treatment description:',
                                labelWidth:'30%',
                                name:'extra_info',
                                readOnly:true
                            },
                            {
                                xtype:'datepickerfield',
                                style:'text-align: right;',
                                label:'Start of Treatment:',
                                labelWidth:'30%',
                                name:'date_start_treatment',
                                dateFormat: 'd.m.Y',
                                placeHolder: '-',
                                readOnly:true
                            },
                            {
                                xtype:'datepickerfield',
                                style:'text-align: right;',
                                label:'End of Treatment:',
                                labelWidth:'30%',
                                name:'date_end_treatment',
                                dateFormat: 'd.m.Y',
                                placeHolder: '-',
                                readOnly:true
                            },
                            {
                                xtype:'textfield',
                                style:'text-align: right;',
                                label:'Code:',
                                labelWidth:'30%',
                                name:'id',
                                readOnly:true
                            }

                        ]
                    }

        ]
    }

});