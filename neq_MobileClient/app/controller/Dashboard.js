/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 14.01.12
 * Time: 02:57
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.controller.Dashboard', {
    extend:'Ext.app.Controller',
    requires:['NeqMobile.view.login.LoginForm', 'NeqMobile.view.Main', 'NeqMobile.view.PatientOverview'],
    views:['Viewport', 'patient.List', 'patient.Dashboard', 'login.LoginForm', 'PatientOverview', 'Workspace'],
    models:['Patient', 'Session'],
    stores:['Patients'],