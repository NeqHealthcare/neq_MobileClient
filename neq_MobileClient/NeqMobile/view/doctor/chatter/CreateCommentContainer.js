/**
 * @author Jan Gansen
 */

Ext.define('NeqMobile.view.doctor.chatter.CreateCommentContainer', {
        extend:'Ext.Panel',
        xtype:'createcommentcontainer',
        requires:[],
        config:{
            modal: true,
            hideOnMaskTap: true,
            centered:true,
            width: 400,
            height: 250,
            styleHtmlContent:true,
            layout: {
                align: 'center',
                pack: 'center',
                type: 'vbox'
            },
            scrollable: true,
            items:[
                {
                    docked: 'top',
                    xtype: 'toolbar',
                    title: 'Submit a comment'
                },
                {
                    xtype: 'fieldset',
                    id: 'createCommentFieldSet',
                    style: 'text-align: right;',
                    width: '100%',
                    layout: {
                        align: 'start',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            itemId: 'commentTextArea',
                            name: 'comment',
                            width: '100%',
                            minHeight: 120,
                            placeHolder: 'Leave a comment...',
                            autoCapitalize: true,
                            clearIcon: false
                        }
                    ]
                },
                {
                    width: 250,
                    xtype: 'button',
                    id: 'x-submitChatterCommentButton',
                    text: 'submit'
                }
            ]
        }
    }
)
