/**
 * @author Jan Gansen
 */


var testtemplate = new Ext.XTemplate(
    '<table border="1">',
    '<thead>',
    '<tr>',
    '<th scope="col">Test Type</th>',
    '<th scope="col">Date</th>',
    '<th scope="col">Physician</th>',
    '<th scope="col">State</th>',
    '</tr>',
    '</thead>',
    '<tbody>',
    '<tpl for=".">',
    '<tr>',
    '<td>{testtype}</td>',
    '<td>{date}</td>',
    '<td>{physician}</td>',
    '<td>{state}</td>',
    '</tr>',
    '</tpl>',
    '</tbody>',
    '</table>'
)



Ext.define('NeqMobile.view.patient.PatientInfoContd1', {
        extend:'Ext.Container',
        xtype:'patientInfoContd1',
        requires:['NeqMobile.view.patient.detail.LabTestRequestsContainer','NeqMobile.view.patient.detail.LabResultsContainer'],

        loadLabTestRequests:function (labtestrequests) {
          console.log(labtestrequests.data);
          this.down('labtestrequestscontainer #x-labTestRequestsTable').setData(labtestrequests.data);
        },

        loadLabResults:function (labresultstore) {
            this.down('labresultscontainer labresult').setStore(labresultstore.data);
        },


        config:{
            styleHtmlContent:true,
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
            hidden: true,
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