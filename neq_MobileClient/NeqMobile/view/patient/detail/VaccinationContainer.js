Ext.define('NeqMobile.view.patient.detail.VaccinationContainer', {
        extend:'Ext.form.FieldSet',
        xtype:'vaccinationscontainer',
        config:{
            title:'Vaccinations',
            margin: '0',
            padding: '5',
            items:[
                {xtype:'touchgridpanel',
                    itemId:'vaccinations',

                    scrollable:false,
                    features:[
                        {
                            ftype:'Ext.ux.touch.grid.feature.Expandable',
                            launchFn:'initialize',
                            detailCmp:{ xtype:'vaccinationdetail'}
                        }
                    ],
                    columns:[
                        {
                            header:'Vaccine',
                            dataIndex:'vaccine_rec_name',
                            width:'60%'

                        },
                        {
                            header:'Dose Number',
                            dataIndex:'dose',
                            style:'text-align: right;',
                            width:'10%',
                            filter:{ type:'numeric' }
                        },
                        {
                            header:'Date',
                            dataIndex:'date',
                            style:'text-align: right;',
                            sortable:false,
                            width:'15%',
                            renderer:NeqMobile.util.Renderer.daterenderer

                        }   ,
                        {
                            header:'Next Dose',
                            dataIndex:'next_dose_date',
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