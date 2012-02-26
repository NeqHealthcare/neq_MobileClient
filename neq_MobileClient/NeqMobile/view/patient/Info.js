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
        return '<input type="checkbox" checked="checked" />'
    }
    else return '<input type="checkbox"/>'
}

var patientheader = new Ext.XTemplate(
    '<h3>Patient</h3><table cellpadding="5" cellspacing="10" style="background-color: #FFFFFF; -webkit-border-radius: 6px";>' +
        '<tr>' +
        '<th rowspan="4" width=70><img src="theme/images/user/DefaultAvatar_small.jpg" width="60" height="67"></th>' +
        '   <td align="left"><b>ID:</b> {id}</td></tr>' +
        '<tr><td><b>Name:</b>{rec_name}</td></tr>' +
        '<tr><td><b>Sex:</b>{sex}</td></tr>' +
        '<tr><td><small>{latestDiagnoseRecName}</small></td></tr>' + '</table>'
//    '<div class="patientImage" style="float: left; height: 125px; width: 114px; margin-right: 10px; background-size: cover; background-position: center center; background: #ddd; @include border-radius(3px); -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6); background-image:url(theme/images/user/DefaultAvatar_small.jpg);"></div>',
//    //'<div class="headshot" style="background-image:url(resources/images/headshots/{headshot});"></div>',
//    '<span style="display: block; font-size: 12pt; font-weight: bold; color: #000;">ID: {id} - {rec_name}</strong>  - {[values.age.split(" ")\[0\]]} - {sex}&nbsp;</span>',
//    '<span style="display: block; font-size: 12pt; font-weight: normal; color: #666;">{latestDiagnoseRecName}&nbsp;</span>',
//    '<br /><br />'

);


var diagnoses = new Ext.XTemplate(
    '<br><h3>Diseases</h3>' +
        '<table id="box-table-a" summary="Employee Pay Sheet">',
    '<thead>',
    '<tr>',
    '<th scope="col">Date</th>',
    '<th scope="col">Activity Status</th>',
    '<th scope="col">Disease</th>',
    '<th scope="col">Severity</th>',
    '<th scope="col">Healed Date</th>',
    '<th scope="col">Infectability</th>',
    '<th scope="col">Allergies</th>',
    '</tr>',
    '</thead>',
    '<tbody>',
    '<tpl for=".">',
    '<tr>',
    '<td>{diagnosed_date.day}.{diagnosed_date.month}.{diagnosed_date.year}</td>',
    '<td>{[this.checkStatus(values.is_active)]}</td>',
    '<td>{pathology_rec_name}</td>',
    '<td>{disease_severity}</td>',
    '<td>{healed_dated}</td>',
    '<td>{[this.checkStatus(values.is_infectious)]}</td>',
    '<td>{[this.checkStatus(values.is_allergy)]}</td>',
    '</tr>',
    '</tpl>',
    '</tbody>',
    '</table>',

    {
        // XTemplate configuration:
        disableFormats:true,
        // member functions:
        checkStatus:function (currentStat) {
            if (currentStat == 'true') {
                return '<input type="checkbox" checked="checked" />'
            }
            else return '<input type="checkbox"/>'
        }

    }
);

var vaccinations = new Ext.XTemplate(
    '<br><h3>Vaccinations</h3>' +
        '<table id="box-table-a" summary="Patient Vaccinations">',
    '<thead>',
    '<tr>',
    '<th scope="col">Vaccination</th>',
    '<th scope="col">Dose Number</th>',
    '<th scope="col">Date</th>',
    '<th scope="col">Next Dose</th>',
    '</tr>',
    '</thead>',
    '<tbody>',
    '<tpl for=".">',
    '<tr>',
    '<td>{vaccine_rec_name}</td>',
    '<td>{dose}</td>',
    '<td>{date.month}/{date.day}/{date.year}</td>',
    '<td>{next_dose_date.month}/{next_dose_date.day}/{next_dose_date.year}</td>',
    '</tr>',
    '</tpl>',
    '</tbody>',
    '</table>',

    {
        // XTemplate configuration:
        disableFormats:true,
        // member functions:
        checkStatus:function (currentStat) {
            if (currentStat == 'true') {
                return '<input type="checkbox" checked="checked" />'
            }
            else return '<input type="checkbox"/>'
        }

    }

);


Ext.define('NeqMobile.view.patient.Info', {
        extend:'Ext.Container',
        xtype:'patientInfo',
        requires:['NeqMobile.view.patient.detail.DiseaseDetail','NeqMobile.view.patient.detail.MedicationDetail'],
        //ref: ['NeqMobile.view.patient.SimpleDiseaseView.tpl1'],

        loadPatientHeader:function (patientrecord) {
            console.log('setting patients data...');
            console.log(patientrecord.data);
            this.down('#patientheader').setData(patientrecord.data);
        },
        loadDiagnosesDeprecated:function (diagnoses) {
            console.log('setting diagnoses data');
            this.down('#olddiagnoses').setData(diagnoses);

        },
        loadDiagnoses:function (diagnosestore) {
            console.log('setting diagnoses store');
            this.down('#diagnoses').setStore(diagnosestore);

        },
        loadVaccinations:function (vaccinations) {
            console.log('setting vaccinations data');
            this.down('#vaccinations').setData(vaccinations);

        },

        loadMedications:function (medicationstore) {
            console.log('setting medications tore');
            this.down('#medications').setStore(medicationstore);

        },
        config:{
            scrollable:true,
            styleHtmlContent:true,
            layout:'vbox',
            // layout:'card',
            //  tpl:tpl',

            items:[
                {xtype:'container',

                    itemId:'patientheader',
                    tpl:patientheader
                },
                {

                    xtype:'container',
                    itemId:'olddiagnoses',
                    tpl:diagnoses
                },
                {

                    xtype:'container',
                    itemId:'vaccinations',
                    tpl:vaccinations
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
                            renderer:booleanrenderer,
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