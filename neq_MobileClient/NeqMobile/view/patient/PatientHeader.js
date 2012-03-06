Ext.define('NeqMobile.view.patient.PatientHeader',{
        extend:'Ext.form.Panel',
        xtype:'patientheader',
        config:{
            itemId:'patientheader',
            layout:'hbox',
            scrollable: false,

            items:[
                {
                    xtype:'fieldset',
                    title:'Patient',
                    layout:'hbox',
                    width: '100%',
                    items:[
                        {
                            xtype: 'panel',
                            layout:'vbox',
                            padding: '10 10 10 10',
                            width: '100%',
                            items:[
                                {
                                    xtype: 'panel',
                                    padding: '10 10 10 10',
                                    dock: 'left',
                                    html: '<img src="theme/images/user/DefaultAvatar_small.jpg" width="60" height="67">'
                                },
                                {
                                    xtype: 'textfield',
                                    padding: '5 5 5 5',
                                    labelWidth: '140px',
                                    label: 'Name: ',
                                    name:'rec_name',

                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    padding: '5 5 5 5',
                                    labelWidth: '140px',
                                    label: 'Sex: ',
                                    name: 'sex',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    padding: '5 5 5 5',
                                    labelWidth: '140px',
                                    label: 'Latest Diagnose: ',
                                    name: 'latestDiagnoseRecName',
                                    readOnly: true
                                }
                            ]
                        }
                    ]
                }

            ]
        }
    }
)










