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
        type: 'vbox',
        padding: '20 20 30 40',
        style: 'text-align: left; background-color: #eeeeee',
            scrollable: false,
            items: [
                {
                    xtype: 'panel',
                    itemId:'labdetails',
                    layout: 'hbox',
                    border: '3 0 0 0',
                    items:[
                           {
                               //left column
                               xtype: 'fieldset',
                               layout: 'vbox',
                               items: [
                                        {
                           xtype: 'textfield',
                           label: 'Test ID',
                           name: 'name',
                           readOnly:'true'
                        },
                                        {
                            xtype:'textfield',
                            label:'Date of the Analysis',
                            name: 'date_analysis',
                            readOnly:'true'
                        },
                                        {
                        xtype:'textfield',
                        label:'Date Requested',
                        name: 'date_requested',
                        readOnly:'true'
                        }
                                      ],
                               flex:1
                           },
                           {
                           //right column
                                xtype: 'fieldset',
                                layout:{type:'vbox'},
                                items: [
                                    {
                                        xtype:'textfield',
                                        label:'Test Type',
                                        name: 'test_rec_name',
                                        readOnly:'true'

                                    },
                                    {
                                        xtype:'textfield',
                                        label:'Pathologist',
                                        name: 'pathologist_rec_name',
                                        readOnly:'true'
                                    },
                                    {
                                        xtype:'textfield',
                                        label:'Physician',
                                        name: 'requestor_rec_name',
                                        readOnly:'true'
                                    }],
                                flex: 1
                            }

                    ]

                },
                {
                    xtype:'touchgridpanel',
                    itemId:'labdetailtable',
                    id: 'labdetailview',
                    title: 'Lab Test Details',
                    name:'criteria',
                    scrollable:false,
                    columns:[
                        {
                            header:'Name',
                            dataIndex:'name',
                            cls:'centered-cell',
                            width:'40%'
                        },
                        {
                            header:'Upper Limit',
                            dataIndex:'upper_limit',
                            width:'15%',
                            renderer: NeqMobile.util.Renderer.limitRenderer
                       },
                        {
                            header:'Lower Limit',
                            dataIndex:'lower_limit',
                            width:'15%',
                            renderer: NeqMobile.util.Renderer.limitRenderer
                       },
                        {
                            header:'Result',
                            dataIndex:'result',
                            cls:'centered-cell',
                            width:'15%'
                         },
                        {
                            header:'Unit Name',
                            dataIndex:'units_rec_name',
                            cls:'centered-cell',
                            width:'15%',
                            renderer: NeqMobile.util.Renderer.unitRenderer
                        }
                    ]
                }
            ]



        }}
);