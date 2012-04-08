Ext.Loader.setConfig({
    enabled:true,
    disableCaching:true // for debugging
});

var mycometd;

Ext.application({
    name:'lightweightExpandable',
    requires:['org.cometd'],
    launch:function () {
        mycometd = new org.cometd.Cometd()
        var cometd = mycometd;
        var _connected = false;
        console.log(mycometd);
        cometd.addListener('/meta/connect', function (message) {
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
        Ext.create('Ext.Container',
            {fullscreen:true,
                // width:1500,
                styleHtmlContent:true,
                scrollable:true,
//                layout:{type:'vbox',
//                    flex:1},
                items:[
                    {xtype:'button', text:'start connection', handler:initconnection},
                    {xtype:'button', text:'send a message', handler:this.sendmessage}
                ]
            }
        )

    }});
