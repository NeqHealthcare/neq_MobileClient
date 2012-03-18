/**
 * @author Jan Gansen
 */

Ext.define('NeqMobile.view.patient..create.CreateLabTestRequest', {
        extend:'Ext.Panel',
        xtype:'createlabtestrequestoverlay',
        requires:[],
        config:{
            modal: true,
            hideOnMaskTap: true,
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
            },
            centered:true,
            width: 400,
            height: 300,
            styleHtmlContent:true,
            layout:'vbox',
            scrollable: true,
            items:[
                {
                    docked: 'top',
                    xtype: 'toolbar',
                    title: 'Create New Lab Test Request'
                },
                {
                    xtype: 'formpanel',
                    padding: '10 0 0 0',
                    layout: {
                        align: 'center',
                        pack: 'center',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            style: 'text-align: right;',
                            width: 280,
                            layout: {
                                align: 'start',
                                type: 'vbox'
                            },
                            items: [
                                {
                                    xtype: 'selectfield',
                                    label: 'Test Type:',
                                    name: 'testTypeSelectField',
                                    options: [
                                        {
                                            text: 'sample1',
                                            value: 'sample 1'
                                        },
                                        {
                                            text: 'sample2',
                                            value: 'sample 2'
                                        },
                                        {
                                            text: 'sample3',
                                            value: 'sample 3'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'datepickerfield',
                                    destroyPickerOnHide: true,
                                    name: 'date',
                                    label: 'Date:',
                                    value: new Date(),
                                    picker: {
                                        yearFrom: new Date().getYear()
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'physician',
                                    label: 'Physician:',
                                    placeHolder: 'Tom Roy',
                                    autoCapitalize: true,
                                    required: true,
                                    clearIcon: false
                                },
                                {
                                    xtype: 'button',
                                    id: 'x-submitLabTestRequestButton',
                                    width: 280,
                                    text: 'Submit Lab Test Request'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
)