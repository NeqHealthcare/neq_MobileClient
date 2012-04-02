/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 14.01.12
 * Time: 02:26
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.controller.Session', {
    extend:'Ext.app.Controller',
    requires:['NeqMobile.manager.Session', 'NeqMobile.store.Domains', 'NeqMobile.store.Patients', 'NeqMobile.model.Domain',
        'NeqMobile.view.menu.Settings', 'NeqMobile.view.settings.Domains'],

    scope:this,
    config:{
        refs:{
            login:'Login',
            Viewport:'Viewport',
            Workspace:'workspace',
            MenuSettings:'menuSettings',
            SettingsDomains:'settingsDomains'
        },
        control:{
            'Login #submitButton':{tap:'onLoginTry'},
            'Login #settingsbutton':{tap:'onSettingsClick'},
            'workspace #doctorimage':{tap:'onShowLogoutMenu'},
            'menuSettings #logoutbutton':{tap:'onLogoutClick'},
            'settingsDomains toolbar #backbutton':{tap:'onBackFromDomainSettings'}
        }
    },
    onBackFromDomainSettings:function () {
        this.getViewport().setActiveItem(this.getLogin());
        console.log('itemcount: ' + this.getViewport().getItems().length);
    },
    onSettingsClick:function () {
        console.log('switching card');
        var settingsdomains;
        if (this.getSettingsDomains()) {

            settingsdomains = this.getSettingsDomains();
        }
        else {
            settingsdomains = Ext.create('NeqMobile.view.settings.Domains');
        }
        this.getViewport().setActiveItem(settingsdomains);
    },

    onShowLogoutMenu:function (button) {

        var settingsmenu = NeqMobile.view.menu.Settings;
        settingsmenu.showBy(button);
    },
    onLoginTry:function () {
        console.log('trying to login');
        // console.dir(this.getLogin().down('list').getSelection().getAt(0));
        var loginForm = this.getLogin().down('formpanel');
        var myselectfield = this.getLogin().down('selectfield');

        if
        //this.getLogin().down('list').getSelection().length != 0)
            (myselectfield.getRecord() != undefined) {
            Ext.Viewport.setMasked({ xtype:'loadmask', message:'trying to login...' });
            NeqMobile.manager.Session.login(this.getLogin().down('selectfield').getRecord(), loginForm.getFields('user').getValue(),
                loginForm.getFields('password').getValue(), this.onLoginSuccess, this.onLoginFailure, this);
        }
        else {
            console.log('no item selected');
            //  Ext.Viewport.setMasked(true);
            Ext.Msg.alert('Create a Connection', 'Create and Choose a connection by clicking on the Settings button in the upper right corner.', Ext.emptyFn);
            //  Ext.Viewport.setMasked(false);
        }
    },
    onLoginFailure:function () {
        Ext.Viewport.setMasked(false);
    },
    onLoginSuccess:function () {
        Ext.Viewport.setMasked(false);
        console.log('switching card');
        this.getViewport().remove(this.getWorkspace(), true);
        this.getViewport().setActiveItem(Ext.create('NeqMobile.view.Workspace'));
        this.fireEvent('loginSuccess');
        this.getLogin().down('formpanel').getFields('password').reset();
        console.log('save sessionID...');

        // Creating the required Patient Store and its Proxy to load patient data from MAIS
        Ext.data.StoreManager.unregister(Ext.data.StoreManager.lookup('myPatientsStore'));

        var store = new NeqMobile.store.Patients(
            {
                storeId:'myPatientsStore'
            }
        );
        store.load();
        this.getWorkspace().down('patientlist').down('list').setStore(store);
    },
    onLogoutClick:function () {
        console.log('trying to logout');
        NeqMobile.manager.Session.logout();
        this.getViewport().remove(this.getWorkspace(), true);
        this.getMenuSettings().setHidden(true);
        //    this.getMenuSettings().destroy();
    }
})
;