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

        },


        onCreateNewPostButton: function(button, e, eOpts){

        }
    }

);
