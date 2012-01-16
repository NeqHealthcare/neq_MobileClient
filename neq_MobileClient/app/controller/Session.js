/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 14.01.12
 * Time: 02:26
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.controller.Session', {
    extend:'Ext.app.Controller',

    requires:['NeqMobile.manager.Session', 'NeqMobile.store.Domains'],
    views:['Viewport', 'Workspace'],
    models:['Session', 'Domain'],
    stores:['Domains'],
    scope:this,

    refs:[
        { ref:'Login',
            selector:'Login',
            autoCreate:true,
            xtype:'Login'},
        { ref:'Viewport',
            selector:'Viewport'},
        {ref:'Workspace',
        selector:'Workspace'}
    ],
    init:function () {

        console.log('Init Session controller');
        /* this.control(
         {
         'patientdashboard button':{'tap':this.onDashboardSubmit}
         }
         );*/
        /*  this.control(
         {
         'navigationview navigationbar button[align="right"]':{ 'tap':this.onLogoutClick}
         }
         );
         */


        this.control(
            {
                'Login #submitButton':{ 'tap':this.onLoginTry}
            }
        );

        this.control(
            {
                'Login #simple':{ 'tap':this.onTest}
            }
        );

        this.application.on("logout", function () {
            console.log('Login controller received the logout event');
        });


    }, onTest:function () {
        console.log('starting test');
        var mystore = Ext.create('NeqMobile.store.Domains');
        this.getLogin().down('list').setStore(mystore);
    },
    onLoginTry:function () {
        console.log('trying to login');
        console.dir(this.getLogin().down('list').getSelected().getAt(0));
        var loginForm = this.getLogin().down('formpanel');
        if (NeqMobile.manager.Session.login(this.getLogin().down('list').getSelected().getAt(0), loginForm.getFields('user').getValue(),
            loginForm.getFields('pass').getValue(), this.onLoginSuccess, this.onLoginFailure) == true) {
            this.onLoginSuccess();
        }
    },
    onLoginSuccess:function () {

        console.log('switching card');
        Ext.ComponentQuery.query('Viewport')[0].remove(Ext.ComponentQuery.query('Workspace')[0], true);
        Ext.ComponentQuery.query('Viewport')[0].setActiveItem(Ext.create('NeqMobile.view.Workspace'));
        this.fireEvent('loginSuccess');
        Ext.ComponentQuery.query('Login')[0].down('formpanel').getFields('pass').reset();
        console.log('writing session');
        console.log(NeqMobile.manager.Session.getSessionId());
    }
});