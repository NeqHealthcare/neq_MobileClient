/**
 * Created by JetBrains WebStorm.
 * User: chopsuey
 * Date: 29.04.12
 * Time: 12:24
 * To change this template use File | Settings | File Templates.
 */

/* - Basic Definition ---------------------------------------------------------------------------------- */

Ext.define('NeqMobile.controller.PatientStatistics', {
        extend:'Ext.app.Controller',
        requires:['NeqMobile.view.patient.PatientStatistics', 'org.cometd', 'Ext.ux.CometD', 'Ext.DateExtras'],

        config:{
            models:['VitalData'],
            store:['VitalData'],

            refs:{
                workspace:'workspace',
                vitalchartcontainer:'vitaldatachart',
                fluidchartcontainer:'fluidbalancechart',
                patientstatistics:'patientstatistics'},

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
                'patientstatistics':{initialize:'addpainteraselisteners'}
            }

        },

        init:function () {
            var me = this;
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
                    store.config.startDate = Ext.Date.add(new Date(), Ext.Date.DAY, -14);
                    return (Ext.Date.between(item.get('date'), store.config.startDate, store.config.endDate))
                }
                }));


        },

        addpainteraselisteners:function(cmp,eOpts){
            var me = this;
           cmp.on('painted',me.startHeartbeatLive,me);
           cmp.on('erased',me.stopHeartbeatLive,me);
        }
        ,

        smoothiechart:undefined,
        smoothieseries:undefined,
        subscription:undefined,

        startHeartbeatLive:function () {
            console.log('starting heartbeat');
            var me = this;

            me.smoothiechart = new SmoothieChart({
                grid:{ strokeStyle:'rgb(0,90, 0)', fillStyle:'rgb(0, 40, 0)',
                    lineWidth:1, millisPerLine:250, verticalSections:6
                },
                labels:{ fillStyle:'rgb(0, 60, 0)' }
            });

            me.smoothiechart.streamTo(document.getElementById("mycanvas"), 10);

            if (me.smoothieseries) {
                me.smoothiechart.removeTimeSeries(me.smoothieseries);
            }

            me.smoothieseries = new TimeSeries(
                { grid:{strokeStyle:'rgb(200, 200, 200)', fillStyle:'rgb(255, 255, 255)'} }
            );

            me.smoothiechart.addTimeSeries(me.smoothieseries,
                { strokeStyle:'rgb(0, 255, 0)', lineWidth:2 });

            var cometd = Ext.cometd;
            var channelurl = "/cometd/pulse/1"; // + NeqMobile.manager.Session.getCurrentPatient();
            me.subscription = cometd.subscribe(channelurl, function (message) {
                var values = Ext.decode(message.data);
                //  console.log(values);
                me.smoothieseries.append(values.timestamp, values.y);
            });
        },
        stopHeartbeatLive:function () {
            var me = this;
            var cometd = Ext.cometd;
            if (me.subscription) {
                cometd.unsubscribe(me.subscription);
                me.subscription = null;
            }
            if (me.smoothiechart) {
                me.smoothiechart.stop();
            }
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