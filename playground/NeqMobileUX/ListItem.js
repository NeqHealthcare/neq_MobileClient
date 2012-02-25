/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 25.02.12
 * Time: 17:06
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.ux.expandableList.ListItem', {
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
        var me = this;
        Ext.Logger.log('applynamebutton is called');
        xtype = me.config.dataview.getOverviewXtype();
        console.log( me.config.dataview.getOverviewXtype());
        console.log(config);
        return Ext.factory({xtype:xtype});
    },
    updateOverviewItem:function (newNameButton, oldNameButton) {
        Ext.Logger.log('updateNameButton is called');
        if (oldNameButton) {
            this.remove(oldNameButton);
        }

        if (newNameButton) {
            // add an event listeners for the `tap` event onto the new button, and tell it to call the onNameButtonTap method
            // when it happens
            newNameButton.on('tap', this.onNameButtonTap, this);

            this.add(newNameButton);
        }
    }
});