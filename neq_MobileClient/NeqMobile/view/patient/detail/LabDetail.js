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
        id:'labdetailcontainer',
        config: {
            type: 'vbox',
            style: 'text-align: left; background-color: #f7f7f7; border-top: 1px solid #ccc;',
            scrollable: false,
            items: [
                {

                    xtype: 'fieldset',
                    title: 'General Information',
                    layout: 'vbox',
                    margin: '3 6 3 6',
                    items: [
                        {
                            xtype: 'textfield',
                            label: 'Test ID',
                            name: 'name',
                            readOnly:'true'
                        },
                        {
                            xtype:'datepickerfield',
                            label:'Date of the Analysis',
                            name: 'date_analysis',
                            readOnly:'true',
                            placeHolder: '-',
                            dateFormat: 'd.m.Y'
                            // renderTo: Ext.Date.format('date_analysis', 'd.m.Y')
                        },
                        {
                            xtype:'datepickerfield',
                            label:'Date Requested',
                            name: 'date_requested',
                            readOnly:'true',
                            placeHolder: '-',
                            dateFormat: 'd.m.Y'
                       },
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
                        }
                    ]
                },
                {

                    xtype: 'fieldset',
                    title: 'Detailed Information',
                    layout: 'vbox',
                    margin: '3 6 3 6',
                    items: [
                            {
                                xtype:'touchgridpanel',
                                itemId:'labdetailtable',
                                id: 'labdetailview',
                                title: 'Lab Test Details',
                                style:'background-color: #fff;',
                                name:'criteria',
                                scrollable:false,
                                columns:[
                                    {
                                        header:'Name',
                                        dataIndex:'name',
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
                                        width:'15%'
                                    },
                                    {
                                        header:'Unit Name',
                                        dataIndex:'units_rec_name',
                                        width:'15%',
                                        renderer: NeqMobile.util.Renderer.unitRenderer
                                    }
                                ]
                            }
                        ]
                },
                {
                    xtype: 'label',
                    html: ''

                }

            ]



        }}
);