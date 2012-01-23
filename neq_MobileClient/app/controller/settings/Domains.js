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
    refs:[
        {   ref:'viewport',
            selector:'viewport',
            xtype:'viewport',
            autoCreate:true},
        { ref:'SettingsDomains',
            selector:'settingsDomains'
        },
        { ref:'DomainsList',
            selector:'settingsDomains container #domainslist'}
    ],

    init:function () {
        this.callParent(arguments);
        console.log('Init Domain Settings controller');

        this.control(
            {
                'settingsDomains container #domainslist':{ 'select':this.onItemSelect}
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
        this.callParent(arguments);
    },
    onAddDomain:function () {
        this.getDomainsList().deselect(this.getDomainsList().getSelection());
        this.getSettingsDomains().down('formpanel').reset();
    },
    onItemSelect:function (list, record, options) {
        console.log('loading domain data into form');
        this.getSettingsDomains().down('formpanel').setRecord(record);
    },
    onSaveClick:function () {
        var newdomain = new NeqMobile.model.Domain(this.getSettingsDomains().down('formpanel').getValues());
        if (this.getDomainsList().hasSelection()) {
            console.log('trying to update the selected record');
            this.getDomainsList().getStore().remove(this.getDomainsList().getSelection()[0]);
        }
        this.getDomainsList().getStore().add(newdomain);
        this.getDomainsList().getStore().sync();
    }
});