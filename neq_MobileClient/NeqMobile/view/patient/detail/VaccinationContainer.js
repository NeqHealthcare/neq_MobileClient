Ext.define('NeqMobile.view.patient.detail.VaccinationContainer', {
        extend:'Ext.form.FieldSet',
        xtype:'vaccinationscontainer',
        config:{
            title:'Vaccinations',
            padding: '10 10 10 10',
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
                            width:'25%'

                        },
                        {
                            header:'Dose Number',
                            dataIndex:'dose',
                            style:'padding-left: 1em;',
                            width:'15%',
                            filter:{ type:'numeric' }
                        },
                        {
                            header:'Date',
                            dataIndex:'date',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            width:'15%',
                            renderer:daterenderer

                        }   ,
                        {
                            header:'Next Dose',
                            dataIndex:'next_dose_date',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            width:'15%',
                            renderer:daterenderer

                        }   ,
                        {
                            header:'Observations',
                            dataIndex:'observations',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            style:'padding-left: 1em;',
                            width:'30%'
                        }
                    ]


                }

            ]
        }
    }
)