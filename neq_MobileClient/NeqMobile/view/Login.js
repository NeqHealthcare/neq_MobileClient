/**
 * @author chopsuey
 */

Ext.define('NeqMobile.view.Login', {
    extend: 'Ext.Container',
    requires:['NeqMobile.store.Domains', 'NeqMobile.store.Patients'],
    xtype:'Login',

    config: {
        cls: 'x-login',
        scrollable: 'auto',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',
                items: [
                    {
                        xtype: 'button',
                        docked: 'right',
                        itemId: 'settingsbutton',
                        iconCls: 'settings',
                        iconMask: true
                    }
                ]
            },
            {
                xtype: 'formpanel',
                padding: '20 0 0 0',
                layout: {
                    align: 'center',
                    pack: 'center',
                    type: 'vbox'
                },
                scrollable: false,
                items: [
                    {
                        xtype: 'image',
                        id: 'avatar',
                        height: 200,
                        width: 200,
                        margin: '0 0 10 0',
                        src: 'theme/images/user/doctor_avatar_big.jpg'
                    },
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
                                xtype: 'textfield',
                                id: 'textfield',
                                label: 'User:',
                                labelWidth: '40%',
                                name: 'user',
                                value: 'jgansen',
                                autoComplete: true,
                                autoCorrect: true,
                                placeHolder: 'Enter Username'
                            },
                            {
                                xtype: 'passwordfield',
                                id: 'passwordfield',
                                label: 'Password:',
                                labelWidth: '40%',
                                name: 'password',
                                value: 'iswi223<<',
                                placeHolder: 'Enter Password'
                            },
                            {
                                xtype: 'selectfield',
                                id: 'selectfield',
                                label: 'Domain:',
                                labelWidth: '40%',
                                placeHolder: 'Top Right Corner',
                                displayField: 'name',
                                store: 'Domains',
                                valueField: 'id'
                            },
                            {
                                xtype: 'button',
                                id: 'login-button',
                                itemId: 'submitButton',
                                width: 280,
                                text: 'Login'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',

                items: [
                    {
                        xtype: 'image',
                        docked: 'right',
                        height: 158,
                        width: 300,
                        src: 'theme/images/ci/NEQ_Final.png'
                    }
                ]
            }
        ]
    }

});