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
                            style:'padding-left: 1em;',
                            width:'60%'

                        },
                        {
                            header:'Dose Number',
                            dataIndex:'dose',
                            style:'text-align: right; padding-right: 1em;',
                            width:'10%',
                            filter:{ type:'numeric' }
                        },
                        {
                            header:'Date',
                            dataIndex:'date',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            width:'15%',
                            renderer:NeqMobile.util.Renderer.daterenderer

                        }   ,
                        {
                            header:'Next Dose',
                            dataIndex:'next_dose_date',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
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