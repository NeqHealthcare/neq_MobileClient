/**
 * @author Jan Gansen
 */

var blub = new Ext.XTemplate(
    'this is a test'
)

var labTestRequestsTable = new Ext.XTemplate(
    '<table border="1">',
    '<caption> Caption</caption>',
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
        requires:['NeqMobile.view.patient.detail.LabTestRequestsContainer'],

    //    loadPatientHeader:function (patientrecord) {
      //      this.down('#patientheader').setRecord(patientrecord);
       // },
        config:{
            scrollable:true,
            styleHtmlContent:true,
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
            layout:'vbox',
            items:[
                {
                    xtype: 'panel',
                    padding: '0 0 0 0',
                    layout: 'hbox',
                    items:[
                        {
                            xtype: 'label',
                            html: 'Lab Test Requests'
                        },
                        {
                            xtype: 'button',
                            id: 'x-createNewLabRequestButton',
                            margin: '0 0 0 10',
                            text: 'Create New Request',
                            ui: 'normal',
                            align:'right'
                        }
                    ]
                },
                {
                    xtype:'labtestrequestscontainer'
                }
            ]
        }
    }
)
