Ext.define('NeqMobile.controller.Login', {
    extend : 'Ext.app.Controller',
    requires: ['NeqMobile.view.login.LoginForm'],
    views : ['login.LoginForm'],
   // stores : ['Users'],
    refs: [
        {   ref       : 'loginform',
            selector  : 'loginform'},
        { ref:'workspace',
                    selector:'workspace',
                    xtype:'workspace',
                    autoCreate:true}
        ,
        {   ref:'main',
                    selector:'main',
                    xtype:'main',
                    autoCreate:true}
    ],

    init : function() {
        console.log('Init Login controller');


        this.control({
                        // example of listening to *all* button taps
                        'loginform button[ui="confirm"]':{ 'tap':this.onLoginTry
                        }}
                );

      //  this.getLoginbutton().setHandler(this.onLoginSuccess);

    },
    launch : function() {
        console.log('launch Login controller');
    }



    ,


        onLoginTry:function () {
            console.log('trying to load the session');

            var myvar = Ext.Ajax.request({
                url:'http://theilemann.dyndns.org:8080/connection/login',
                method:'GET',
                scope:this,
                params:{username:this.getLoginform().down('formpanel').getFields('name').getValue(), password:this.getLoginform().down('formpanel').getFields('password').getValue(), backendSid:'gnuhealth1'},
                success:function (response, opts) {
                    var obj = Ext.decode(response.responseText);
                    console.dir(obj);
                    if (obj != 'false') {
                        console.log('login accepted');

                        this.onLoginSuccess();
                    }
                    else
                        console.log('login refused');


                },
                failure:function (response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                    alert('error in connection to server');
                }
            });

        }

    ,


    onLoginSuccess:function () {
            console.log('switching card');
            this.getMain().setActiveItem(this.getWorkspace());
            this.fireEvent('loginSuccess');
        }
    /*
,
    onLoginSuccess: function (user, session) {
        this.fireEvent('loginSuccess', user, session);
    }
*/



});
