/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 29.11.11
 * Time: 20:44
 * To change this template use File | Settings | File Templates.
 */
/**
 * @author geekflyer
 */

Ext.define('NeqMobile.view.patient.Info', {
        extend:'Ext.Container',
        xtype:'patientInfo',

        config:{

            layout:'fit',

            items:[
                {
                    xtype:'formpanel',
                    items:[
                        {
                            xtype:'fieldset',
                            title: 'Patient Information',
                            items:[
                                {
                                html:
                                '<table><tr><th>B  e r  l i n</th><th>H a m b u r g</th><th>M u e n c h e n'+
                                    '</th></tr><tr><td>Buletten</td><td>Frikadellen</td><td>Fleischpflanzerl</td></tr><table>'

                                },
                            {
                                    xtype:'textfield',
                                    name:'age',
                                    label:'Age123',
                                    value: '123 Yrs',
                                    readOnly: true
                                },
                                {   xtype:'textareafield',
                                    name:'adress',
                                    label:'Adresse',
                                    value: 'A5',
                                    readOnly: true

                                },
                                {xtype:'button',
                                    text:'blaa'}

                            ]
                        },
                        {
                            xtype:'fieldset',
                            title: 'Allergies & Critical Information',
                            items:[
                                {
                                   // xtype: ''
                                }
                            ]

                        },
                        {
                            xtype: 'fieldset',
                            title: 'Diseases'

                        },
                        {
                            xtype: 'fieldset',
                            title: 'Medication'

                        }
                    ]
                }

         ]}}


);