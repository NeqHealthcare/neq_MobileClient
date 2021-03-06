/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 14.01.12
 * Time: 02:26
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.controller.Session', {
    extend:'Ext.app.Controller',
    requires:['NeqMobile.manager.Session'],
    config:{
        models:['Domain'],
        stores:['Domains', 'Patients', 'ChatterUsers'],
        views:['Workspace', 'menu.Settings', 'settings.Domains', 'settings.UserSettings'],
        refs:{
            login:{
                selector:'Login',
                xtype:'Login',
                autoCreate:true
            },
            viewport:'Viewport',
            workspace:{
                selector:'workspace',
                xtype:'workspace',
                autoCreate:true
            },
            menuSettings:'menuSettings',
            settingsDomains:'settingsDomains',
            userSettings:{selector:'userSettings',
                xtype:'userSettings',
                autoCreate:'true'},
            mainToolbar:'workspace #mainToolbar'
        },
        control:{
            'Login #submitButton':{tap:'onLoginTry'},
            'Login #settingsbutton':{tap:'onSettingsClick'},
            'workspace #doctorimage':{tap:'onShowLogoutMenu'},
            'workspace #SettingsButton':{tap:'onUserSettingsClick'},
            'menuSettings #logoutbutton':{tap:'onLogoutClick'},
            'settingsDomains toolbar #backbutton':{tap:'onBackFromDomainSettings'

            }
        },
        routes:{
            'userSettings':'switchToUserSettings',
            'login':'doLogout'
        }
    },

    init:function () {
        var me = this;
        Ext.Viewport.on('login', this.prepareCometD, me);
        Ext.Viewport.on('logout', this.disconnectCometD, me);
    },

    disconnectCometD:function () {
        var cometd = Ext.cometd;
        cometd.disconnect();
    },
    prepareCometD:function () {
        var _connected = false;
        var domain = NeqMobile.manager.Session.getSession().get('domain');
        var url = 'ws' + '://' + domain.get('ip') + ':' + '8082' + '/cometd/pulse';

        var cometd = Ext.cometd;


        console.log('configuring...');

        cometd.configure({
            url:url
            //,
            //  logLevel:'debug'
        });
        //    console.log('...configuration complete')
        var subscription1 = cometd.addListener('/meta/connect', function (message) {
            //        console.log(message)
        });


        cometd.addListener('/meta/connect', function (message) {

            //   console.log('something arrived at the connect meta channel');
            //   console.warn('CONNECTING TO: ' + url);
            // if (cometd.getStatus() === 'disconnecting' || cometd.getStatus() === 'disconnected')
            if (cometd.isDisconnected()) // Available since 1.1.2
            {
                return;
            }
            var wasConnected = _connected;
            _connected = message.successful;
            if (!wasConnected && _connected) {
                console.log('reconneted')
            }
            else if (wasConnected && !_connected) {
                console.log('disconneted)')
            }
        });

        cometd.addListener('/meta/disconnect', function (message) {
            if (message.successful) {
                _connected = false;
            }
        });

        cometd.handshake();
    },
    onBackFromDomainSettings:function () {
        this.getViewport().setActiveItem(this.getLogin());
        //  console.log('itemcount: ' + this.getViewport().getItems().length);
    },
    onSettingsClick:function () {
        // console.log('switching card');
        var settingsdomains;
        if (this.getSettingsDomains()) {

            settingsdomains = this.getSettingsDomains();
        }
        else {
            settingsdomains = Ext.create('NeqMobile.view.settings.Domains');
        }
        this.getViewport().setActiveItem(settingsdomains);
    },

    onUserSettingsClick:function () {
        this.redirectTo('userSettings');
    },

    switchToUserSettings:function () {
        console.log('switching card');
        var userSettings = this.getUserSettings();
        //this.getWorkspace().down('patientlist').setHidden(true);
        this.getWorkspace().down('#contentcontainer').setActiveItem(userSettings);
        this.getMainToolbar().setTitle('User Settings');


        userSettings.setMasked({xtype:'loadmask', message:'loading people', transparent:true});
        var chatterUsersStore = Ext.data.StoreManager.lookup('chatterUsers');
        if (!chatterUsersStore) {
            chatterUsersStore = Ext.create('NeqMobile.store.ChatterUsers');
        }
        var userinfo = NeqMobile.manager.Session.getSession().get('userinfo');
        var doctor_id = userinfo.get('physician_id');
        chatterUsersStore.getProxy().setExtraParam('id', doctor_id);
        chatterUsersStore.load({
            callback:function (records, operation, success) {
                userSettings.loadChatterUsers(chatterUsersStore);
                userSettings.setMasked(false);
            },
            scope:this
        });
    },


    onShowLogoutMenu:function (button) {

        var settingsmenu = NeqMobile.view.menu.Settings;
        var statusMenu = settingsmenu.getHidden();
        if (statusMenu) {
            settingsmenu.setHidden(false);
            settingsmenu.showBy(button);
        }
        else {
            settingsmenu.setHidden(true);
        }
    },

    onLoginTry:function () {
        var usernamefield = this.getLogin().down('formpanel').down('#textfield').getValue();
        var pwdfield = this.getLogin().down('formpanel').down('#passwordfield').getValue();
        var domainfield = this.getLogin().down('selectfield').getValue();
        if (usernamefield == "") {
            Ext.Msg.alert('Username missing', 'Please insert your username', Ext.emptyFn);
        }
        else {
            if (pwdfield == '') {
                Ext.Msg.alert('Password missing', 'Please insert your password', Ext.emptyFn);
            }
            else {
                if (domainfield == null) {
                    Ext.Msg.alert('No Domain Selected', 'Please select a domain or create a new domain in the settings', Ext.emptyFn);
                }
                else {
                    this.requestLogin();
                }
            }
        }
    },
    requestLogin:function () {
        var loginForm = this.getLogin().down('formpanel');
        Ext.Viewport.setMasked({ xtype:'loadmask', message:'Login in progres...' });
        NeqMobile.manager.Session.login(this.getLogin().down('selectfield').getRecord(), loginForm.getFields('user').getValue(),
            loginForm.getFields('password').getValue(), this.onLoginSuccess, this.onLoginFailure, this);
    },

    onLoginFailure:function () {
        Ext.Viewport.setMasked(false);
    },
    onLoginSuccess:function () {
        var me = this;
        Ext.Viewport.setMasked(false);
        console.log('firing login event');

        this.getLogin().down('formpanel').getFields('password').reset();

        // Creating the required Patient Store and its Proxy to load patient data from MAIS

        var userinfodata = NeqMobile.manager.Session.getSession().get('userinfo').data;
        Ext.data.StoreManager.unregister(Ext.data.StoreManager.lookup('patients'));
        var store = new NeqMobile.store.Patients(
            {
                storeId:'patients'
            }
        );
        store.load();
        var workspace = this.getWorkspace();
        workspace.down('#doctorname').setData(userinfodata);

        Ext.Viewport.fireEvent('login');
        this.getViewport().setActiveItem(workspace);

        this.redirectTo('userdashboard');

        console.log('loading patients');

        //    var workspace =  this.getWorkspace();
        //    var patientlist = workspace.down('patientlist');
        //    var plist = patientlist.down('list');
        //    plist.setStore(store);

    },
    onLogoutClick:function () {

        this.redirectTo('login');
    },

    doLogout:function () {
        console.log('trying to logout');
        Ext.Viewport.fireEvent('logout');
        NeqMobile.manager.Session.logout();
        var login = this.getLogin();
        this.getViewport().setActiveItem(login);
        // this.getViewport().remove(this.getWorkspace(), true);
        this.getMenuSettings().setHidden(true);
        //    this.getMenuSettings().destroy();
    }
})
;