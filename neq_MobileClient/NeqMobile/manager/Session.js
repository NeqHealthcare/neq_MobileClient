/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 14.01.12
 * Time: 01:54
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.manager.Session',
    {singleton:true,
        requires:['NeqMobile.model.Userinfo'],
        //session:undefined,
        config:{
            session:undefined,
            currentPatient:undefined
        },
        getSessionId:function () {
            return this.getSession().get('sessionId');
        },
        isAuthenticated:function () {
            if (this.session == undefined || this.session == null)
                return false;
            else
                return true;
        },
        authenticate:function(params)
        {
            var success;

            if (this.isAuthenicated() === true)
            {
                success = true;
            }
            else
            {
                // (domain, user, password, success, failure, scope)
            }
        },
        logout:function (successCallback, failureCallback, scope) {

            Ext.Ajax.request({
                url:this.getSession().get('domain').getCoreURL() + '/connection/logout',
                method:'GET',
                //   withCredentials: true,

                scope:this,
                timeout:30000,
                params:{username:this.getSession().get('user'), session:this.getSession().get('sessionId')},
                success:function (response, opts) {
                    var obj = Ext.decode(response.responseText);
                    if (obj.success === "true") {
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
        login:function (domain, user, password, success, failure, scope) {
            Ext.Ajax.request({
                url:domain.getCoreURL() + '/connection/login',
                method:'GET',
                // withCredentials: true,
                scope:this,
                timeout:30000,
                params:{username:user, password:password, backendSid:domain.get('backendSid')},
                success:function (response, opts) {
                    //var obj = Ext.decode(response.responseText);

                    var obj = Ext.decode(response.responseText, true);
                    if (obj) {
                        if (obj.success === 'true' && obj.data) {
                            console.log('login successfull');
                            var mySession = new NeqMobile.model.Session({
                                user:user,
                                sessionId:obj.data[0],
                                domain:domain
                            });
                            this.setSession(mySession);
                            var userinfomodel = Ext.ModelMgr.getModel('NeqMobile.model.Userinfo');
                            userinfomodel.load(undefined, {
                                success:function (userinfo) {
                                    mySession.set('userinfo', userinfo);
                                    success.apply(scope);
                                }
                            });

                        }
                        else {
                            Ext.Msg.alert('Connection failed', 'Server replied: ' + obj.error);
                            if (failure) failure.apply(scope);
                        }
                    }
                    else {
                        Ext.Msg.alert('Connection failed', '<br> status code: ' + response.status, Ext.emptyFn);
                        console.log('login failed');
                        console.log('server-side failure with status code ' + response.status);
                        if (failure) failure.apply(scope);
                    }
                },
                failure:function (response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                    console.log('login failed - server not reachable')
                    Ext.Msg.alert('Server not responding', 'status code: ' + response.status + '<br>' +
                        'It occured a technical connection problem. Possible causes are:<br><br>' +
                        '1. The server ist not responding - check your network connection or the connection settings of the app (ask the administrator.)', Ext.emptyFn);

                    failure.apply(scope);
                }
            });
        }

    });