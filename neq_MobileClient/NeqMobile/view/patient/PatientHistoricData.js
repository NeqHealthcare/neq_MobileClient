/**
 * @author chopsuey
 */

Ext.define('NeqMobile.view.patient.PatientHistoricData', {
    extend: 'Ext.Panel',
    xtype: 'patienthistoricdata',

    config: {
        margin: 0,
        padding: 5,
        scrollable: true,
        items: [
            {
                xtype: 'fieldset',
                margin: 0,
                padding: 5,
                title: 'Historical Patient Data',
                items: [
                    {
                        xtype: 'panel',
                        margin: '0 0 5 0',
                        minHeight: 300,
                        padding: 5,
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: 'Vital Data - Temperature, Blood pressure, BMI',
                                layout: {
                                    align: 'start',
                                    type: 'hbox'
                                }
                            },
                            {
                                xtype: 'container',
                                id: 'vitaldatachart'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        minHeight: 360,
                        padding: 5,
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: 'Fluid Balance',
                                layout: {
                                    align: 'start',
                                    type: 'hbox'
                                }
                            },
                            {
                                xtype: 'container',
                                id: 'fluidbalancechart'
                            },
                            {
                                xtype: 'container',
                                docked: 'bottom',
                                layout: {
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        id: 'historicaldata_btn_day',
                                        margin: '0 4 0 0',
                                        padding: 5,
                                        text: 'Day',
                                        flex: 1
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'historicaldata_btn_week',
                                        margin: '0 4 0 4',
                                        padding: 5,
                                        text: 'Week',
                                        flex: 1
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'historicaldata_btn_month',
                                        margin: '0 0 0 4',
                                        text: 'Month',
                                        flex: 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                padding: 5,
                title: 'Additional Information',
                items: [
                    {
                        xtype: 'textareafield',
                        id: 'historicaldata_area_addinfo'
                    }
                ]
            }
        ]
    }

});