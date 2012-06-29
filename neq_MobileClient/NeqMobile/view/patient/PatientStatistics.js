Ext.define('NeqMobile.view.patient.PatientStatistics', {
    extend:'Ext.Container',

    requires:['Ext.chart.Panel',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Line',
        'NeqMobile.view.patient.chart.PatientCharts'
    ],

//    loadPatientStatistics:function (chartdata) {
//        this.down('#vitaldatachart').setStore(chartdata);
//        this.down('#fluidbalancechart').setStore(chartdata);
//    },

    xtype:'patientstatistics',

    config:{
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
                layout:{
                    type:'hbox',
                    align:'middle'
                },

                items:[
                    {
                        html:'<canvas id="mycanvas" width="650" height="150"></canvas>'

                    },
                    {
                        xtype:'panel',
                        title:'Heartrate',
                        width:150,

                        height:50,
                        margin:0,
                        padding:5,
                        border:5,
                        id:'heartratepanel',
                        data:{'rate':Math.floor(60 + 20 * Math.random())},
                        tpl:'Heart rate: <span>{rate}</span> BPM'
                    }
                ]
            }
        ]
    }

});