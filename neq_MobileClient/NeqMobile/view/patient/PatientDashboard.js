/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 29.11.11
 * Time: 20:44
 * To change this template use File | Settings | File Templates.
 */
/**
 * @author geekflyer
 */

Ext.define('NeqMobile.view.patient.PatientDashboard', {
        extend:'Ext.Container',
        xtype:'patientdashboard',

        requires:['NeqMobile.view.patient.detail.PatientHeader',
            'NeqMobile.view.patient.detail.MedicationContainer',
            'NeqMobile.view.patient.detail.VaccinationContainer',
            'NeqMobile.view.patient.detail.DiagnoseContainer',
            'NeqMobile.view.patient.detail.DiseaseDetail',
            'NeqMobile.view.patient.detail.MedicationDetail',
            'NeqMobile.view.patient.detail.VaccinationDetail'],

        loadPatientHeader:function (patientrecord) {
            this.down('#patientheader').setRecord(patientrecord);
        },
        loadDiagnoses:function (diagnosestore) {

            this.down('#diagnoses').setStore(diagnosestore);

        },
        loadMedications:function (medicationstore) {

            this.down('#medications').setStore(medicationstore);

        },
        loadVaccinations:function (vaccinationstore) {

            this.down('#vaccinations').setStore(vaccinationstore);
        },
        config:{
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
            styleHtmlContent:true,
            layout:'vbox',
            margin: 0,
            padding: 15,
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
