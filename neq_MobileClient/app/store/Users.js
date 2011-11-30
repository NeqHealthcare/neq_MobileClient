Ext.define('NeqMobile.store.Users', {
    extend: 'Ext.data.Store',
    requires: 'NeqMobile.model.UserLoginData',
    model: 'NeqMobile.model.UserLoginData',
    autoLoad: true
});