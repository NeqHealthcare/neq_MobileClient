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
var a = "aaa"

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
                                '<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><th>'+
                                    '<img src="http://t0.gstatic.com/images?q=tbn:ANd9GcS-l5gDNi9BJ9ucACpWOoIlJggmKALKjdjDn42fgbIipSOUGrdmBg"></th><th>H a m b u r g</th><th>M u e n c h e n'+
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
                                    value: a,
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