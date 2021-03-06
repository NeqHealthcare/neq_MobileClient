/**
 * @author Jan Gansen
 */


Ext.define('NeqMobile.view.patient.PatientLab', {
        extend:'Ext.Container',
        xtype:'patientlab',
        requires:['NeqMobile.view.patient.detail.LabTestRequestsContainer','NeqMobile.view.patient.detail.LabResultsContainer', 'NeqMobile.view.patient.detail.LabDetail'],

        loadLabTestRequests:function (labtestrequests) {
            this.down('labtestrequestscontainer #labTestRequestsTable').setStore(labtestrequests);
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