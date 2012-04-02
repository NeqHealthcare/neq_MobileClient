Ext.Loader.setConfig({
    enabled:true,
    disableCaching: true // for debugging
});

Ext.Loader.setPath('Ext.ux.touch.grid','./plugin/Ext.ux.touch.grid/Ext.ux.touch.grid');

Ext.application({
    appFolder:'NeqMobile',
//    viewport:{ xclass: 'NeqMobile.view.Viewport'},
    name:'NeqMobile',
    requires:['Ext.ux.touch.grid.View','Ext.ux.touch.grid.feature.Expandable','Ext.DateExtras','NeqMobile.util.Renderer','NeqMobile.proxy.NeqProxy',
        'Ext.field.Password','Ext.Img','Ext.field.Select','Ext.Label','Ext.field.Search','Ext.field.DatePicker','Ext.field.Toggle'],
    controllers:['General', 'Session', 'NeqMobile.controller.settings.Domains', 'Workspace','PatientDashboard','PatientDashboardLab'],
    views:['NeqMobile.view.settings.Domains', 'Viewport', 'NeqMobile.view.patient.PatientList', 'NeqMobile.view.patient.PatientDashboard','NeqMobile.view.doctor.DoctorDashboard', 'Workspace'],
    stores:['Patients', 'Domains'],
    models:['Patient', 'Session', 'Domain','Diagnose'],

    launch:function () {
        Ext.Viewport.add(
            Ext.create('NeqMobile.view.Viewport'));
    }
});