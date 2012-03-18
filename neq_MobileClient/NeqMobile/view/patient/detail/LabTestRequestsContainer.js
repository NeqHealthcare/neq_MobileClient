/**
 * @author Jan Gansen
 */

Ext.define('NeqMobile.view.patient.detail.LabTestRequestsContainer', {
        extend:'Ext.Container',
        xtype:'labtestrequestscontainer',
        requires:[],
        config:{
            tpl: labTestRequestsTable
        }
    }
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

