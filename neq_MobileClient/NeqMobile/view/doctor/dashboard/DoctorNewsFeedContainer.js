Ext.define('NeqMobile.view.doctor.dashboard.DoctorNewsFeedContainer', {
        extend:'Ext.form.FieldSet',
        requires: ['NeqMobile.view.doctor.dashboard.DoctorNewsFeedDetail'],
        xtype:'doctornewsfeedcontainer',
        config:{
            title:'Hospital News',
            margin: '0',
            padding: '5',
            items:[
                {
                   xtype: 'fieldset',
                   layout: 'hbox',
                    items:[
                        {
                            xtype: 'selectfield',
                            id:'doctornewsfeedtopicselectfield',
                            label: 'Topic',
                            displayField:'topic',
                            valueField:'id',
                            store:'doctornewstopics',
                            padding: 5,
                            width: 300,
                            labelWidth: 75
                        },
                        {

                        },
                        {
                            xtype: 'selectfield',
                            width: 250,
                            id: 'newsnumberselection',
                            label: '# of News',
                            labelWidth: 135,
                            padding:'0, 0, 10, 0',
                            value: '5',
                            options: [
                                {text: '5', value: '5'},
                                {text: '10', value: '10'},
                                {text: '15', value: '15'}
                            ]

                        }
                    ]
                },
                {
                    xtype:'touchgridpanel',
                    itemId:'hospitaldoctornews',
                    id:'hospitaldoctornews',
                    //padding: 5,
                    //margin: 5,

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
                            dataIndex:  'title',
                            //style:'padding-left: 1em;',
                            //renderer: NeqMobile.util.Renderer.completerenderer,
                            width:'80%'
                        },
                        {
                            header:'Date',
                            dataIndex:  'pubDate',
                            //style:'padding-left: 1em;',
                            renderer: NeqMobile.util.Renderer.daterenderer,
                            width:'20%'
                        }
                    ]
                }
            ]
        }
    }
);












