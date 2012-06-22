Ext.define('NeqMobile.view.doctor.chatter.NewPostContainer', {
    extend: 'Ext.form.Panel',
    xtype: 'newpostcontainer',
    config: {
        scrollable:false,
        padding: '0 0 10 0',
        layout: {
            itemId:'newpostcontainer',
            cls: 'x-newpostcontainer',
            layout:{
                type: 'vbox',
                align: 'center'
            }
        },
        items: [
            {
                xtype: 'fieldset',
                width: '100%',
                layout: {
                    type: 'vbox'
                },
                items: [
                    {
                        xtype:'textareafield',
                        name:'newposttextarea',
                        width: '100%',
                        placeHolder:'What do you wanna share?'
                    }
                ]
            },
            {
                xtype:'button',
                text:'share',
                width: 250,
                style:'text-align: center;',
                itemId:'createNewPostButton',
                cls:'createNewPostButton'
            }
        ]
    }

});
