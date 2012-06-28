/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 23.01.12
 * Time: 02:15
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.controller.settings.Domains', {
    extend:'Ext.app.Controller',

    config:{
        refs:{
            viewport:'viewport',
            SettingsDomains:'settingsDomains',
            DomainsList:'settingsDomains container #domainslist',
        }
    },
    init:function () {

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
        Ext.Msg.confirm('Delete ' + record.get('name'), 'Are you sure to delete ' + record.get('name') + ' ?', callback, this);
    },
    DeleteItem:function (record) {
        console.log('removing record: ' + record.get('name'));
       // console.log('deletion does not work at the moment, due a framework bug');
       var mystore = this.getDomainsList().getStore();
        mystore.remove(record);
        mystore.sync();
    },

    onSaveClick: function(){
        //check whether connection name, IP/domain address or port empty
        //backend ID empty

        var connectionname = this.getSettingsDomains().down('formpanel').down('fieldset').down('#connectionname').getValue();
        var backendname = this.getSettingsDomains().down('formpanel').down('fieldset').down('#backendSid').getValue();
        var domainaddress = this.getSettingsDomains().down('formpanel').down('fieldset').down('#domainaddress').getValue();
        console.log(connectionname);
       if(connectionname == ''){
            Ext.Msg.alert('Connection Name','Please insert a name'+'<br>'+ 'for the connection setting', Ext.emptyFn);
        }
        else {
               if(domainaddress === ''){
                        Ext.Msg.alert('Domain Address','Please insert a domain name'+'<br>'+ 'for the connection setting', Ext.emptyFn);
                    }
                else {
                   console.log('checkDuplicate'+this.checkDuplicate(connectionname));
                         if(this.checkDuplicate(connectionname)){
                             Ext.Msg.alert('Connection Name Not Available','The Connection Name is alreay assigned'+'<br>'+ 'please insert a different name', Ext.emptyFn);
                          }
                         else{
                             var backendButton = function (buttonid){
                                if(buttonid == 'yes'){
                                  console.log('yes clicked');
                                   this.saveSetting();
                               }
                            }
                            if(backendname ===''){
                            Ext.Msg.confirm("Backend SID", "Backend SID is missing. Are you sure to save the connection setting?",backendButton, this);
                            }
                          else{
                            this.saveSetting();
                         }
                     }
                 }
            }
        },

    checkDuplicate:function(connectionname){
        var duplicate = this.getDomainsList().getStore();
        duplicate = this.getDomainsList().getStore().find('name', connectionname);
        if (duplicate>=0)
            return true;
        else
            return false;
    },

    saveSetting:function () {
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