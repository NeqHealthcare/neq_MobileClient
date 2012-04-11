Ext.define('NeqMobile.view.doctor.DoctorHeader', {
    extend: 'Ext.form.Panel',
    xtype: 'doctorheader',
    config: {
        scrollable:false,
        padding: '0 0 10 0',
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
                                padding: 7,
                                label: 'Number of patients:',
                                labelWidth: '150px',
                                name: 'patient_number'
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'mytextfield',
                                padding: 7,
                                label: 'Name:',
                                labelWidth: '150px',
                                name: 'doc_rec_name'
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'mytextfield',
                                padding: 7,
                                label: 'Last Login:',
                                labelWidth: '150px',
                                name: 'last_login'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});