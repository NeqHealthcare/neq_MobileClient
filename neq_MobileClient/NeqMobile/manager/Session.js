/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 14.01.12
 * Time: 01:54
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.manager.Session',
    {singleton:true,
        session:undefined,
        getUser:function () {
            return this.session.get('user');
        },
        getSession:function () {
            return this.session
        },
        getSessionId:function () {
            return this.session.get('sessionId');
        },
        isLoggedIn:function () {
            if (this.session == undefined || this.session == null)
                return false;
            else
                return true;
        },
        logout:function (successCallback, failureCallback, scope) {

            Ext.Ajax.request({
                url:this.session.get('domain').getCoreURL() + '/connection/logout',
                method:'GET',
                scope:this,
                timeout:5000,
                params:{username:this.session.get('user'), session:this.session.get('sessionId')},
                success:function (response, opts) {
                    var obj = Ext.decode(response.responseText);
                    if (obj = 'true') {
                        console.log('logout successfull');
                        if (successCallback) successCallback.apply(scope);
                    }
                    else
                        console.log('logout failed');
                    if (failureCallback) failureCallbackk.apply(scope);
                },
                failure:function (response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                    console.log('logout failed');
                    if (failureCallback) failureCallbackk.apply(scope);
                }
            });
            this.session = undefined;
        },
        login:function (domain, user, password, successCallback, failureCallback, scope) {
            Ext.Ajax.request({
                url:domain.getCoreURL() + '/connection/login',
                method:'GET',
                withCredentials: true,
                useDefaultXhrHeader: false,
                scope:this,
                timeout:5000,
                params:{username:user, password:password, backendSid:domain.get('backendSid')},
                success:function (response, opts) {
                    //var obj = Ext.decode(response.responseText);
                    var obj = response.responseText;
                    if (obj != 'false') {
                        console.log('login successfull');
                        var mySession = new NeqMobile.model.Session({
                            user:user,
                            sessionId:obj,
                            domain:domain
                        });
                        this.session = mySession;
                        successCallback.apply(scope);
                    }
                    else {
                        Ext.Msg.alert('Connection refused', 'The server rejected the connection, probably caused by wrong credentials', Ext.emptyFn);
                        console.log('login failed caused by wrong credentials');
                        if (failureCallback) failureCallback.apply(scope);
                    }
                },
                failure:function (response, opts) {
                    Ext.Msg.alert('Server not responding', '' +
                        'Ther occured a technical connection problem. Possible causes are:<br><br>' +
                        '1. you forgot to start chrome with the option<br>--disable-web-security (beforehand you have to kill all chrome processes)<br><br>' +
                        '2. The server ist not responding - check your network connection or the connection settings of the app (ask the administrator.)', Ext.emptyFn);
                    console.log('server-side failure with status code ' + response.status);
                    console.log('login failed - server not reachable')
                    failureCallback.apply(scope);
                }
            });
        }

    });