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

var daterendererLong = function(value,values){
    var date = new Date(value);
    return date.getDay()+'.'+date.getMonth()+'.'+date.getYear()
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
        requires:['NeqMobile.view.patient.MedicationContainer','NeqMobile.view.patient.VaccinationContainer','NeqMobile.view.patient.DiagnoseContainer','NeqMobile.view.patient.detail.DiseaseDetail','NeqMobile.view.patient.detail.MedicationDetail','NeqMobile.view.patient.detail.VaccinationDetail'],

        loadPatientHeader:function (patientrecord) {
            console.log('setting patients data...');
            console.log(patientrecord.data);
            this.down('#patientheader').setData(patientrecord.data);
        },
        loadDiagnoses:function (diagnosestore) {
            console.log('setting diagnoses store');
            this.down('#diagnoses').setStore(diagnosestore);

        },
        loadMedications:function (medicationstore) {
            console.log('setting medications tore');
            this.down('#medications').setStore(medicationstore);

        },
        loadVaccinations:function (vaccinationstore) {
            console.log('setting vaccinations data');
            this.down('#vaccinations').setStore(vaccinationstore);
        },
        config:{
            scrollable:true,
            styleHtmlContent:true,
            hidden: true,
            layout:'vbox',
            items:[
                {xtype:'container',

                    itemId:'patientheader',
                    tpl:patientheader
                },
                {xtype:'diagnosescontainer',
                }
                ,
                {xtype:'medicationscontainer'
                },
                {xtype:'vaccinationscontainer'
                }

            ]
        }

    }
);