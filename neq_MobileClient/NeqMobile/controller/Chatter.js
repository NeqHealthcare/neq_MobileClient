/**
 * Created by Jan Gansen

/* - Basic Definition ---------------------------------------------------------------------------------- */

Ext.define('NeqMobile.controller.Chatter', {
        extend:'Ext.app.Controller',
        requires:[''],

        config:{
            stores:[''],

            refs:{
                chattercontainer:'chattercontainer',
                workspace:'workspace'
            },

            control:{
                'chattercontainer #createNewPostButton':{
                    tap:'onCreateNewCommentButton'
                },
                'chattercontainer .createNewCommentButton':{
                    tap:'onCreateNewCommentButton'
                }
            },
            // enables calling a view directly by address
            routes:{
                'chatter':'chattersLoadChatterdata'
            },

            before:{
            } },

        /* - Functions ---------------------------------------------------------------------------------- */

        chattersLoadChatterdata:function (button, e, eOpts) {
            this.getWorkspace().down('#userviewcontainer').setActiveItem(workspace.down('userview'));

            var postStore = new NeqMobile.store.ChatterPosts(
                {
                    storeId:'chatterPosts'
                }
            );
            postStore.load();
            this.getChattercontainer().down('#chatterPostContainer').setStore(postStore);
        },


        onCreateNewPostButton: function(button, e, eOpts){

        }
    }

);
