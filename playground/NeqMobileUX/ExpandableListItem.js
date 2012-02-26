/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 25.02.12
 * Time: 17:06
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.ux.expandableList.ExpandableListItem', {
    extend:'Ext.dataview.component.DataItem',
    xtype:'expandablelistitem',

    config:{
        layout:'vbox',
        expanded:false,
        overviewItem:undefined,
        items:[]
    },
// overwriting updateRecord() to bypass the limited dataMap functionality
    updateRecord:function (newRecord) {
        if (!newRecord) {
            return;
        }
        var me = this,
            dataview = me.config.dataview,
            data = dataview.prepareData(newRecord.getData(true), dataview.getStore().indexOf(newRecord), newRecord),
            items = me.getItems(),
            item = items.first(),
            dataMap = me.getDataMap(),
            componentName, component, setterMap, setterName;

        if (!item) {
            return;
        }

        //[C.T.] here i removed the usage of the dataMap and instead inserted the code line below, which simply invokes the setRecord method of the
        //OverviewItem. This causes all Fields (which inherit from Ext.field.Field) to be updated with the corresponding values from the Model Record.
        //However, it is required, that the OverviewItem is an Ext.form.Panel for this to work.
        me.getOverviewItem().setRecord(newRecord);

        /**
         * @event updatedata
         * Fires whenever the data of the DataItem is updated
         * @param {Ext.dataview.component.DataItem} this The DataItem instance
         * @param {Object} newData The new data
         */
        me.fireEvent('updatedata', me, data);

        // Bypassing setter because sometimes we pass the same object (different properties)
        item.updateData(data);
    },

    applyOverviewItem:function (config) {
        xtype = this.config.dataview.getOverviewXtype();
        console.log( this.config.dataview.getOverviewXtype());
        return Ext.factory({xtype:xtype});
    },
    updateOverviewItem:function (newOverviewItem, oldOverviewItem) {
        Ext.Logger.log('updateOverviewItem is called');
        if (oldOverviewItem) {
            this.remove(oldOverviewItem);
        }
        if (newOverviewItem) {
            this.insertFirst(newOverviewItem);
        }
    }
});