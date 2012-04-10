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
                        flex: 2,
                        title: 'Laboratory Test Information',
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
                    //test result
                    title: 'Test Results'

                }
            ]



        }}
);