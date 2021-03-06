Ext.define('NeqMobile.view.patient.detail.MedicationContainer', {
        extend:'Ext.form.FieldSet',
        xtype:'medicationscontainer',
        config:{
            title:'Medications',
            margin: '0',
            padding: '5',
            items:[
                {xtype:'touchgridpanel',
                    itemId:'medications',
                    margin: '0 0 0 0',
                    scrollable:false,
                    features:[
                        {
                            ftype:'Ext.ux.touch.grid.feature.Expandable',
                            launchFn:'initialize',
                            detailCmp:{ xtype:'medicationdetail'}
                        }
                    ],
                    columns:[
                        {
                            header:'Medication',
                            dataIndex:  'medicament_rec_name',
                            renderer: NeqMobile.util.Renderer.completerenderer,
                            width:'60%'
                        },
                        {
                            header:'Active',
                            dataIndex:'is_active',
                            style: 'text-align: center;',
                            renderer:NeqMobile.util.Renderer.bulletRenderer,
                            width:'10%'
                        },
                        {
                            header:'Start of Treatment',
                            dataIndex:'start_treatment',
                            style:'text-align: right;',
                            sortable:false,
                            width:'15%',
                            renderer:NeqMobile.util.Renderer.daterenderer

                        }   ,
                        {
                            header:'End of Treatment',
                            dataIndex:'end_treatment',
                            style:'text-align: right;',
                            sortable:false,
                            width:'15%',
                            renderer:NeqMobile.util.Renderer.daterenderer

                        }
                    ]


                }
            ]
        }
    }
)












