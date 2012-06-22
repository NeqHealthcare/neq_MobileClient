/**
 * Created by Jan Gansen
 */

Ext.define('NeqMobile.view.doctor.chatter.ChatterContainer', {
    extend:'Ext.Container',
    requires:['NeqMobile.view.doctor.chatter.NewPostContainer'],
    xtype:'chattercontainer',


    config:{
        styleHtmlContent:true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        layout: 'vbox',
        margin: 0,
        padding: 15,
        items:[
            {
                xtype:'newpostcontainer'

            }
        ]
    }
});