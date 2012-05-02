/**
 * @author chopsuey
 */
// var fluidbalancechart =
var store = new Ext.data.JsonStore({
    fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],
    data: [
        {'name':'metric one', 'data1':35, 'data2':0, 'data3':0, 'data4':8, 'data5':13},
        {'name':'metric two', 'data1':38, 'data2':56, 'data3':56, 'data4':10, 'data5':3},
        {'name':'metric three', 'data1':40, 'data2':99, 'data3':88, 'data4':12, 'data5':7},
        {'name':'metric four', 'data1':39, 'data2':80, 'data3':66, 'data4':1, 'data5':23},
        {'name':'metric five', 'data1':42, 'data2':240, 'data3':240, 'data4':13, 'data5':33}
    ]
});

var vitaldatachart = Ext.create('Ext.chart.Chart', {

    width: 800,
    height: 250,
    //autoSize: true,
    animate: true,
    showMarkers: true,
    store: store,
    //legend: {
    //    position: 'left'
    //},

    axes: [{
        // Axis for Temperature from 35 to 42 Degrees, displayed on left side of the graph
        type: 'Numeric',
        position: 'left',
        grid: {
            odd: {stroke: '#555'},
            even: {stroke: '#ccc'}
        },
        minimum: 35,
        maximum: 42
    },{
        // 2nd y-Axis for Bloodpressure and Puls from 0 to 240, displayed on the right side of the graph
        type: 'Numeric',
        position: 'right',
        minimum: 0,
        maximum: 240
    },{
        // x-Axis displayed at the bottom to show the timeline when the data was measured
        type: 'Category',//'Time',
        position: 'bottom',
        fields: ['name']
        //title: 'Day',
        //dateFormat: 'M d h m',
        // we have to adjust this according to the events button pushed (show daily/weekly/monthly)
        //constrain: true,
        //fromDate: new Date('1/1/11'),
        //toDate: new Date('1/1/11')
    }],

    series: [{
        type: 'line',
        showInLegend: true,
        label: 'Temperature',
        highlight: {
            size: 7,
            radius: 7
        },
        axis: 'left',
        xField: 'name',
        yField: 'data1'
    },{
        type: 'line',
        showInLegend: true,
        label: 'Bloodpressure',
        highlight: {
            size: 7,
            radius: 7
        },
        axis: 'right',
        xField: 'name',
        yField: 'data2'
    },{
        type: 'line',
        showInLegend: true,
        label: 'Puls',
        highlight: {
            size: 7,
            radius: 7
        },
        axis: 'right',
        xField: 'name',
        yField: 'data3'
    }]
});

Ext.define('NeqMobile.view.patient.PatientHistoricData', {
    extend: 'Ext.Panel',
    requires: ['Ext.chart.Panel', 'Ext.chart.axis.Numeric', 'Ext.chart.axis.Category', 'Ext.chart.series.Line'],
    xtype: 'patienthistoricdata',

// - Chart erstellen -----------------------------------------



// - Restliche Formen / UI Elemente erstellen und Chart als Item einbinden/zuweisen

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
                                height: 40,
                                style: 'font-size: 10pt; font-style: normal; vertical-align: middle;',
                                title: 'Vital Data - Temperature, Blood pressure, BMI',
                                layout: {
                                    align: 'start',
                                    type: 'hbox'
                                }
                            },
                            {
                                xtype: 'container',
                                id: 'vitaldatachart',
                                items: vitaldatachart
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        minHeight: 350,
                        padding: 5,
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                height: 40,
                                style: 'font-size: 10pt; font-style: normal; vertical-align: middle;',
                                title: 'Fluid Balance',
                                layout: {
                                    align: 'start',
                                    type: 'hbox'
                                }
                            },
                            {
                                xtype: 'container',
                                id: 'fluidbalancechart'//,
                                //items: fluidbalancechart
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
                                        style: 'font-size: 10pt;',
                                        flex: 1
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'historicaldata_btn_week',
                                        margin: '0 4 0 4',
                                        padding: 5,
                                        text: 'Week',
                                        style: 'font-size: 10pt;',
                                        flex: 1
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'historicaldata_btn_month',
                                        margin: '0 0 0 4',
                                        text: 'Month',
                                        style: 'font-size: 10pt;',
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