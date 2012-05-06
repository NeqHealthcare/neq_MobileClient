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
    requires: ['NeqMobile.view.patient.PatientHistoricData'],

    config:{
        models:['VitalData'],
        store:['VitalData'],
        refs:{
            vitalchartcontainer: '#vitaldatachart',
            fluidchartcontainer: '#fluidbalancechart',
            historicaldata_btn_day:  Ext.get("historicaldata_btn_day"),
            historicaldata_btn_week:  Ext.ComponentManager.get("historicaldata_btn_week"),
            patienthistoricdata: 'patienthistoricdata'
        },
        control:{
            historicaldata_btn_day:{
                tap:'onShowDailyDataTap'
            },
            historicaldata_btn_week:{
                tap:'onShowWeeklyDataTap'
            },
            'workspace patienthistoricdata #historicaldata_btn_month':{
                tap:'onShowMonthlyDataTap'
            }
        }
    },

/* - Functions ---------------------------------------------------------------------------------- */

    onShowDailyDataTap:function (){
        alert('test') ;
    },
    // zeige Tagesausschnitt der aktuellsten Daten (heute();)
    // springt bei klick auf die aktuellsten Daten - anschließend kann man zurück scrollen um ältere Daten zu sehen

    onShowWeeklyDataTap:function (){},
    // zeige Wochenausschnitt der aktuellsten Daten (heute();)
    // springt bei klick auf die aktuellsten Daten - anschließend kann man zurück scrollen um ältere Daten zu sehen

    onShowMonthlyDataTap:function (){}
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