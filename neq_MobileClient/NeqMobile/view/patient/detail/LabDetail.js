/**
 * Created by JetBrains WebStorm.
 * User: joohee
 * Date: 3/29/12
 * Time: 9:26 PM
 * To change this template use File | Settings | File Templates.
 */



Ext.define('NeqMobile.view.patient.detail.LabDetail', {
        extend: 'Ext.form.Panel',
        xtype:'labdetail',

        config: {
            layout: {
                type: 'vbox'
            },
            scrollable: false,
            items: [
                {
                    //test information
                    xtype: 'fieldset',
                    itemId: 'labdetails',
                    config: {
                        layout: {
                            type: 'hbox'
                        },
                        //flex: 2,
                        padding: 10,
                        title: 'Lab Test Information',
                        items: [
                            {
                                //links
                                xtype: 'textfield',
                                layout:{type:'vbox'},
                                items: [
                                    {
                                        xtype:'fieldset',
                                        label:'Test ID',
                                        name: 'asdf',
                                        readOnly:'true'

                                    },
                                    {
                                        xtype:'fieldset',
                                        label:'Date of the Analysis',
                                        name: 'asdf',
                                        readOnly:'true'
                                    },
                                    {
                                        xtype:'fieldset',
                                        label:'Date Requested',
                                        name: 'asdf',
                                        readOnly:'true'
                                    }]
                            },
                            {
                                //rechts
                                xtype: 'textfield',
                                layout:{type:'vbox'},
                                items: [
                                    {
                                        xtype:'fieldset',
                                        label:'Test Type',
                                        name: 'test',
                                        readOnly:'true'

                                    },
                                    {
                                        xtype:'fieldset',
                                        label:'Pathologist',
                                        name: 'test',
                                        readOnly:'true'
                                    },
                                    {
                                        xtype:'fieldset',
                                        label:'Physician',
                                        name: 'test',
                                        readOnly:'true'
                                    }]
                            }
                        ]
                    }
                },
                {
                    xtype:'touchgridpanel',
                    itemId:'labdetailtable',
                    title: 'Lab Test Details',
                    name:'criteria',
                    padding: 10,
                    scrollable:false,
//                    features:[
//                        {
//                            ftype:'Ext.ux.touch.grid.feature.Expandable',
//                            launchFn:'initialize',
//                            detailCmp:{ xtype:'lab'                          },
//                            autoExpand: false
//                        }
  //                  ],
                    columns:[
                        {
                            header:'Name',
                            dataIndex:'name',
                            style: 'text-align: right;',
                            cls:'centered-cell',
                            width:'40%'
                            //,
                         //   renderer: NeqMobile.util.Renderer.labresultrenderer
                        },
                        {
                            header:'Upper Limit',
                            dataIndex:'upper_limit',
                            style:'text-align: right;',
                            width:'15%'
                            //,
                           // renderer: NeqMobile.util.Renderer.labresultrenderer

                        },
                        {
                            header:'Lower Limit',
                            dataIndex:'lower_limit',
                            style:'text-align: right;',
                            width:'15%',
                            renderer: NeqMobile.util.Renderer.labresultrenderer
                       },
                        {
                            header:'Result',
                            dataIndex:'result',
                            style: 'text-align: right;',
                            cls:'centered-cell',
                            width:'15%',
                            renderer: NeqMobile.util.Renderer.labresultrenderer
                        },
                        {
                            header:'Unit Name',
                            dataIndex:'units_rec_name',
                            style: 'text-align: right;',
                            cls:'centered-cell',
                            width:'15%',
                            renderer: NeqMobile.util.Renderer.labresultrenderer
                        }
                    ]
                }
            ]



        }}
);