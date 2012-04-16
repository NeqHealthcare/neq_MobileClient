Ext.Loader.setConfig({
    enabled:true,
    disableCaching:true // for debugging
});

var mycometd;

Ext.application({
    name:'lightweightExpandable',
    requires:['org.cometd'],
    launch:function () {

        org.cometd.JSON.toJSON = Ext.encode;
        org.cometd.JSON.fromJSON = Ext.decode;

        mycometd = new org.cometd.Cometd()
        var cometd = mycometd;
        var _connected = false;
        console.log(mycometd);
        if (org.cometd.WebSocket) {
            cometd.registerTransport('websocket', new org.cometd.WebSocketTransport());
        }


//        cometd.registerTransport('long-polling', new org.cometd.LongPollingTransport());
//        cometd.registerTransport('callback-polling', new org.cometd.CallbackPollingTransport());

        var initconnection = function () {
            var cometd = mycometd;
            console.log(cometd);
            console.log('configuring...');
            cometd.configure({
                url:'http://localhost:8081/cometd/echo',
                logLevel:'debug'
            });
            console.log('...configuration complete')
            var subscription1 = cometd.addListener('/meta/connect', function (message) {
                console.log(message)
            });
            cometd.handshake();
        };

        cometd.addListener('/meta/connect', function (message) {

            console.log('something arrived at the connect meta channel');
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

        var sendmessage = function () {
            console.log('trying to send a message: "this is a NeqMobile test message"');
            cometd.publish("/service/echo", { msg:'this is a NeqMobile test message' });
        };

        Ext.create('Ext.Container',
            {fullscreen:true,
                // width:1500,
                styleHtmlContent:true,
                scrollable:true,
//                layout:{type:'vbox',
//                    flex:1},
                items:[
                    {xtype:'button', text:'start connection', handler:initconnection},
                    {xtype:'button', text:'send a message', handler:sendmessage}
                ]
            }
        )

    }});
