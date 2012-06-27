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
            type:'hbox'
        },
        style: 'text-align: left; background-color: #f7f7f7; border-top: 1px solid #ccc;',
        scrollable:false,
        items:[
            {
                xtype:'fieldset',
                items:[
                    {
                        xtype:'fieldset',
                        layout:{
                            type:'hbox'
                        },
                        title:'Main',
                        items:[
                            {
                                xtype:'fieldset',
                                margin:10,
                                flex:1,
                                items:[
                                    {
                                        xtype:'textfield',
                                        style:'text-align: right;',
                                        label:'Disease:',
                                        labelWidth:'57%',
                                        name:'pathology_rec_name',
                                        readOnly:true
                                    },
                                    {
                                        xtype:'selectfield',
                                        height:54,
                                        style:'text-align: right;',
                                        label:'Status of the Disease:',
                                        labelWidth:'57%',
                                        name:'is_active',
                                        readOnly:true,
                                        store:'diagnoses'
                                    }
                                ]
                            },
                            {
                                xtype:'fieldset',
                                margin:'10 10 10 0',
                                flex:1,
                                items:[
                                    {
                                        xtype:'datepickerfield',
                                        style:'text-align: right;',
                                        label:'Date of diagnosis:',
                                        labelWidth:'50%',
                                        name:'diagnosed_date',
                                        placeHolder:'-',
                                        dateFormat: 'd.m.Y',
                                        readOnly:true
                                    },
                                    {
                                        xtype:'selectfield',
                                        height:54,
                                        style:'text-align: right;',
                                        label:'Severity:',
                                        labelWidth:'50%',
                                        name:'disease_severity',
                                        readOnly:true,
                                        store:'diagnoses'
                                    }
                                ]
                            },
                            {
                                xtype:'fieldset',
                                margin:'10 10 10 0',
                                flex:1,
                                items:[
                                    {
                                        xtype:'textfield',
                                        style:'text-align: right;',
                                        label:'Physician:',
                                        labelWidth:'40%',
                                        name:'doctor_rec_name',
                                        readOnly:true
                                    },
                                    {
                                        xtype:'togglefield',
                                        height:54,
                                        style:'text-align: right;',
                                        label:'Infectious disease:',
                                        labelWidth:'60%',
                                        name:'is_infectious'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype:'fieldset',
                        height:110,
                        layout:{
                            type:'hbox'
                        },
                        title:'Allergies',
                        items:[
                            {
                                xtype:'fieldset',
                                height:52,
                                margin:10,
                                layout:{
                                    type:'default'
                                },
                                flex:1,
                                items:[
                                    {
                                        xtype:'selectfield',
                                        height:54,
                                        style:'text-align: right;',
                                        label:'Allergy type:',
                                        labelWidth:'54%',
                                        name:'allergy_type',
                                        readOnly:true,
                                        store:'diagnoses'
                                    }
                                ]
                            },
                            {
                                xtype:'panel',
                                flex:1
                            },
                            {
                                xtype:'fieldset',
                                height:54,
                                margin:'10 10 10 0',
                                layout:{
                                    type:'default'
                                },
                                flex:1,
                                items:[
                                    {
                                        xtype:'togglefield',
                                        height:54,
                                        style:'text-align: right;',
                                        label:'Allergic disease:',
                                        labelWidth:'60%',
                                        name:'is_allergy'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype:'fieldset',
                        margin:'0 0 0 0',
                        layout:{
                            type:'hbox'
                        },
                        title:'Therapy',
                        items:[
                            {
                                xtype:'fieldset',
                                margin:10,
                                layout:{
                                    type:'default'
                                },
                                flex:1,
                                items:[
                                    {
                                        xtype:'datepickerfield',
                                        height:54,
                                        style:'text-align: right;',
                                        label:'Start of Treatment:',
                                        labelWidth:'57%',
                                        name:'date_start_treatment',
                                        dateFormat: 'd.m.Y',
                                        placeHolder: '-',
                                        readOnly:true
                                    },
                                    {
                                        xtype:'textfield',
                                        style:'text-align: right;',
                                        label:'Treatment description:',
                                        labelWidth:'57%',
                                        name:'extra_info',
                                        readOnly:true
                                    }
                                ]
                            },
                            {
                                xtype:'fieldset',
                                margin:'10 10 10 0',
                                layout:{
                                    type:'default'
                                },
                                flex:1,
                                items:[
                                    {
                                        xtype:'datepickerfield',
                                        height:54,
                                        style:'text-align: right;',
                                        label:'End of treatmeant:',
                                        labelWidth:'50%',
                                        name:'healed_date',
                                        dateFormat: 'd.m.Y',
                                        placeHolder: '-',
                                        readOnly:true
                                    },
                                    {
                                        xtype:'textfield',
                                        style:'text-align: right;',
                                        label:'Code:',
                                        labelWidth:'50%',
                                        name:'id',
                                        readOnly:true
                                    }
                                ]
                            },
                            {
                                xtype:'fieldset',
                                height:54,
                                margin:'10 10 0 0',
                                layout:{
                                    type:'default'
                                },
                                flex:1,
                                items:[
                                    {
                                        xtype:'togglefield',
                                        height:54,
                                        label:'Currently on treatment:',
                                        labelWidth:'60%',
                                        name:'is_on_treatment'
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