Ext.define('NeqMobile.view.patient.detail.HistoricalDataContainer', {
    extend: 'Ext.Panel',

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
                                title: 'Temperature, Blood pressure, BMI',
                                layout: {
                                    align: 'start',
                                    type: 'hbox'
                                }
                            },
                            {
                                xtype: 'container'
                            },
                            {
                                xtype: 'container',
                                docked: 'bottom',
                                layout: {
                                    align: 'start',
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        text: 'Day',
                                        flex: 1
                                    },
                                    {
                                        xtype: 'button',
                                        text: 'Week',
                                        flex: 1
                                    },
                                    {
                                        xtype: 'button',
                                        text: 'Month',
                                        flex: 1
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        minHeight: 300,
                        padding: 5,
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: 'Liquidity Balance',
                                layout: {
                                    align: 'start',
                                    type: 'hbox'
                                }
                            },
                            {
                                xtype: 'container'
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
                                        padding: 5,
                                        text: 'Day',
                                        flex: 1
                                    },
                                    {
                                        xtype: 'button',
                                        padding: 5,
                                        text: 'Week',
                                        flex: 1
                                    },
                                    {
                                        xtype: 'button',
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
                        xtype: 'textareafield'
                    }
                ]
            }
        ]
    }

});