Ext.define('NeqMobile.view.patient.MedicationContainer', {
        extend:'Ext.form.FieldSet',
        xtype:'medicationscontainer',
        config:{
            title:'Medications',
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
                            width:'25%',
                            renderer:function (value, values) {
                                var color = (value > 0) ? '009933' : 'FF0000';
                                return '<span>' + value + '</span>'; //style="color: #' + color + ';"
                            }
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
                        {
                            header:'Course Completed',
                            dataIndex:'course_completed',
                            style:'text-align: center;',
                            renderer:bulletRenderer,
                            width:'15%',
                            filter:{ type:'numeric' }
                        },
                        {
                            header:'Discontinued',
                            dataIndex:'discontinued',
                            style:'text-align: center;',
                            renderer:bulletRenderer,
                            width:'15%',
                            filter:{ type:'numeric' }
                        },
                        {
                            header:'Active',
                            dataIndex:'is_active',
                            style:'text-align: center;',
                            renderer:bulletRenderer,
                            width:'15%',
                            filter:{ type:'numeric' }
                        }
                    ]


                }
            ]
        }
    }
)














