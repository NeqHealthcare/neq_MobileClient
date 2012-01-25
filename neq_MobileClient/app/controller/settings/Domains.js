/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 23.01.12
 * Time: 02:15
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.controller.settings.Domains', {
    extend:'Ext.app.Controller',
    views:['settings.Domains'],
    requires:[],
    config:{
        refs:{
            viewport:'viewport',
            SettingsDomains:'settingsDomains',
            DomainsList:'settingsDomains container #domainslist'
        }
    },
    init:function () {
        console.log('init of domains controller');
        this.callParent(arguments);
        this.control(
            {
                'settingsDomains container #domainslist':{ 'select':this.onItemSelect, 'disclose':this.onItemDisclose}
            }
        );

        this.control(
            {
                'settingsDomains container #addbutton':{ 'tap':this.onAddDomain}
            }
        )

        this.control(
            {
                'settingsDomains formpanel #savebutton':{'tap':this.onSaveClick}
            }
        )
    },
    launch:function () {
        console.log('launch of domains controller');
        this.callParent(arguments);
    },
    test:function () {
        console.log('test function called!!!')
    },
    onAddDomain:function () {
        this.getDomainsList().deselect(this.getDomainsList().getSelection());
        this.getSettingsDomains().down('formpanel').reset();
    },
    onItemSelect:function (list, record, options) {
        console.log('loading domain data into form');
        this.getSettingsDomains().down('formpanel').setRecord(record);
        console.log(record.getId());
    },
    onItemDisclose:function (view, record, target, index, e, eOpts) {
        var callback = function (buttonid) {
            if (buttonid == 'yes') {
                this.DeleteItem(record);
            }
            console.log('finished deleting');
        }
        console.log('showing confirm box...');
        Ext.Msg.confirm('Delete ' + record.get('name'), 'Really wanna delete the connection: ' + record.get('name') + ' ?', callback, this);
    },
    DeleteItem:function (record) {
        console.log('removing record: ' + record.get('name'));
       // console.log('deletion does not work at the moment, due a framework bug');
       var mystore = this.getDomainsList().getStore();
        mystore.remove(record);
        mystore.sync();
    },
    onSaveClick:function () {
        var formdata = this.getSettingsDomains().down('formpanel').getValues();
        if (this.getDomainsList().hasSelection()) {
            console.log('trying to update the selected record');
            var myrecord = this.getDomainsList().getSelection()[0];
            myrecord.set(formdata);
        }
        else {
            var newdomain = new NeqMobile.model.Domain(formdata);
            this.getDomainsList().getStore().add(newdomain);
        }
    }
});