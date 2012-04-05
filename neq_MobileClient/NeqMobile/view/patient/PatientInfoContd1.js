/**
 * @author Jan Gansen
 */


Ext.define('NeqMobile.view.patient.PatientInfoContd1', {
        extend:'Ext.Container',
        xtype:'patientInfoContd1',
        requires:['NeqMobile.view.patient.detail.LabTestRequestsContainer','NeqMobile.view.patient.detail.LabResultsContainer'],

        loadLabTestRequests:function (labtestrequests) {
            this.down('labtestrequestscontainer #x-labTestRequestsTable').setData(labtestrequests.data);
        },

        loadLabResults:function (labresultstore) {
            this.down('labresultscontainer #labresult').setStore(labresultstore);
        },


        config:{
            styleHtmlContent:true,
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
            layout:'vbox',
            items:[
                {
                  xtype:'labtestrequestscontainer'
                },
                {
                    xtype:'labresultscontainer'
                }
            ]
        }
    }
)