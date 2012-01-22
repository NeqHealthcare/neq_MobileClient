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
        getSessionId:function () {
            return this.session.get('sessionID');
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

        },
        login:function (domain, user, password, successCallback, failureCallback, scope) {
            Ext.Ajax.request({
                url:domain.getCoreURL() + '/connection/login',
                method:'GET',
                scope:this,
                params:{username:user, password:password, backendSid:domain.get('backendSid')},
                success:function (response, opts) {
                    var obj = Ext.decode(response.responseText);
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
                        console.log('login failed');
                        failureCallback.apply(scope);
                    }
                },
                failure:function (response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                    alert('no connection to server available');
                    failureCallback.apply(scope);
                }
            });
        }

    });