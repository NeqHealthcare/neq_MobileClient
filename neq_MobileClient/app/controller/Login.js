Ext.define('NeqMobile.controller.Login', {
    extend : 'Ext.app.Controller',
    requires: ['NeqMobile.view.login.LoginForm'],
    views : ['login.LoginForm'],
    models : ['UserLoginData'],
    stores : ['Users'],
    refs: [
        {   ref       : 'loginform',
            selector  : 'loginform'}
    ],

    init : function() {
        console.log('Init Login controller');
        this.getLoginform().down('button').setHandler(this.onLoginSuccess)


      //  this.getLoginbutton().setHandler(this.onLoginSuccess);

    },
    launch : function() {
        console.log('launch Login controller');
        // The "getter" here was generated by specifying the
        // stores array (above)
//        var stationsStore = this.getPatientsStore();
//
//        stationsStore.load({
//            callback : this.onStationsLoad,
//            scope : this
//        });
    }
    ,

    onLoginSuccess: function (user, session) {
        this.fireEvent('loginSuccess', user, session);
    }




});
