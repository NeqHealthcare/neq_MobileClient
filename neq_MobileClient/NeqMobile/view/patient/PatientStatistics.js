/**
 * @author chopsuey
 */

var vitaldatachart = Ext.create('Ext.chart.Chart', {

    height:240,
    width:'100%',
    xPadding:5,
    yPadding:5,
    animate:true,
    showMarkers:true,

    xtype:'vitaldatachart',

    requires:'NeqMobile.store.VitalData',

    legend:{
        position:'bottom'
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
            type:'Time',
            position:'bottom',
            fields:['date'],
            dateFormat:'d-m-Y'

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
            yField:'temprature'
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
            yField:'blood_pressure'
        },
        {
            type:'line',
            showInLegend:true,
            label:'BMI',
            title:'BMI',

            highlight:{
                size:7,
                radius:7
            },

            axis:'right',
            xField:'date',
            yField:'bmi'
        }
    ]
});

var fluidbalancechart = Ext.create('Ext.chart.Chart', {

    height:240,
    width:'100%',
    animate:true,
    xPadding:5,
    yPadding:5,
    showMarkers:true,

    xtype:'fluidbalancechart',

    requires:'NeqMobile.store.VitalData',

    legend:{
        position:'bottom'
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
            type:'Time',
            position:'bottom',
            fields:['date'],
            dateFormat:'d-m-Y'
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
            yField:'fluid_balace',

            //label:{
            //    display:        'insideEnd',
            //    'text-anchor':  'middle',
            //    field:          'fluid_balace',
            //    orientation:    'horizontal',
            //    color:          '#000'
            //},

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
            yField:'fluid_balace',
            style:'color: #000'
        }
    ]
});

Ext.define('NeqMobile.view.patient.PatientStatistics', {
    extend:'Ext.Container',

    requires:['Ext.chart.Panel',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Line'
    ],

    loadPatientStatistics:function (chartdata) {
        vitaldatachart.setStore(chartdata);
        fluidbalancechart.setStore(chartdata);
    },

    xtype:'patientstatistics',

// - Restliche Formen / UI Elemente erstellen und Chart als Item einbinden/zuweisen                                 ,

    config:
        //   heartbeatchart:     undefined,
        styleHtmlContent:true,
        layout:'vbox',

        scrollable:{
            direction:'vertical',
            directionLock:true
        },

        items:[
            {
                xtype:'fieldset',
                title:'Live Heartbeat',
                width:'100%',
                margin:0,
                padding:5,

                items:[
                    {
                        html:'<canvas id="mycanvas" width="650" height="150"></canvas>'
                    }
                ]
            },
            {
                xtype:'fieldset',
                margin:0,
                padding:5,
                title:'Historical Patient Data',

                items:[
                    {
                        xtype:'panel',
                        margin:'0 0 5 0',
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
                                        name:'historicaldata_btn_day',
                                        margin:'0 4 0 0',
                                        padding:5,
                                        text:'Day',
                                        style:'font-size: 10pt;',
                                        flex:1
                                    },
                                    {
                                        xtype:'button',
                                        name:'historicaldata_btn_week',
                                        margin:'0 4 0 4',
                                        padding:5,
                                        text:'Week',
                                        style:'font-size: 10pt;',
                                        flex:1
                                    },
                                    {
                                        xtype:'button',
                                        name:'historicaldata_btn_month',
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
            }
            /*,
             {
             xtype:      'fieldset',
             padding:    5,
             title:      'Additional Information',
             readOnly:   true,

             items:[
             {
             xtype:  'textareafield',
             id:     'historicaldata_area_addinfo'
             }
             ]
             }*/
        ]
    }

})
;