var completerenderer = function(value, values){
    if (values.course_completed)
        return '<div style="text-decoration: line-through;">'+value+'</div>'
    else{
       if(values.discontinued)
            return '<span style="color:#FF0000">'+value+'</span>'
        else
        return '<div style="text-decoration: none;">'+value+'</div>'
    }
}

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
                            dataIndex:  'medicament_rec_name',
                            style:'padding-left: 1em;',
                            renderer: completerenderer,
                            width:'55%'
                        },
                        {
                            header:'Start of Treatment',
                            dataIndex:'start_treatment',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            width:'15%',
                            renderer:NeqMobile.util.Renderer.daterenderer

                        }   ,
                        {
                            header:'End of Treatment',
                            dataIndex:'end_treatment',
                            hidden:true,
                            style:'text-align: right; padding-right: 1em;',
                            sortable:false,
                            width:'15%',
                            renderer:NeqMobile.util.Renderer.daterenderer

                        }   ,
                        {
                            header:'Active',
                            dataIndex:'is_active',
                            style: 'text-align: center;',
                            renderer:NeqMobile.util.Renderer.bulletRenderer,
                            width:'5%'
                        },
                        {
                            header:'Discontinued',
                            dataIndex:'discontinued',
                            style:'text-align: center;',
                            renderer:NeqMobile.util.Renderer.bulletRenderer,
                            width:'10%'
                        }

                    ]


                }
            ]
        }
    }
)












