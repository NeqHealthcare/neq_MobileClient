/**
 * Created by JetBrains WebStorm.
 * User: joohee
 * Date: 3/18/12
 * Time: 11:04 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.view.patient.detail.LabResultsContainer', {
        extend:'Ext.form.FieldSet',
        xtype:'labresultscontainer',

        config:{
            title:'Lab Results',
            margin: '0',
            padding: '5',
            border: '5',
            items:[
                {
                    xtype:'touchgridpanel',
                    itemId:'labresult',
                    scrollable:false,
                    features:[
                        {
                            ftype:'Ext.ux.touch.grid.feature.Expandable',
                            launchFn:'initialize',
                            detailCmp:{ xtype:'labdetail'},
                            autoExpand: 'false'
                        }
                    ],
                    columns:[
                        {
                            header:'Test Type',
                            dataIndex:'test_rec_name',
                            style: 'text-align: left;padding-left: 1em;',
                            cls:'centered-cell',
                            width:'40%'
                        },
                        {
                            header:'Date Requested',
                            dataIndex:'date_requested',
                            style:'text-align: left;padding-left: 1em;',
                            width:'15%',
                            renderer:NeqMobile.util.Renderer.daterenderer
                        },
                        {
                            header:'Date of the Analysis',
                            dataIndex:'date_analysis',
                            style:'text-align: left;padding-left: 1em;',
                            width:'15%',
                            renderer:NeqMobile.util.Renderer.daterenderer
                        },
                        {
                            header:'Physician',
                            dataIndex:'requestor_rec_name',
                            style: 'text-align: left;padding-left: 1em;',
                            cls:'centered-cell',
                            width:'15%',
                            renderer: NeqMobile.util.Renderer.undefinedRenderer
                        },
                        {
                            header:'Pathologist',
                            dataIndex:'pathologist_rec_name',
                            style: 'text-align: left;padding-left: 1em;',
                            cls:'centered-cell',
                            width:'15%',
                            renderer: NeqMobile.util.Renderer.undefinedRenderer
                        }
                    ]
                }
            ]
        }
    }

)
