/**
 * Created by Jan Gansen

/* - Basic Definition ---------------------------------------------------------------------------------- */
Ext.define('NeqMobile.controller.Chatter', {
        extend:'Ext.app.Controller',
        requires:['NeqMobile.view.doctor.chatter.CreateCommentContainer'],
        config:{

            refs:{
                chattercontainer:'chattercontainer',
                workspace:'workspace',
                newposttextarea:'chattercontainer newpostcontainer textareafield',
                createCommentOverlay: 'createcommentcontainer',
                postList:'chattercontainer list'
            },

            control:{
                'chattercontainer button':{tap:'onCreateNewPostButton'},
                'chattercontainer list':{select:'onPostSelect'},
                'createcommentcontainer button':{tap:'onSubmitCommentButton'},
                'createcommentcontainer':{hide:'onOverlayHide'}
            }
        },

        selectedPost:undefined,

        /* - Functions ---------------------------------------------------------------------------------- */

        onOverlayHide: function(comp, eOpts){
            var list = this.getPostList();
            list.deselectAll();
        },


        onCreateNewPostButton: function(button, e, eOpts){
            var messageT = this.getNewposttextarea().getValue();
            if(messageT == ''){
                Ext.Msg.alert('Content missing','Please insert the content you want to share', Ext.emptyFn);
            }
            else{
                this.createNewPost();
            }
        },
        createNewPost: function(){
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
                    var store = Ext.data.StoreManager.lookup('chatterPosts');
                    store.load({
                        callback:function (records, operation, success) {
                            console.log('store reloaded');
                        },
                        scope:this
                    });
                },
                failure:function (response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                    Ext.Msg.alert('Server not responding', 'status code: ' + response.status + '<br>' +
                        'It occured a technical connection problem. Possible causes are:<br><br>' +
                        '1. The server ist not responding - check your network connection or the connection settings of the app (ask the administrator.)', Ext.emptyFn);
                    failureCallback.apply(scope);
                }
            })
        },

        onPostSelect: function (list, record, options) {
            var createCommentOverlay;
            selectedPost = record.get('id');
            if (this.getCreateCommentOverlay()) {
                createCommentOverlay = this.getCreateCommentOverlay();
            } else {
                createCommentOverlay = Ext.create('NeqMobile.view.doctor.chatter.CreateCommentContainer');
            }
            createCommentOverlay.getComponent('createCommentFieldSet').getComponent(0).setValue('');
            createCommentOverlay.getComponent('createCommentFieldSet').getComponent(0).setPlaceHolder('Leave a comment...');
            this.overlay = Ext.Viewport.add(createCommentOverlay);
            this.overlay.show();

        },
        onSubmitCommentButton:function (button, e, eOpts){
            var comment = this.getCreateCommentOverlay().down('#createCommentFieldSet').down('#commentTextArea').getValue();
             if (comment != ""){
                this.submitComment();
             }
            else {
                 Ext.Msg.alert('Comment Missing','Please insert a comment', Ext.emptyFn);
             }
        },

        submitComment:function (){
            var me = this;

            var createCommentOverlay = this.getCreateCommentOverlay();
            var fieldSet = createCommentOverlay.getComponent('createCommentFieldSet');
            var textarea = fieldSet.getComponent(0);
            var parentId = null;
            if(selectedPost != undefined && selectedPost != null){
                parentId = selectedPost;
            }else{
                parentId = -1;
            }
            console.log('---------------------- -------------------- -------------------- -------------------');
            console.log('parent_id ist: '+parentId);
            var messageT = textarea.getValue();
            var tempPost = Ext.create('NeqMobile.model.ChatterPost', {
                message: messageT,
                parent_id: parentId
            });
            tempPost.getProxy().setExtraParam('parentId', parentId);
            tempPost.getProxy().setExtraParam('message', messageT);

            tempPost.save({
                success:function (tempPost) {

                    var store = Ext.data.StoreManager.lookup('chatterPosts');
                    store.load({
                        callback:function (records, operation, success) {
                            console.log('store reloaded');
                        },
                        scope:this
                    });
                },
                failure:function (response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                    Ext.Msg.alert('Server not responding', 'status code: ' + response.status + '<br>' +
                        'It occured a technical connection problem. Possible causes are:<br><br>' +
                        '1. The server ist not responding - check your network connection or the connection settings of the app (ask the administrator.)', Ext.emptyFn);
                    failureCallback.apply(scope);
                }
            });
            createCommentOverlay.setHidden(true);
        }
    }


);
