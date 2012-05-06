/**
 * @author chopsuey
 */
// var fluidbalancechart =
var store = new Ext.data.JsonStore({
    fields:['date', 'data1', 'data2', 'data3', 'data4', 'data5'],
    data:[
        {'date':'07/12/2011 14:34', 'data1':35, 'data2':0, 'data3':0, 'data4':8, 'data5':13},
        {'date':'07/11/2011 11:34', 'data1':38, 'data2':56, 'data3':56, 'data4':10, 'data5':3},
        {'date':'07/13/2011 15:34', 'data1':40, 'data2':99, 'data3':88, 'data4':12, 'data5':7},
        {'date':'07/12/2011 16:34', 'data1':39, 'data2':80, 'data3':66, 'data4':1, 'data5':23},
        {'date':'07/12/2011 17:12', 'data1':42, 'data2':240, 'data3':240, 'data4':13, 'data5':33}
    ]
});

var vitaldatachart = Ext.create('Ext.chart.Chart', {

    //width: 800,
    height:210,
    //autoSize: true,
    xPadding:5,
    yPadding:5,
    animate:true,
    showMarkers:true,
    store:store,
    legend:{
        position:'left'
    },

    axes:[
        {
            // Axis for Temperature from 35 to 42 Degrees, displayed on left side of the graph
            type:'Numeric',
            position:'left',
            grid:{
                odd:{stroke:'#555'},
                even:{stroke:'#ccc'}
            },
            minimum:35,
            maximum:42
        },
        {
            // 2nd y-Axis for Bloodpressure and Puls from 0 to 240, displayed on the right side of the graph
            type:'Numeric',
            position:'right',
            minimum:0,
            maximum:240
        },
        {
            // x-Axis displayed at the bottom to show the timeline when the data was measured
            type:'Time', //'Time',
            position:'bottom',
            fields:['date'],
            //title: 'Day',
            dateFormat:'h:i A', //'m/d/y h:i',
            // we have to adjust this according to the events button pushed (show daily/weekly/monthly)
            //constrain: true,
            fromDate:new Date('07/11/2011'),
            toDate:new Date('07/13/2011')
            // turn lables on x-axis
            //label: {
            //    rotate: {
            //        degrees: 315
            //    }
            //}
        }
    ],

    series:[
        {
            type:'line',
            showInLegend:true,
            label:'Temperature',
            title:'Temperature',
            highlight:{
                size:7,
                radius:7
            },
            axis:'left',
            xField:'date',
            yField:'data1'
        },
        {
            type:'line',
            showInLegend:true,
            label:'Bloodpressure',
            title:'Bloodpressure',
            highlight:{
                size:7,
                radius:7
            },
            axis:'right',
            xField:'date',
            yField:'data2'
        },
        {
            type:'line',
            showInLegend:true,
            label:'Pulse',
            title:'Pulse',
            highlight:{
                size:7,
                radius:7
            },
            axis:'right',
            xField:'date',
            yField:'data3'
        }
    ]
});

var fluidbalancechart = Ext.create('Ext.chart.Chart', {

    //width: 800,
    height:210,
    //autoSize: true,
    animate:true,
    xPadding:5,
    yPadding:5,
    showMarkers:true,
    store:store,
    legend:{
        position:'left'
    },
    axes:[
        {
            // Axis for Temperature from 35 to 42 Degrees, displayed on left side of the graph
            type:'Numeric',
            position:'left',
            grid:{
                odd:{stroke:'#555'},
                even:{stroke:'#ccc'}
            },
            minimum:-600,
            maximum:600
        },
        {
            // Axis for Temperature from 35 to 42 Degrees, displayed on left side of the graph
            type:'Numeric',
            position:'right',
            minimum:-600,
            maximum:600
        },
        {
            // x-Axis displayed at the bottom to show the timeline when the data was measured
            type:'Time', //'Time',
            position:'bottom',
            fields:['date'],
            //title: 'Day',
            dateFormat:'h:i A', //'m/d/y h:i',
            // we have to adjust this according to the events button pushed (show daily/weekly/monthly)
            //constrain: true,
            fromDate:new Date('07/11/2011'),
            toDate:new Date('07/13/2011')
            // turn lables on x-axis
            //label: {
            //    rotate: {
            //        degrees: 315
            //    }
            //}
            /* sencha 1 example for grouping
             axes: [{
             type: 'Time',
             position: 'bottom',
             fields: 'date',
             title: 'Day',
             dateFormat: 'M d',
             groupBy: 'year,month,day',
             aggregateOp: 'sum',


             constrain: true,
             fromDate: new Date('1/1/11'),
             toDate: new Date('1/7/11')
             }]
             */

        }
    ],
    maxGutter:[10, 10],
    series:[
        {
            type:'column',
            markerConfig:{},
            showInLegend:true,
            highlight:{
                size:7,
                radius:7
            },
            axis:['left', 'bottom'],
            xField:'date',
            yField:'data5',
            label:{
                display:'insideEnd',
                'text-anchor':'middle',
                field:'data1',
                //renderer: Ext.util.Format.numberRenderer('0'),
                orientation:'horizontal',
                color:'#000'
            },
            title:'Fluid intake/loss'
        },
        {
            type:'column',
            markerConfig:{},
            showInLegend:true,
            highlight:{
                size:7,
                radius:7
            },
            axis:['left', 'top'],
            xField:'date',
            yField:'data4',
            label:{
                display:'insideEnd',
                'text-anchor':'middle',
                field:'data1',
                //renderer: Ext.util.Format.numberRenderer('0'),
                orientation:'horizontal',
                color:'#000'
            },
            title:'Fluid intake/loss'
        },
        {
            type:'line',
            markerConfig:{},
            showInLegend:true,
            label:'Balance',
            title:'Balance',
            highlight:{
                size:7,
                radius:7
            },
            axis:'right',
            xField:'date',
            yField:'data3',
            style:'color: #000'
        }
    ]
});

Ext.define('NeqMobile.view.patient.PatientHistoricData', {
    extend:'Ext.Panel',
    requires:['Ext.chart.Panel', 'Ext.chart.axis.Numeric', 'Ext.chart.axis.Category', 'Ext.chart.series.Line','NeqMobile.view.patient.measurements.HeartbeatLive'],
    xtype:'patienthistoricdata',

// - Restliche Formen / UI Elemente erstellen und Chart als Item einbinden/zuweisen

    config:{
        margin:0,
        padding:5,
        scrollable:{
            direction:'vertical',
            directionLock:true
        },
        items:[
            {xtype:'fieldset',
                items:{xtype:'heartbeatlive'}
            }                                ,
            {
                xtype:'fieldset',
                margin:0,
                padding:5,
                title:'Historical Patient Data',
                items:[
                    {
                        xtype:'panel',
                        margin:'0 0 5 0',
                        //minHeight: 300,
                        padding:5,
                        items:[
                            {
                                xtype:'titlebar',
                                docked:'top',
                                height:40,
                                style:'font-size: 10pt; font-style: normal; vertical-align: middle;',
                                title:'Vital Data - Temperature, Blood pressure, BMI',
                                layout:{
                                    align:'start',
                                    type:'hbox'
                                }
                            },
                            {
                                xtype:'container',
                                id:'vitaldatachart',
                                items:vitaldatachart
                            }
                        ]
                    },
                    {
                        xtype:'panel',
                        //minHeight: 350,
                        padding:5,
                        items:[
                            {
                                xtype:'titlebar',
                                docked:'top',
                                height:40,
                                style:'font-size: 10pt; font-style: normal; vertical-align: middle;',
                                title:'Fluid Balance',
                                layout:{
                                    align:'start',
                                    type:'hbox'
                                }
                            },
                            {
                                xtype:'container',
                                id:'fluidbalancechart',
                                items:fluidbalancechart
                            },
                            {
                                xtype:'container',
                                docked:'bottom',
                                layout:{
                                    type:'hbox'
                                },
                                items:[
                                    {
                                        xtype:'button',
                                        id:'historicaldata_btn_day',
                                        margin:'0 4 0 0',
                                        padding:5,
                                        text:'Day',
                                        style:'font-size: 10pt;',
                                        flex:1
                                    },
                                    {
                                        xtype:'button',
                                        id:'historicaldata_btn_week',
                                        margin:'0 4 0 4',
                                        padding:5,
                                        text:'Week',
                                        style:'font-size: 10pt;',
                                        flex:1
                                    },
                                    {
                                        xtype:'button',
                                        id:'historicaldata_btn_month',
                                        margin:'0 0 0 4',
                                        text:'Month',
                                        style:'font-size: 10pt;',
                                        flex:1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype:'fieldset',
                padding:5,
                title:'Additional Information',
                readOnly:true,
                items:[
                    {
                        xtype:'textareafield',
                        id:'historicaldata_area_addinfo'
                    }
                ]
            }
        ]
    }

});