/**
 * Created with IntelliJ IDEA.
 * User: geekflyer
 * Date: 17.04.12
 * Time: 01:08
 * To change this template use File | Settings | File Templates.
 */


/*
 * Copyright (c) 2010 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//dojo.provide('dojox.cometd');
//dojo.registerModulePath('org', '../org');
//dojo.require('org.cometd');
//dojo.require('dojo.io.script');

// Remap cometd JSON functions to dojo JSON functions

Ext.require('org.cometd');



Ext.define('Ext.ux.CometD',
    {
        cometd:undefined,
        requires:'org.cometd',
        constructor:function (name) {

            org.cometd.JSON.toJSON = Ext.encode;
            org.cometd.JSON.fromJSON = Ext.decode;

            var me = this;
            me.cometd = new org.cometd.Cometd(name);
            var cometd = me.cometd;
            // Registration order is important
            if (org.cometd.WebSocket) {
                cometd.registerTransport('websocket', new org.cometd.WebSocketTransport());
            }
           cometd.registerTransport('long-polling', new this.LongPollingTransport());
       //  cometd.registerTransport('callback-polling', new CallbackPollingTransport());

            return cometd;
        },
        LongPollingTransport:function () {
            var _super = new org.cometd.LongPollingTransport();
            var that = org.cometd.Transport.derive(_super);
            that.xhrSend = function (packet) {
                var myrequest = Ext.Ajax.request(
                    {
                        url:packet.url,
                        headers:packet.headers,
                        async:!(packet.sync === true),
                        jsonData:packet.body,
                        withCredentials:true,
                        method:'POST',
                        success:function (response, opts) {
                            packet.onSuccess(Ext.decode(response.responseText), opts)
                        },
                        failure:function (response, opts) {
                            packet.onError(response.statusText, myrequest ? response.error : 'unknown connection error in LongPollingTransport occured');
                        }
                    }
                );
                return myrequest.xhr;
            }
            return that;
        }

    });

// The default cometd instance
//Ext.ux.cometd = Ext.create('Ext.ux.CometD');