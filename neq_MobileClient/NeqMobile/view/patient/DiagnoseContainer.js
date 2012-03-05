Ext.define('NeqMobile.view.patient.DiagnoseContainer', {
        extend:'Ext.form.FieldSet',
        xtype:'diagnosescontainer',
        config:{
            title:'Diagnoses',
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
                            header:'Date',
                            dataIndex:'diagnosed_date',
                            style:'padding-left: 1em;',
                            width:'10%',
                            renderer:daterenderer
                        },
                        {
                            header:'Activity Status',
                            dataIndex:'is_active',
                            style:'text-align: center;',
                            renderer:bulletRenderer,
                            width:'15%',
                            filter:{ type:'numeric' }
                        },
                        {
                            header:'Disease',
                            dataIndex:'pathology_rec_name',
                            cls:'centered-cell',
                            width:'15%',
                            renderer:function (value, values) {
                                var color = (value > 0) ? '009933' : 'FF0000';
                                return '<span style="color: #' + color + ';">' + value + '</span>';
                            }
                        },
                        {
                            header:'Severity',
                            dataIndex:'disease_severity',
                            cls:'centered-cell',
                            width:'15%',
                            renderer:function (value, values) {
                                var color = (value > 0) ? '009933' : 'FF0000';
                                return '<span style="color: #' + color + ';">' + value + '</span>';
                            }
                        },
                        {
                            header:'Healed Date',
                            dataIndex:'healed_date',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            width:'15%',
                            renderer:daterenderer
                        }   ,
                        {
                            header:'Infectability',
                            dataIndex:'is_infectious',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            renderer:bulletRenderer,
                            width:'15%'

                        },
                        {
                            header:'Allergies',
                            dataIndex:'is_allergy',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            renderer:bulletRenderer,
                            width:'15%'
                        }
                    ]


                }
            ]
        }
    }
)