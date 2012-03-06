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

var daterendererLong = function(date,values){
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


var severityrenderer = function(value, values){
    var barColor1="blue", barColor2="blue";
    if(value.charAt(0)>2){
        barColor1="black"
    }
    else(value.charAt(0)>1)
    {
        barColor1="black", barColor2="black"
    }
    return '<img src="../neq_MobileClient/'+barColor1+'_bar.png"><img src="../neq_MobileClient/'+barColor2+'_bar.png"><img src="../neq_MobileClient/blue_bar.png">';

}


Ext.define('NeqMobile.view.patient.Info', {
        extend:'Ext.Container',
        xtype:'patientInfo',
        requires:['NeqMobile.view.patient.detail.PatientHeader','NeqMobile.view.patient.detail.MedicationContainer','NeqMobile.view.patient.detail.VaccinationContainer','NeqMobile.view.patient.detail.DiagnoseContainer','NeqMobile.view.patient.detail.DiseaseDetail','NeqMobile.view.patient.detail.MedicationDetail','NeqMobile.view.patient.detail.VaccinationDetail'],

        loadPatientHeader:function (patientrecord) {
            console.log('setting patients data...');
            console.log(patientrecord);
            this.down('#patientheader').setRecord(patientrecord);
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
                {xtype:'patientheader'
                }
                ,
                {xtype:'diagnosescontainer'
                }
                ,
                {xtype:'medicationscontainer'
                },
                {xtype:'vaccinationscontainer'
                }

            ]
        }

    }
)
