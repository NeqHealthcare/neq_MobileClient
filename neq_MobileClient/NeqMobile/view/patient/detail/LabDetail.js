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
            padding: 50,
            style: 'text-align: right; font-color: "#808080"',
            scrollable: false,
            items: [
                {
                    //test information
                    xtype: 'fieldset',
                    itemId: 'labdetails',
                    config: {
                        layout: {
                        //    type: 'hbox'
                        },
                        padding: 10,
                        title: 'Lab Test Information',
                        items: [
                            {
                                //links
                                xtype: 'fieldset',
                                layout:{type:'vbox'},
                                items: [
                                    {
                                        xtype:'textfield',
                                        label:'Test ID',
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
                                    }]
                            },
                            {
                                //rechts
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
                    scrollable:false,
                    columns:[
                        {
                            header:'Name',
                            dataIndex:'name',
                            cls:'centered-cell',
                            width:'40%',
                            renderer: NeqMobile.util.Renderer.labresultrenderer
                        },
                        {
                            header:'Upper Limit',
                            dataIndex:'upper_limit',
                            width:'15%',
                            renderer: NeqMobile.util.Renderer.labresultrenderer
                       },
                        {
                            header:'Lower Limit',
                            dataIndex:'lower_limit',
                            width:'15%',
                            renderer: NeqMobile.util.Renderer.labresultrenderer
                       },
                        {
                            header:'Result',
                            dataIndex:'result',
                            cls:'centered-cell',
                            width:'15%',
                            renderer: NeqMobile.util.Renderer.labresultrenderer
                        },
                        {
                            header:'Unit Name',
                            dataIndex:'units_rec_name',
                            cls:'centered-cell',
                            width:'15%',
                            renderer: NeqMobile.util.Renderer.labresultrenderer
                        }
                    ]
                }
            ]



        }}
);