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
                //ui: 'light',
                title:'NEQ Mobile Application',
                items: [
                    {xtype:'spacer'},
                    {
                        xtype: 'button',
                        align: 'right',
                        itemId: 'settingsbutton',
                        iconCls: 'settings',
                        iconMask: true
                    }

                ]
            },
            {
                xtype: 'formpanel',
                padding: '20 0 0 0',
                layout:
                {
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
                        src: 'theme/images/user/userAvatar.png'
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
                                labelWidth: '112px',
                                name: 'user',
                                autoComplete: true,
                                autoCorrect: true,
                                placeHolder: 'Enter Username'
                            },
                            {
                                xtype: 'passwordfield',
                                id: 'passwordfield',
                                label: 'Password:',
                                labelWidth: '112px',
                                name: 'password',
                                placeHolder: 'Enter Password'
                            },
                            {
                                xtype: 'selectfield',
                                id: 'selectfield',
                                label: 'Domain:',
                                labelWidth: '112px',
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
                layout:
                {
                    align: 'center',
                    pack: 'center',
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'image',
                        height: 73,
                        width: 143,
                        src: 'theme/images/ci/neq_logo_stamped.png'
                    }
                ]
            }
        ]
    }

});