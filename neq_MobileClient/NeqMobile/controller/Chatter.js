/**
 * Created by Jan Gansen

/* - Basic Definition ---------------------------------------------------------------------------------- */
Ext.define('NeqMobile.controller.Chatter', {
        extend:'Ext.app.Controller',

        config:{

            refs:{
                chattercontainer:'chattercontainer',
                workspace:'workspace',
                newposttextarea:'chattercontainer newpostcontainer textareafield'
            },

            control:{
                'chattercontainer button':{
                    tap:'onCreateNewPostButton'
                }
            }
        },

        /* - Functions ---------------------------------------------------------------------------------- */

        onCreateNewPostButton: function(button, e, eOpts){
            var me = this;
            var messageT = this.getNewposttextarea().getValue();
            var parentId = -1;
            var tempPost = Ext.create('NeqMobile.model.ChatterPost', {
                message: messageT,
                parent_id: parentId
            });
            tempPost.getProxy().setExtraParam('parentId', parentId);
            tempPost.getProxy().setExtraParam('message', messageT);
            tempPost.save({
                success:function (tempPost) {
                    console.log("post successfully saved");
                    me.getNewposttextarea().setValue('');
                    me.getNewposttextarea().setPlaceHolder("What do you wanna share?");
                    me.getChattercontainer().down('#chatterPostContainer').refresh();
                },
                failure:function (response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                    Ext.Msg.alert('Server not responding', 'status code: ' + response.status + '<br>' +
                        'It occured a technical connection problem. Possible causes are:<br><br>' +
                        '1. The server ist not responding - check your network connection or the connection settings of the app (ask the administrator.)', Ext.emptyFn);
                    failureCallback.apply(scope);
                }
            })
        }
    }

);
