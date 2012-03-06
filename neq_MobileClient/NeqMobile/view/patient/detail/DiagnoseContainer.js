Ext.define('NeqMobile.view.patient.detail.DiagnoseContainer', {
        extend:'Ext.form.FieldSet',
        xtype:'diagnosescontainer',
        config:{
            title:'Diagnoses',
            padding: '10 10 10 10',
            items:[
                {xtype:'touchgridpanel',
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
                            style:'text-align: left; padding-right: 1em;',
                            width:'33%'
                        },
                        {
                            header:'Status',
                            dataIndex:'is_active',
                            style:'text-align: center;',
                            renderer:bulletRenderer,
                            width:'7%',
                            filter:{ type:'numeric' }
                        },
                        {
                            header:'Date',
                            dataIndex:'diagnosed_date',
                            style:'padding-right: 1em; text-align: right;',
                            width:'15%',
                            renderer:daterendererLong
                        },
                        {
                            header:'Severity',
                            dataIndex:'disease_severity',
                            style: 'text-align: center;',
                            cls:'centered-cell',
                            width:'10%',
                            renderer: severityrenderer
                        },
                        {
                            header:'Healed Date',
                            dataIndex:'healed_date',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            width:'15%',
                            renderer:daterendererLong
                        }   ,
                        {
                            header:'Infectability',
                            dataIndex:'is_infectious',
                            hidden:true,
                            style:'text-align: center;',
                            sortable:false,
                            renderer:booleanrenderer,
                            width:'10%'

                        },
                        {
                            header:'Allergies',
                            dataIndex:'is_allergy',
                            hidden:true,
                            style:'text-align: center; padding-right: 1em;',
                            sortable:false,
                            renderer:booleanrenderer,
                            width:'10%'
                        }
                    ]
                }
            ]
        }
    }
)