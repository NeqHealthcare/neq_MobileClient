Ext.Loader.setConfig({
    enabled:true,
    disableCaching: true // for debugging
});

Ext.application({
    appFolder:'NeqMobile',
//    viewport:{ xclass: 'NeqMobile.view.Viewport'},
    name:'NeqMobile',
    controllers:['General', 'Session', 'NeqMobile.controller.settings.Domains', 'Dashboard'],
    views:['NeqMobile.view.settings.Domains', 'Viewport', 'NeqMobile.view.patient.List', 'Dashboard', 'Workspace'],
    stores:['Patients', 'Domains'],
    models:['Patient', 'Session', 'Domain','Diagnose'],

    launch:function () {
        Ext.Viewport.add(
            Ext.create('NeqMobile.view.Viewport'));
    }
});