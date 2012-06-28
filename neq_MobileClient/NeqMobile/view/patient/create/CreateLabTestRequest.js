/**
 * @author Jan Gansen
 */

Ext.define('NeqMobile.view.patient.create.CreateLabTestRequest', {
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
                    title: 'Create New Lab Test Request'
                },
                {
                    xtype: 'fieldset',
                    id: 'createLabtestRequestFieldSet',
                    style: 'text-align: right;',
                    width: '100%',
                    layout: {
                        align: 'start',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'selectfield',
                            label: 'Test Type:',
                            labelWidth: '30%',
                            width: '100%',
                            valueField: 'name',
                            displayField: 'name'
                        },
                        {
                            xtype: 'datepickerfield',
                            destroyPickerOnHide: true,
                            name: 'date',
                            label: 'Date:',
                            labelWidth: '30%',
                            width: '100%',
                            dateFormat: 'd.m.Y',
                            value: new Date(),
                            picker: {
                                yearFrom: new Date().getYear()
                            }
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'doctorNameField',
                            name: 'physician',
                            label: 'Physician:',
                            labelWidth: '30%',
                            width: '100%',
                            placeHolder: 'Current User',
                            autoCapitalize: true,
                            clearIcon: false
                        }
                    ]
                },
                {
                    width: 250,
                    xtype: 'button',
                    id: 'x-submitLabTestRequestButton',
                    text: 'submit'
                }
            ]
        }
    }
)