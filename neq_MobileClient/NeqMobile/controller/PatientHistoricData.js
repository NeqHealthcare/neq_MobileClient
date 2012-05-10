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
        requires:['NeqMobile.view.patient.PatientHistoricData', 'org.cometd', 'Ext.ux.CometD', 'Ext.DateExtras'],

        config:{
            models:['VitalData'],
            store:['VitalData'],
            refs:{

                workspace:'workspace',
                vitalchartcontainer:'vitaldatachart',
                fluidchartcontainer:'fluidbalancechart',
//              historicaldata_btn_day: 'patienthistoricdata [name=historicaldata_btn_day]'
//            historicaldata_btn_week:Ext.ComponentManager.get("historicaldata_btn_week"),
                patienthistoricdata:'patienthistoricdata'
            },
            control:{
                '[name=historicaldata_btn_day]':{
                    tap:'onShowDailyDataTap'
                },
                '[name=historicaldata_btn_week]':{
                    tap:'onShowWeeklyDataTap'
                },
                '[name=historicaldata_btn_month]':{
                    tap:'onShowMonthlyDataTap'
                },
                'workspace [name=startheartbeatlive]':{
                    tap:'startHeartbeatLive'
                },
                patienthistoricdata:{
                    show:'fetchData'

                }

            }
        },

        /* - Functions ---------------------------------------------------------------------------------- */

        fetchData:function () {

        },

        shityou:function () {
            alert('something');
        },

        init:function () {
            var me = this;
            //  Ext.Viewport.on('login', this.startHeartbeatLive, me);
//        Ext.Viewport.on('logout', this.stoppolling, me);
        },
        startHeartbeatLive:function () {

            var me = this;
            console.log('starting live heartbeat');

            var afunc = function () {


                var smoothie = new SmoothieChart();
                smoothie.streamTo(document.getElementById("mycanvas"), 10);
                var line1 = new TimeSeries(
                    { grid:{strokeStyle:'rgb(200, 200, 200)', fillStyle:'rgb(255, 255, 255)'} }
                );
                smoothie.addTimeSeries(line1,
                    { strokeStyle:'rgb(255, 0, 255)', fillStyle:'rgba(255, 0, 255, 0.3)', lineWidth:2 });

                var cometd = Ext.cometd;

                console.log('trying to send a message: "this is a NeqMobile test message"');
                cometd.publish("/cometd/pulse/1", { msg:'this is a NeqMobile test message' });

                var subscription2 = cometd.subscribe('/cometd/pulse/1', function (message) {
                    //console.log('RECEIVED THE FOLLOWING COMETD DATA:')
                    //console.log(message);

                    var values = Ext.decode(message.data);

                    line1.append(new Date().getTime(), values.y);

                });
            }

            Ext.defer(afunc, 15000);

        },

        onShowDailyDataTap:function () {
            var date = new Date();
            var vitaldatastore = Ext.data.StoreManager.lookup('vitaldata');

            //vitaldatastore.getProxy().setExtraParam('end_Date', Ext.Date.format(date, 'd.m.Y'));
            date = Ext.Date.add(date, Ext.Date.DAY, -1);
            //vitaldatastore.getProxy().setExtraParam('start_Date', Ext.Date.format(date, 'd.m.Y') );
            //vitaldatastore.filterBy(this.dateFilter);
            vitaldatastore.clearFilter(true);
            vitaldatastore.filter(Ext.create(
                'Ext.util.Filter',
                {filterFn:function (item) {
                    var store = Ext.data.StoreManager.lookup('vitaldata');
                    store.config.startDate = Ext.Date.add(new Date(), Ext.Date.DAY, -3);
                    return (Ext.Date.between(item.get('date'), store.config.startDate, store.config.endDate))
                }

                }));


            //vitaldatastore.sync();
        },
        dateFilter:new Ext.util.Filter({
            filterFn:function (item) {
                return (Ext.Date.between(item.date, vitaldatastore.startDate, vitaldatastore.endDate))

            }
        }),
        // zeige Tagesausschnitt der aktuellsten Daten (heute();)
        // springt bei klick auf die aktuellsten Daten - anschließend kann man zurück scrollen um ältere Daten zu sehen

        onShowWeeklyDataTap:function () {
            var date = new Date();
            var vitaldatastore = Ext.data.StoreManager.lookup('vitaldata');

            //vitaldatastore.getProxy().setExtraParam('end_Date', Ext.Date.format(date, 'd.m.Y'));
            date = Ext.Date.add(date, Ext.Date.DAY, -7);
            //vitaldatastore.getProxy().setExtraParam('start_Date', Ext.Date.format(date, 'd.m.Y') );
            //vitaldatastore.filterBy(this.dateFilter);
            vitaldatastore.clearFilter(true);
            vitaldatastore.filter(Ext.create(
                'Ext.util.Filter',
                {filterFn:function (item) {
                    var store = Ext.data.StoreManager.lookup('vitaldata');
                    store.config.startDate = Ext.Date.add(new Date(), Ext.Date.DAY, -8);
                    return (Ext.Date.between(item.get('date'), store.config.startDate, store.config.endDate))
                }
                }));

        },
        // zeige Wochenausschnitt der aktuellsten Daten (heute();)
        // springt bei klick auf die aktuellsten Daten - anschließend kann man zurück scrollen um ältere Daten zu sehen

        onShowMonthlyDataTap:function () {
            var date = new Date();
            var vitaldatastore = Ext.data.StoreManager.lookup('vitaldata');

            //vitaldatastore.getProxy().setExtraParam('end_Date', Ext.Date.format(date, 'd.m.Y'));
            date = Ext.Date.add(date, Ext.Date.DAY, -30);
            //vitaldatastore.getProxy().setExtraParam('start_Date', Ext.Date.format(date, 'd.m.Y') );
            //vitaldatastore.filterBy(this.dateFilter);
            vitaldatastore.clearFilter(true);
            vitaldatastore.filter(Ext.create(
                'Ext.util.Filter',
                {filterFn:function (item) {
                    var store = Ext.data.StoreManager.lookup('vitaldata');
                    store.config.startDate = Ext.Date.add(new Date(), Ext.Date.DAY, -30);
                    return (Ext.Date.between(item.get('date'), store.config.startDate, store.config.endDate))
                }
                }
            ));


        }
    }
);