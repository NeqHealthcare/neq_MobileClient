/**
 * @author Jan Gansen
 */

Ext.define('NeqMobile.view.patient.detail.LabTestRequestsContainer', {

        extend:'Ext.form.FieldSet',
        xtype:'labtestrequestscontainer',
        config:{
            title:'Lab Test Requests',
            margin: '0',
            padding: '5',
            layout:'vbox',
            items:[
                {
                    xtype: 'button',
                    id: 'x-createNewLabRequestButton',
                    margin: '0 0 5 0',
                    iconCls:'add',
                    iconMask:true,
                    width: '50px',
                    height: '30px'
                },
                {
                    xtype:'touchgridpanel',
                    itemId:'labTestRequestsTable',
                    id: 'labTestRequestsTable',
                    width: '100%',
                    scrollable:false,
                    features   : [
                        {
                            ftype    : 'NeqMobile.controller.settings.UserSettings',
                            launchFn : 'initialize'
                        }
                    ],
                    columns:[
                        {
                            header:'Test Type',
                            dataIndex:'rec_name',
                            style:'padding-left: 1em;',
                            width:'40%'
                        },
                        {
                            header:'Date',
                            dataIndex:'date',
                            style:'text-align: right; padding-right: 1em;',
                            width:'15%',
                            renderer: NeqMobile.util.Renderer.daterenderer
                        },
                        {
                            header:'Physician',
                            dataIndex:'doctor_rec_name',
                            style:'padding-left: 1em;',
                            width:'30%'
                        },
                        {
                            header:'State',
                            dataIndex:'state',
                            style:'padding-left: 1em;',
                            width:'15%'
                        }

                    ]
                }

            ]
        }

    }
)
