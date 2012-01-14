/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 14.01.12
 * Time: 02:26
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.controller.SessionHandler', {
    extend:'Ext.app.Controller',
    requires:['NeqMobile.view.login.LoginForm', 'NeqMobile.view.Main'],
    views:['Main', 'login.LoginForm', 'Workspace'],
    models:['Session'],

    init:function () {

        console.log('Init home controller');
        this.control(
            {
                'patientdashboard button':{'tap':this.onDashboardSubmit}
            }
        );
        this.control(
            {
                'navigationview navigationbar button[align="right"]':{ 'tap':this.onLogoutClick}
            }
        );


        this.application.on("logout", function () {
            console.log('Login controller received the logout event');
            this.onLogout();

        });


    },
    logout: function(url,user,session){

        Ext.Ajax.request({
                        url: url,
                        method:'GET',
                        scope:this,
                        params:{username: user, session: session},
                        success:function (response, opts) {
                            var obj = Ext.decode(response.responseText);
                            if (obj = 'true') {
                                console.log('logout successfull');
                                return true;
                                this.onLogoutSuccess();
                            }
                            else
                                console.log('logout failed');
                                return false;
                        },
                        failure:function (response, opts) {
                            console.log('server-side failure with status code ' + response.status);
                            alert('no connection to server available');
                            return false;
                        }
                    });

    }
    ,
    login: function(url,user,pass,backendSid)
    {
        Ext.Ajax.request({
                                url: url,
                                method:'GET',
                                scope:this,
                                params:{username: user, password: pass, backendSid: backendSid},
                                success:function (response, opts) {
                                    var obj = Ext.decode(response.responseText);
                                    if (obj != 'false') {
                                        console.log('login successfull');
                                        return true;
                                        this.onLoginSuccess();
                                    }
                                    else
                                        console.log('login failed');
                                    return false;
                                },
                                failure:function (response, opts) {
                                    console.log('server-side failure with status code ' + response.status);
                                    alert('no connection to server available');
                                    return false;
                                }
                            });
    }

});