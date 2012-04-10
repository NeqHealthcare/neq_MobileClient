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
    '<td>{[NeqMobile.util.Renderer.longToDateRenderer(values.date)]}</td>',
    '<td>{doctor_rec_name}</td>',
    '<td>{state}</td>',
    '</tr>',
    '</tpl>',
    '</tbody>',
    '</table>'
)

Ext.define('NeqMobile.view.patient.detail.LabTestRequestsContainer', {

        extend:'Ext.form.FieldSet',
        xtype:'labtestrequestscontainer',
        config:{
            title:'Lab Test Requests',
            margin: '0',
            padding: '5',
            items:[
                {
                    xtype: 'button',
                    id: 'x-createNewLabRequestButton',
                    margin: '0 0 5 0',
                    text: 'Create New Request',
                    ui: 'normal',
                    width: 200
                },
                {
                    xtype: 'panel',
                    id: 'labTestRequestsTable',
                    data: null,
                    tpl: labTestRequestsTable
                }

            ]
        }

    }
)
