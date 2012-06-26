Ext.define('NeqMobile.view.patient.detail.DiagnoseContainer', {
        extend:'Ext.form.FieldSet',
        xtype:'diagnosescontainer',
        config:{
            title:'Diagnoses',
            margin: '0',
            padding: '5',
            layout: 'vbox',
            items:[
                {
                    xtype:'button',
                    id: 'createNewDaignosebutton',
                    iconCls:'add',
                    iconMask:true,
                    margin: '0 0 5 0',
                    width: '50px',
                    height: '30px'
                },
                //  {
                //      txype: 'spacer'
                // },
                {xtype:'touchgridpanel',
                    margin: '0 0 0 0',
                    itemId:'diagnoses',
                    scrollable:false,
                    features:[
                        {
                            ftype:'Ext.ux.touch.grid.feature.Expandable',
                            launchFn:'initialize',
                            detailCmp:{ xtype:'diseasedetail'}
                        }
                    ],
                    columns:[
                        {
                            header:'Disease',
                            dataIndex:'pathology_rec_name',
                            style:'text-align: left;',
                            width:'33%'
                        },
                        {
                            header:'Status',
                            dataIndex:'is_active',
                            style:'text-align: center;',
                            renderer:NeqMobile.util.Renderer.bulletRenderer,
                            width:'7%'
                        },
                        {
                            header:'Severity',
                            dataIndex:'disease_severity',
                            style: 'text-align: center;',
                            cls:'centered-cell',
                            width:'10%',
                            renderer: NeqMobile.util.Renderer.severityrenderer
                        },
                        {
                            header:'Infectability',
                            dataIndex:'is_infectious',
                            style:'text-align: center;',
                            sortable:false,
                            renderer:NeqMobile.util.Renderer.booleanrenderer,
                            width:'10%'

                        },
                        {
                            header:'Allergies',
                            dataIndex:'is_allergy',
                            style:'text-align: center;',
                            sortable:false,
                            renderer:NeqMobile.util.Renderer.booleanrenderer,
                            width:'10%'
                        }
                        ,
                        {
                            header:'Diagnosed Date',
                            dataIndex:'diagnosed_date',
                            style:'text-align: right;',
                            width:'15%',
                            renderer:NeqMobile.util.Renderer.daterenderer
                        },
                        {
                            header:'Healed Date',
                            dataIndex:'healed_date',
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