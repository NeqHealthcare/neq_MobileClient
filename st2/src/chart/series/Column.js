/**
 * @class Ext.chart.series.Column
 * @extends Ext.chart.series.Bar
 * 
 * Creates a Column Chart. Much of the methods are inherited from Bar. A Column Chart is a useful visualization technique to display quantitative information for different 
 * categories that can show some progression (or regression) in the data set.
 * As with all other series, the Column Series must be appended in the *series* Chart array configuration. See the Chart 
 * documentation for more information. A typical configuration object for the column series could be:
 *
 * {@img Ext.chart.series.Column/Ext.chart.series.Column.png Ext.chart.series.Column chart series}
 *
 * ## Example
 * 
 *     var store = new Ext.data.JsonStore({
 *         fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],
 *         data: [
 *             {'name':'metric one', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},
 *             {'name':'metric two', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},
 *             {'name':'metric three', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},
 *             {'name':'metric four', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},
 *             {'name':'metric five', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}
 *         ]
 *     });
 *     
 *     new Ext.chart.Chart({
 *         renderTo: Ext.getBody(),
 *         width: 500,
 *         height: 300,
 *         animate: true,
 *         store: store,
 *         axes: [{
 *             type: 'Numeric',
 *             position: 'bottom',
 *             fields: ['data1'],
 *             label: {
 *                 renderer: Ext.util.Format.numberRenderer('0,0')
 *             },
 *             title: 'Sample Values',
 *             grid: true,
 *             minimum: 0
 *         }, {
 *             type: 'Category',
 *             position: 'left',
 *             fields: ['name'],
 *             title: 'Sample Metrics'
 *         }],
 *             axes: [{
 *                 type: 'Numeric',
 *                 position: 'left',
 *                 fields: ['data1'],
 *                 label: {
 *                     renderer: Ext.util.Format.numberRenderer('0,0')
 *                 },
 *                 title: 'Sample Values',
 *                 grid: true,
 *                 minimum: 0
 *             }, {
 *                 type: 'Category',
 *                 position: 'bottom',
 *                 fields: ['name'],
 *                 title: 'Sample Metrics'
 *             }],
 *             series: [{
 *                 type: 'column',
 *                 axis: 'left',
 *                 highlight: true,
 *                 tips: {
 *                   trackMouse: true,
 *                   width: 140,
 *                   height: 28,
 *                   renderer: function(storeItem, item) {
 *                     this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data1') + ' $');
 *                   }
 *                 },
 *                 label: {
 *                   display: 'insideEnd',
 *                   'text-anchor': 'middle',
 *                     field: 'data1',
 *                     renderer: Ext.util.Format.numberRenderer('0'),
 *                     orientation: 'vertical',
 *                     color: '#333'
 *                 },
 *                 xField: 'name',
 *                 yField: 'data1'
 *             }]
 *     });
 *  
 * In this configuration we set `column` as the series type, bind the values of the bars to the bottom axis, set `highlight` to true so that bars are smoothly highlighted
 * when hovered and bind the `xField` or category field to the data store `name` property and the `yField` as the data1 property of a store element. 
 */
Ext.define('Ext.chart.series.Column', { 
 
    extend: 'Ext.chart.series.Bar',

    type: 'column',
    /**
     * @private
     */
    column: true,
    
    config: {

        axis: 'left',

        /**
         * @cfg {Number} xPadding
         * Padding between the left/right axes and the bars
         */
        xPadding: 10,

        /**
         * @cfg {Number} yPadding
         * Padding between the top/bottom axes and the bars
         */
        yPadding: 0
    }
});
