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
    views:['Viewport', 'Workspace'],
    models:['Session', 'Domain'],
    stores:['Domains'],
    scope:this,
    config:{
        refs:{
            login:'Login',
            Viewport:'Viewport',
            Workspace:'Workspace',
            MenuSettings:'menuSettings',
            SettingsDomains:'settingsDomains'
        }},
    init:function () {
        console.log('Init Session controller');
        this.control(
            {
                'Login #submitButton':{ 'tap':this.onLoginTry}
            }
        );

        this.control(
            {
                'Login #settingsbutton':{ 'tap':this.onSettingsClick}
            }
        );
        this.control(
            {
                'Workspace #doctorimage':{'tap':this.onShowLogoutMenu}
            }
        )
        this.control(
            {
                'menuSettings #logoutbutton':{'tap':this.onLogoutClick}
            }
        )
        this.control(
            {
                'settingsDomains toolbar #backbutton':{'tap':this.onBackFromDomainSettings}
            }
        )

//        console.log('setting value of store');
//        var mystore = Ext.create('NeqMobile.store.Domains', {storeId:'myDomainStore'});
//        var domainlist = this.getLogin().down('selectfield');
//        mystore.load();
//        domainlist.setStore(mystore);
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
        console.log('showing Domain Settings...');
        var mycontroller = Ext.create('NeqMobile.controller.settings.Domains');
        mycontroller.launch();
    },


    onShowLogoutMenu:function (button) {
        console.log('showing logout menu...');
        var settingsmenu = NeqMobile.view.menu.Settings;
        settingsmenu.showBy(button);
    },
    onLoginTry:function () {
        console.log('trying to login');
        console.dir(this.getLogin().down('list').getSelected().getAt(0));
        var loginForm = this.getLogin().down('formpanel');
        if (this.getLogin().down('list').getSelected().getAt(0)) {
            NeqMobile.manager.Session.login(this.getLogin().down('list').getSelected().getAt(0), loginForm.getFields('user').getValue(),
                loginForm.getFields('password').getValue(), this.onLoginSuccess, this.onLoginFailure, this);
        }
        else {
            Ext.Msg.alert('Choose a Connection', 'Choose a connection.', Ext.emptyFn);
        }
    },
    onLoginSuccess:function () {
        console.log('switching card');
        this.getViewport().remove(this.getWorkspace(), true);
        this.getViewport().setActiveItem(Ext.create('NeqMobile.view.Workspace'));
        this.fireEvent('loginSuccess');
        this.getLogin().down('formpanel').getFields('password').reset();
        console.log('save sessionID...');

        Ext.data.StoreManager.unregister(Ext.data.StoreManager.lookup('myPatientsStore'));
        var storeProxy = {type:'ajax',
            url:NeqMobile.manager.Session.getSession().get('domain').getCoreURL() + '/patients/all_for_user',
            extraParams:{session:NeqMobile.manager.Session.getSessionId()
            },
            reader:{
                type:'json',
                root:'results'
            }}
        var store;
        if (!Ext.data.StoreManager.lookup('myPatientsStore')) {
            store = new NeqMobile.store.Patients(
                {
                    storeId:'myPatientsStore',
                    proxy:storeProxy
                }
            );
        }
        else {
            console.log('lookup started');
            store = Ext.data.StoreManager.lookup('myPatientsStore');
            store.setProxy(storeProxy);
        }
        //   var store = Ext.data.StoreManager.lookup('myPatientsStore');
        // Ext.ComponentQuery.query('patientList')[0].down('list').setStore(store);
        this.getWorkspace().down('list').setStore(store);
        // setTimeout(store.load(),50000);
    },

    onLogoutClick:function () {
        console.log('trying to logout');
        NeqMobile.manager.Session.logout();
        this.getViewport().setActiveItem(this.getLogin());
        this.getMenuSettings().setHidden(true);
        //    this.getMenuSettings().destroy();
    }
})
;