Ext.Loader.setConfig({
    enabled:true
    //  disableCaching: true // for debugging
});

Ext.Loader.setPath('Ext.ux.touch.grid', './plugin/Ext.ux.touch.grid/Ext.ux.touch.grid');
Ext.Loader.setPath('Ux.PinchZoomImage', 'plugin/Ux.PinchZoomImage/Ux/PinchZoomImage.js');
Ext.Loader.setPath('Ext.ux.CometD', 'plugin/Ext.ux.CometD/CometD.js');
Ext.Loader.setPath('org.cometd', 'plugin/Ext.ux.CometD/lib/cometd.js');
Ext.Loader.setPath('Arkivus.ImageViewer', 'plugin/Arkivus/ImageViewer.js');

Ext.application({
    appFolder:'NeqMobile',
//    viewport:{ xclass: 'NeqMobile.view.Viewport'},
    name:'NeqMobile',
    requires:['Ext.ux.touch.grid.View', 'Ext.ux.touch.grid.feature.Expandable', 'Ext.DateExtras', 'NeqMobile.util.Renderer', 'NeqMobile.proxy.NeqProxy',
        'Ext.field.Password', 'Ext.Img', 'Ext.field.Select', 'Ext.Label', 'Ext.field.Search', 'Ext.field.DatePicker', 'Ext.field.Toggle', 'Ext.MessageBox'],
    controllers:['General', 'Session', 'settings.Domains', 'Workspace', 'PatientView', 'PatientLab', 'UserView','PatientHistoricData'],
    views:['Viewport'],
    stores:['Patients', 'Domains', 'NewLabResults'],
    models:['Patient', 'Session', 'Domain', 'Diagnose'],

    launch:function () {

        Ext.cometd = new Ext.ux.CometD('defaultcometd');

        Ext.Viewport.add(
            Ext.create('NeqMobile.view.Viewport'));
    }
});