Ext.define('NeqMobile.view.patient.detail.MedicationContainer', {
        extend:'Ext.form.FieldSet',
        xtype:'medicationscontainer',
        config:{
            title:'Medications',
            padding: '10 10 10 10',
            items:[
                {xtype:'touchgridpanel',
                    itemId:'medications',

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
                            dataIndex:'medicament_rec_name',
                            cls:'centered-cell',
                            style:'padding-left: 1em;',
                            width:'55%'
                        },
                        {
                            header:'Start of Treatment',
                            dataIndex:'start_treatment',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            width:'15%',
                            renderer:daterendererLong

                        }   ,
                        {
                            header:'End of Treatment',
                            dataIndex:'end_treatment',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            width:'15%',
                            renderer:daterendererLong

                        }   ,
//                        {
//                            header:'Course Completed',
//                            dataIndex:'course_completed',
//                            style:'text-align: center;',
//                            renderer:bulletRenderer,
//                            width:'15%',
//                            filter:{ type:'numeric' }
//                        },
                        {
                            header:'Active',
                            dataIndex:'is_active',
                            style: 'text-align: center;',
                            renderer:bulletRenderer,
                            width:'5%'
                        },
                        {
                            header:'Discontinued',
                            dataIndex:'discontinued',
                            style:'text-align: center;',
                            renderer:bulletRenderer,
                            width:'10%'
                        }

                    ]


                }
            ]
        }
    }
)














