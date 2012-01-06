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

Ext.define('NeqMobile.view.patient.Dashboard', {
        extend:'Ext.Container',
        alias:'widget.patientdashboard',

        config:{

            layout:'fit',

            items:[
                {
                    xtype:'formpanel',
                    items:[
                        {
                            xtype:'fieldset',


                            title:'Basic Data',
                            items:[

                                {

                                    xtype:'textfield',
                                    name:'firstName',
                                    label:'First Name'
                                },
                                {
                                    xtype:'textfield',
                                    name:'lastName',
                                    label:'Last Name'
                                },
                                {
                                    xtype:'textfield',
                                    name:'age',
                                    label:'Age'
                                },
                                {   xtype:'textareafield',
                                    name:'adress',
                                    label:'Adresse'
                                },
                                {xtype:'button',
                                    text:'blaa'}


                            ]}
                    ]
                }
            ]}}


);