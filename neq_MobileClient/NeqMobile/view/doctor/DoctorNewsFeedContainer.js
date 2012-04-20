Ext.define('NeqMobile.view.doctor.DoctorNewsFeedContainer', {
        extend:'Ext.form.FieldSet',
        xtype:'doctornewsfeedcontainer',
        config:{
            title:'Medical News',
            margin: '0',
            padding: '5',
            items:[
                {
                    xtype: 'selectfield',
                    padding: 5,
                    width: 250,
                    labelWidth: 0
                },
                {
                    xtype:'touchgridpanel',
                    itemId:'medicalnews',

                    scrollable:false,
                    features:[
                        {
                            ftype:'Ext.ux.touch.grid.feature.Expandable',
                            launchFn:'initialize',
                            detailCmp:{ xtype:'doctornewsfeeddetail'}
                        }
                    ],
                    columns:[
                        {
                            header:'News',
                            dataIndex:  'news_short',
                            //style:'padding-left: 1em;',
                            renderer: NeqMobile.util.Renderer.completerenderer,
                            width:'80%'
                        },
                        {
                            header:'Url',
                            dataIndex:  'url',
                            //style:'padding-left: 1em;',
                            renderer: NeqMobile.util.Renderer.completerenderer,
                            width:'20%'
                        }
                    ]


                }
            ]
        }
    }
);












