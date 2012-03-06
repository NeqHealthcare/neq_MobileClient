Ext.Loader.setConfig({
    enabled:true,
    disableCaching: true // for debugging
});

Ext.Loader.setPath('Ext.ux.touch.grid','./plugin/Ext.ux.touch.grid/Ext.ux.touch.grid');

Ext.application({
    appFolder:'NeqMobile',
//    viewport:{ xclass: 'NeqMobile.view.Viewport'},
    name:'NeqMobile',
    requires:['Ext.ux.touch.grid.View','Ext.ux.touch.grid.feature.Expandable','Ext.DateExtras'],
    controllers:['General', 'Session', 'NeqMobile.controller.settings.Domains', 'Dashboard'],
    views:['NeqMobile.view.settings.Domains', 'Viewport', 'NeqMobile.view.patient.List', 'Dashboard', 'Workspace'],
    stores:['Patients', 'Domains'],
    models:['Patient', 'Session', 'Domain','Diagnose'],

    launch:function () {
        Ext.Viewport.add(
            Ext.create('NeqMobile.view.Viewport'));
    }
});