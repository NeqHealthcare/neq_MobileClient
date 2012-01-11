Ext.define('NeqMobile.controller.Home', {
    extend:'Ext.app.Controller',
    requires:['NeqMobile.view.login.LoginForm', 'NeqMobile.view.Main', 'NeqMobile.view.PatientOverview'],
    views:['Main', 'patient.List', 'patient.Dashboard', 'login.LoginForm', 'PatientOverview', 'Workspace'],
    models:['Patient', 'Session'],
    stores:['Patients'],

    refs:[
        {   ref:'main',
            selector:'main',
            xtype:'main',
            autoCreate:true},
        { ref:'patientoverview',
            selector:'patientoverview',
            autoCreate:true},
        { ref:'workspace',
            selector:'workspace',
            xtype:'workspace',
            autoCreate:true},
        { ref:'patientdashboard',
            selector:'patientdashboard',
            autoCreate:true}
    ],

    init:function () {

        //   Ext.ComponentQuery.query('loginform').down('button').setHandler(this.onLoginSuccess);

        console.log('Init home controller');
        this.control(
            {
                'patientdashboard button':{'tap':this.onDashboardSubmit}
            }
        )

    },




    onDashboardSubmit: function()
    {this.getWorkspace().push({
                        title: 'Second',
                        html: 'Second view!'
                    });}

});