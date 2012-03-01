/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 29.11.11
 * Time: 20:44
 * To change this template use File | Settings | File Templates.
 */
/**
 * @author geekflyer
 */

var daterenderer = function (value, values) {
    return value.day + '.' + value.month + '.' + value.year
}
var booleanrenderer = function (value, values) {
    if (value) {
        return '<input type="checkbox" checked="checked" disabled />'
    }
    else return '<input type="checkbox" disabled/>'
}

var bulletRenderer = function(value, values){
    if (value) {
        return '<img src="../neq_MobileClient/bullet_black.png">'
    }
    else return '<img src="../neq_MobileClient/bullet_red.png"/>'
}

var patientheader = new Ext.XTemplate(
    '<h3>Patient</h3><table cellpadding="5" cellspacing="10" style="background-color: #FFFFFF; -webkit-border-radius: 6px";>' +
        '<tr>' +
        '<th rowspan="4" width=70><img src="theme/images/user/DefaultAvatar_small.jpg" width="60" height="67"></th>' +
        '   <td align="left"><b>ID:</b> {id}</td></tr>' +
        '<tr><td><b>Name:</b>{rec_name}</td></tr>' +
        '<tr><td><b>Sex:</b>{sex}</td></tr>' +
        '<tr><td><small>{latestDiagnoseRecName}</small></td></tr>' + '</table>'
);

Ext.define('NeqMobile.view.patient.Info', {
        extend:'Ext.Container',
        xtype:'patientInfo',
        requires:['NeqMobile.view.patient.detail.DiseaseDetail','NeqMobile.view.patient.detail.MedicationDetail'],

        loadPatientHeader:function (patientrecord) {
            console.log('setting patients data...');
            console.log(patientrecord.data);
            this.down('#patientheader').setData(patientrecord.data);
        },
        loadDiagnoses:function (diagnosestore) {
            console.log('setting diagnoses store');
            this.down('#diagnoses').setStore(diagnosestore);

        },
        loadVaccinations:function (vaccinationstore) {
            console.log('setting vaccinations data');
          // this here is already prepared for the vaccinations table - uncomment it when the table is included
          //  this.down('#vaccinations').Store(vaccinationstore);
        },

        loadMedications:function (medicationstore) {
            console.log('setting medications tore');
            this.down('#medications').setStore(medicationstore);

        },
        config:{
            scrollable:true,
            styleHtmlContent:true,
            layout:'vbox',
            items:[
                {xtype:'container',

                    itemId:'patientheader',
                    tpl:patientheader
                },
                {

                    xtype:'touchgridpanel',
                    itemId:'vaccinations'
                }
                ,
                {xtype:'touchgridpanel',
                    itemId:'diagnoses',
                    scrollable:false,
                    features:[
                        {
                            ftype:'Ext.ux.touch.grid.feature.Expandable',
                            launchFn:'initialize',
                            detailCmp:{ xtype:'diseasedetail'}
                        }
                    ],
                    columns:[
                        {
                            header:'Date',
                            dataIndex:'diagnosed_date',
                            style:'padding-left: 1em;',
                            width:'10%',
                            renderer:daterenderer
                        },
                        {
                            header:'Activity Status',
                            dataIndex:'is_active',
                            style:'text-align: center;',
                            renderer:bulletRenderer,
                            width:'15%',
                            filter:{ type:'numeric' }
                        },
                        {
                            header:'Disease',
                            dataIndex:'pathology_rec_name',
                            cls:'centered-cell',
                            width:'15%',
                            renderer:function (value, values) {
                                var color = (value > 0) ? '009933' : 'FF0000';
                                return '<span style="color: #' + color + ';">' + value + '</span>';
                            }
                        },
                        {
                            header:'Severity',
                            dataIndex:'disease_severity',
                            cls:'centered-cell',
                            width:'15%',
                            renderer:function (value, values) {
                                var color = (value > 0) ? '009933' : 'FF0000';
                                return '<span style="color: #' + color + ';">' + value + '</span>';
                            }
                        },
                        {
                            header:'Healed Date',
                            dataIndex:'healed_date',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            width:'15%',
                            renderer:daterenderer
                        }   ,
                        {
                            header:'Infectability',
                            dataIndex:'is_infectious',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            renderer:bulletRenderer,
                            width:'15%'

                        },
                        {
                            header:'Allergies',
                            dataIndex:'is_allergy',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            renderer:bulletRenderer,
                            width:'15%'
                        }
                    ]


                }   ,
                {xtype:'touchgridpanel',
                    itemId:'medications',

                    scrollable:false,
                    features:[
                        {
                            ftype:'Ext.ux.touch.grid.feature.Expandable',
                            launchFn:'initialize',
                            detailCmp:{ xtype:'medicationdetail'}
                        }
                    ],
                    columns:[
                        {
                            header:'Date',
                            dataIndex:'diagnosed_date',
                            style:'padding-left: 1em;',
                            width:'10%'

                        },
                        {
                            header:'Activity Status',
                            dataIndex:'is_active',
                            style:'text-align: center;',
                            renderer:booleanrenderer,
                            width:'15%',
                            filter:{ type:'numeric' }
                        },
                        {
                            header:'Disease',
                            dataIndex:'medicament_rec_name',
                            cls:'centered-cell',
                            width:'15%',
                            renderer:function (value, values) {
                                var color = (value > 0) ? '009933' : 'FF0000';
                                return '<span style="color: #' + color + ';">' + value + '</span>';
                            }
                        },
                        {
                            header:'Severity',
                            dataIndex:'disease_severity',
                            cls:'centered-cell',
                            width:'15%',
                            renderer:function (value, values) {
                                var color = (value > 0) ? '009933' : 'FF0000';
                                return '<span style="color: #' + color + ';">' + value + '</span>';
                            }
                        },
                        {
                            header:'Healed Date',
                            dataIndex:'healed_date',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            width:'15%'

                        }   ,
                        {
                            header:'Infectability',
                            dataIndex:'is_infectious',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            renderer:booleanrenderer,
                            width:'15%'

                        },
                        {
                            header:'Allergies',
                            dataIndex:'is_allergy',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            renderer:booleanrenderer,
                            width:'15%'
                        }
                    ]


                }


            ]
        }

    }


)
;