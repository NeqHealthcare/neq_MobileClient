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
        logout:function (domain, user, session, scope) {

            Ext.Ajax.request({
                url:url,
                method:'GET',
                scope:this,
                params:{username:user, session:session},
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
                            sessionId:obj
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