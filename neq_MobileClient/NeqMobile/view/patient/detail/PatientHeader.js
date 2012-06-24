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
                                    //html: '<img style="background-size: cover; background-position: center center; background: #ddd; border-radius: 3px; -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6);" src="http://{photo}.jpg" width="145" height="145">'

                                    //name:'photo',
                                    itemTpl:['<img src="http://{photo}?width=145&height=145' +
                                     'style="background-size: cover; background-position: center center;' +
                                     'background: #ddd; border-radius: 3px;' +
                                     '-webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6);"' +
                                     'height=145 width=145' +
                                     '/>'].join('')
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










