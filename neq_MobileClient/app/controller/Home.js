Ext.define('NeqMobile.controller.Home', {
    extend : 'Ext.app.Controller',
    requires: ['NeqMobile.view.login.LoginForm','NeqMobile.view.Main','NeqMobile.view.PatientOverview'],
    views : ['Main','patient.List','patient.Dashboard','Testpanel','login.LoginForm','PatientOverview','Workspace'],
    models : ['Patient','UserLoginData'],
    stores : ['Patients','Users'],
    refs : [
        {   ref       : 'mainview',
            selector  : 'Main',
            xtype     : 'Main',
            autoCreate: true},
        { ref: 'mybutton',
            selector : 'button'},
        { ref: 'mytestpanel',
            selector : 'testpanel'},
        {   ref       : 'loginform',
            selector  : 'loginform'},
        { ref: 'patientoverview',
            selector: 'patientoverview',
            autoCreate: true},
        { ref: 'workspace',
            selector : 'workspace'}
    ],

    init : function() {


        //   Ext.ComponentQuery.query('loginform').down('button').setHandler(this.onLoginSuccess);


        console.log('Init home controller');


        this.control({
            // example of listening to *all* button taps
            'button': { 'tap': this.onLoginSuccess

            }});

    },


    onLoginSuccess: function (user, session) {
        console.log('switching card');
this.getWorkspace().setActiveItem(this.getPatientoverview());


    }


});