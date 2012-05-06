Ext.define('NeqMobile.view.doctor.DoctorNewsFeedContainer', {
        extend:'Ext.form.FieldSet',
        requires: ['NeqMobile.view.doctor.DoctorNewsFeedDetail'],
        xtype:'doctornewsfeedcontainer',
        config:{
            title:'Hospital Doctor News',
            margin: '0',
            padding: '5',
            items:[
                {
                    xtype: 'selectfield',
                    id:'doctornewsfeedtopicselectfield',
                    label: 'Topic',
                    value: 'all',
                    /*
                    options: [
                        {text: 'All', value:  'all' },
                        {text: 'Hospital', value: 'hospital'},
                        {text: 'Medication', value: 'medication'},
                        {text: 'Diseases', value: 'diseases'}
                    ],
                     */
                    store:'doctornewstopics',
                    padding: 5,
                    width: 250,
                    labelWidth: 50
                },
                {
                    xtype:'touchgridpanel',
                    itemId:'hospitaldoctornews',

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












