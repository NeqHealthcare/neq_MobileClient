Ext.define('NeqMobile.view.doctor.dashboard.DoctorNewsFeedDetail', {
    extend: 'Ext.form.Panel',
    xtype: 'doctornewsfeeddetail',

    config: {
        type: 'vbox',
        style: 'text-align: left; background-color: #f7f7f7; border-top: 1px solid #ccc;',
        scrollable: false,
        items: [
            {
                xtype:'fieldset',
                title:' ',
                margin: '3 6 3 6',
                layout: 'vbox',
                items:[
                    {
                        xtype: 'textareafield',
                        //styleHtmlContent: true,
                        name:'description',
                        width: '100%',
                        readOnly: true,
                        id: 'doctornewsfeeddetail'//,
                    },
                    {
                        xtype:'textfield',
                        style:'background-color: none;border: none;',
                        width: '100%',
                        name:'link',
                        readOnly:true
                    }
                ]
            },
            {
                xtype: 'container',
                html:'<div>&nbsp;</div>'

            }
        ]
    }

});