Ext.define('NeqMobile.view.doctor.DoctorNewsFeedDetail', {
    extend: 'Ext.form.Panel',
    xtype: 'doctornewsfeeddetail',

    config: {
        //padding: 5,
        scrollable: false,
        items: [
            {
                xtype:'fieldset',
                //margin:'10 10 10 0',
                flex:1,
                items:[
                    {
                        xtype: 'textareafield',
                        //styleHtmlContent: true,
                        name:'description',
                        labelWidth: 0,
                        readOnly: true,
                        id: 'doctornewsfeeddetail'//,
                    },
                    {
                        xtype:'textfield',
                        style:'text-align: right;',
                        label:'Link:',
                        labelWidth:'50px',
                        name:'link',
                        readOnly:true
                    }
                ]
            }
        ]
    }

});