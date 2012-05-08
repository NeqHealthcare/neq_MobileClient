/**
 * Created by JetBrains WebStorm.
 * User: chopsuey
 * Date: 29.04.12
 * Time: 12:24
 * To change this template use File | Settings | File Templates.
 */

/* - Basic Definition ---------------------------------------------------------------------------------- */

Ext.define('NeqMobile.controller.PatientHistoricData', {
    extend:'Ext.app.Controller',
    requires:['NeqMobile.view.patient.PatientHistoricData', 'org.cometd', 'Ext.ux.CometD'],

    config:{
        models:['VitalData'],
        store:['VitalData'],
        refs:{

            workspace:'workspace'
//            vitalchartcontainer:'#vitaldatachart',
//            fluidchartcontainer:'#fluidbalancechart',
//            historicaldata_btn_day:Ext.get("historicaldata_btn_day"),
//            historicaldata_btn_week:Ext.ComponentManager.get("historicaldata_btn_week"),
//            patienthistoricdata:'patienthistoricdata'
        },
        control:{
//            historicaldata_btn_day:{
//                tap:'onShowDailyDataTap'
//            },
//            historicaldata_btn_week:{
//                tap:'onShowWeeklyDataTap'
//            },
//            'workspace patienthistoricdata #historicaldata_btn_month':{
//                tap:'onShowMonthlyDataTap'
//            },
            'workspace #startheartbeatlive':{
                tap:'shityou'
            }
        }
    },

    /* - Functions ---------------------------------------------------------------------------------- */

    shityou:function () {
        alert('something');
    },

    init:function () {
        var me = this;
        Ext.Viewport.on('login', this.startHeartbeatLive, me);
//        Ext.Viewport.on('logout', this.stoppolling, me);
    },
    startHeartbeatLive:function () {

        var me = this;
        console.log('starting live heartbeat');

        var afunc = function () {


            var smoothie = new SmoothieChart();
            smoothie.streamTo(document.getElementById("mycanvas"),10);
            var line1 = new TimeSeries(
                { grid:{strokeStyle:'rgb(200, 200, 200)', fillStyle:'rgb(255, 255, 255)'} }
            );
            smoothie.addTimeSeries(line1,
                { strokeStyle:'rgb(255, 0, 255)', fillStyle:'rgba(255, 0, 255, 0.3)', lineWidth:2 });

            var cometd = Ext.cometd;

            console.log('trying to send a message: "this is a NeqMobile test message"');
            cometd.publish("/cometd/pulse/1", { msg:'this is a NeqMobile test message' });

            var subscription2 = cometd.subscribe('/cometd/pulse/1', function (message) {
                console.log('RECEIVED THE FOLLOWING COMETD DATA:')
                console.log(message);

                var values = Ext.decode(message.data);

                line1.append(new Date().getTime(), values.y);

            });
        }

        Ext.defer(afunc,15000);

    },

    onShowDailyDataTap:function () {
        alert('test');
    },
    // zeige Tagesausschnitt der aktuellsten Daten (heute();)
    // springt bei klick auf die aktuellsten Daten - anschließend kann man zurück scrollen um ältere Daten zu sehen

    onShowWeeklyDataTap:function () {
    },
    // zeige Wochenausschnitt der aktuellsten Daten (heute();)
    // springt bei klick auf die aktuellsten Daten - anschließend kann man zurück scrollen um ältere Daten zu sehen

    onShowMonthlyDataTap:function () {
    }
    // zeige Monatsausschnitt der aktuellsten Daten (heute();)
    // springt bei klick auf die aktuellsten Daten - anschließend kann man zurück scrollen um ältere Daten zu sehen

    /*
     createchart:function () {
     var testchart = this.getDoctordashboard().down('testchart');
     testchart.setHeight(750);
     //        testchart.setWidth(500);
     var mycircle = new Ext.draw.Component({
     items:[
     {
     type:'circle',
     fill:'#ffc',
     radius:100,
     x:100,
     y:100
     }
     ]
     });

     testchart.setItems(mycircle);
     }
     */
});