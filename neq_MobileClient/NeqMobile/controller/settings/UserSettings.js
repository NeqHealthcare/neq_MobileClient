
/**
 * Created by Jan Gansen
 */
Ext.define('NeqMobile.controller.settings.UserSettings', {
    extend:'Ext.app.Controller',

    config:{
        refs:{
            viewport:'viewport',
            SettingsDomains:'settingsDomains',
            DomainsList:'settingsDomains container #domainslist'
        }
    },
    onItemSelect:function (list, record, options) {

      //  this.getSettingsDomains().down('formpanel').setRecord(record);
    },
});