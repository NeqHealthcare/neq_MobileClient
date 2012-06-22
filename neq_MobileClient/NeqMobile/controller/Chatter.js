/**
 * Created by Jan Gansen

/* - Basic Definition ---------------------------------------------------------------------------------- */

Ext.define('NeqMobile.controller.Chatter', {
        extend:'Ext.app.Controller',
        requires:[''],

        config:{
            stores:[''],

            refs:{
                chattercontainer:'chattercontainer'
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
                'patient/:id':'showPatient',
                'patient/:id/lab/:resultid':'showPatientLab'
                //'patient/:id/' route zu den patientBildern / Röntegenaufnahmen etc
            },

            before:{
            } },

        /* - Functions ---------------------------------------------------------------------------------- */


        onCreateNewPostButton: function(button, e, eOpts){

        }

    }

);
