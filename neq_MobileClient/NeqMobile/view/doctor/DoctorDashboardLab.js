/**
 * Created with IntelliJ IDEA.
 * User: geekflyer
 * Date: 05.04.12
 * Time: 00:56
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.view.doctor.DoctorDashboardLab', {
    extend:'Ext.Container',
    xtype:'doctordashboardlab',
    config:{
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
                        header:'Disease',
                        dataIndex:'pathology_rec_name',
                        style:'text-align: left; padding-left: 1em;',
                        width:'33%'
                    },
                    {
                        header:'Status',
                        dataIndex:'is_active',
                        style:'text-align: center;',
                        renderer:NeqMobile.util.Renderer.bulletRenderer,
                        width:'7%'
                    },
                    {
                        header:'Severity',
                        dataIndex:'disease_severity',
                        style: 'text-align: center;',
                        cls:'centered-cell',
                        width:'10%',
                        renderer: NeqMobile.util.Renderer.severityrenderer
                    },
                    {
                        header:'Infectability',
                        dataIndex:'is_infectious',
                        hidden:true,
                        style:'text-align: center;',
                        sortable:false,
                        renderer:NeqMobile.util.Renderer.booleanrenderer,
                        width:'10%'

                    },
                    {
                        header:'Allergies',
                        dataIndex:'is_allergy',
                        hidden:true,
                        style:'text-align: center; padding-right: 1em;',
                        sortable:false,
                        renderer:NeqMobile.util.Renderer.booleanrenderer,
                        width:'10%'
                    }
                    ,


                    {
                        header:'Diagnosed Date',
                        dataIndex:'diagnosed_date',
                        style:'padding-right: 1em; text-align: right;',
                        width:'15%',
                        renderer:NeqMobile.util.Renderer.daterenderer
                    },
                    {
                        header:'Healed Date',
                        dataIndex:'healed_date',
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
})