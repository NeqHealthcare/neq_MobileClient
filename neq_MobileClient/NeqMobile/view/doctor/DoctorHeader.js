Ext.define('NeqMobile.view.doctor.DoctorHeader', {
    extend: 'Ext.form.Panel',
    xtype: 'doctorheader',
    config: {
        scrollable:false,
        layout: {
            itemId:'doctorheader',
            cls: 'x-doctorheader',
            layout:'hbox'
        },
        items: [
            {
                xtype: 'fieldset',
                width: '100%',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'panel',
                        padding: 5,
                        width: '100%',
                        layout: {
                            type: 'vbox'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                docked: 'left',
                                padding: 7,
                                html: '<img style="background-size: cover; background-position: center center; background: #ddd; border-radius: 3px; -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6);" src="theme/images/user/patient_avatar_big.jpg" width="145" height="145">'
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'mytextfield',
                                padding: 5,
                                label: 'Name:',
                                labelWidth: '180px',
                                name: 'doc_rec_name'
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'mytextfield',
                                padding: 5,
                                label: 'Last Login:',
                                labelWidth: '180px',
                                name: 'last_login'
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'mytextfield',
                                padding: 5,
                                label: 'Number of patients:',
                                labelWidth: '180px',
                                name: 'patient_number'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});