Ext.define('NeqMobile.view.patient.detail.PatientHeader',{
        extend:'Ext.form.Panel',
        xtype:'patientheader',
        config:{
            itemId:'patientheader',
            cls: 'x-patientheader',
            layout:'hbox',
            scrollable: false,

            items:[
                {
                    xtype:'fieldset',

                    layout:'hbox',
                    width: '100%',
                    items:[
                        {
                            xtype: 'panel',
                            layout:'vbox',
                            margin: '0',
                            padding: '5',
                            width: '100%',
                            items:[
                                {
                                    xtype: 'panel',
                                    padding: '7 7 7 7',
                                    docked: 'left',
                                    itemId:'patientheaderimage',
                                    cls:'x-patientheaderimage',
                                    tpl:'<img src="http://{photo}?width=137&height=137"' +
                                        'style="background-size: cover; background-position: center center;' +
                                        'background: #ddd; border-radius: 3px;' +
                                        '-webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6);"' +
                                        //'height=135' +
                                        '/>'
                                },
                                {
                                    xtype: 'textfield',
                                    padding: 5,
                                    labelWidth: '140px',
                                    label: 'Name: ',
                                    name:'rec_name',

                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    padding: 5,
                                    labelWidth: '140px',
                                    label: 'Sex: ',
                                    name: 'sex',
                                    readOnly: true
                                },
                                {
                                    xtype: 'textfield',
                                    padding: 5,
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










