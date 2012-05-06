Ext.Loader.setConfig({
    enabled:true,
    disableCaching: true // for debugging
});

Ext.Loader.setPath('Ext.ux.touch.grid','./plugin/Ext.ux.touch.grid/Ext.ux.touch.grid');
Ext.Loader.setPath('Ext.plugin.Pinchemu','plugin/Ext.plugin.Pinchemu/Ext.plugin.Pinchemu.js');
Ext.Loader.setPath('Ux.PinchZoomImage','plugin/Ux.PinchZoomImage/Ux/PinchZoomImage.js');

Ext.application({
    appFolder:'NeqMobile',
//    viewport:{ xclass: 'NeqMobile.view.Viewport'},
    name:'NeqMobile',
    requires:['Ext.ux.touch.grid.View','Ext.ux.touch.grid.feature.Expandable','Ext.DateExtras','NeqMobile.util.Renderer','NeqMobile.proxy.NeqProxy',
        'Ext.field.Password','Ext.Img','Ext.field.Select','Ext.Label','Ext.field.Search','Ext.field.DatePicker','Ext.field.Toggle'],
    controllers:['General', 'Session', 'settings.Domains', 'Workspace','PatientView','PatientLab','DoctorDashboard', 'PatientHistoricData'],
    views:['Viewport'],
    stores:['Patients', 'Domains','NewLabResults'],
    models:['Patient', 'Session', 'Domain','Diagnose'],

    launch:function () {
        Ext.Viewport.add(
            Ext.create('NeqMobile.view.Viewport'));
    }
});