/**
 * @author Jan Gansen
 */


var labTestRequestsTable = new Ext.XTemplate(
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
    '<td>{rec_name}</td>',
    '<td>{date}</td>',
    '<td>{doctor_rec_name}</td>',
    '<td>{state}</td>',
    '</tr>',
    '</tpl>',
    '</tbody>',
    '</table>'
)

var testdata = [
                    {
                     patient_id: '12',
                     state: 'not yet',
                     rec_name: 'rec name?',
                     doctor_rec_name: 'doc',
                     date: '2012-12-12'
                    },
                    {
                    patient_id: '12',
                    state: 'not yet',
                    rec_name: 'rec name?',
                    doctor_rec_name: 'doc',
                    date: '2012-12-12'
                    }
                ]


Ext.define('NeqMobile.view.patient.detail.LabTestRequestsContainer', {
        extend:'Ext.Panel',
        xtype:'labtestrequestscontainer',
        requires:[],
        data: null,
        config: {
            tpl : labTestRequestsTable
        }

    }
)
