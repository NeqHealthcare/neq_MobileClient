Ext.define('NeqMobile.controller.Home', {
    extend:'Ext.app.Controller',
    requires:['NeqMobile.view.login.LoginForm', 'NeqMobile.view.Main', 'NeqMobile.view.PatientOverview'],
    views:['Main', 'patient.List', 'patient.Dashboard', 'login.LoginForm', 'PatientOverview', 'Workspace'],
    models:['Patient', 'Session'],
    stores:['Patients'],

    refs:[
        {   ref:'mainview',
            selector:'Main',
            xtype:'Main',
            autoCreate:true},
        {   ref:'loginform',
            selector:'loginform'},
        { ref:'patientoverview',
            selector:'patientoverview',
            autoCreate:true},
        { ref:'workspace',
            selector:'workspace'}
    ],

    init:function () {


        //   Ext.ComponentQuery.query('loginform').down('button').setHandler(this.onLoginSuccess);


        console.log('Init home controller');


        this.control({
                // example of listening to *all* button taps
                'loginform button[ui="confirm"]':{ 'tap':this.onLoginTry
                }}
        );

    },


    onLoginTry:function () {
        console.log('trying to load the session');

        var myvar = Ext.Ajax.request({
            url:'http://192.168.178.33:8080/connection/login',
            method:'GET',
            scope:this,
            params:{username:this.getLoginform().down('formpanel').getFields('name').getValue(), password:this.getLoginform().down('formpanel').getFields('password').getValue(), backendSid:'gnuhealth1'},
            success:function (response, opts) {
                var obj = Ext.decode(response.responseText);
                console.dir(obj);
                if (obj != 'false') {
                    console.log('login accepted');

                    this.onLoginSuccess();
                }
                else
                    console.log('login refused');


            },
            failure:function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
                alert('error in connection to server');
            }
        });

        /*
         my request = new Ext.data.Request({

         url: 'http://theilemann.dyndns.org:8080/connection/login',
         params: {username: 'admin', password: 'iswi223<<', backendSid:'gnuhealth1'},
         failure: function(){console.log('request failed');},
         success: function(){console.log('request succeeded');}
         });
         */
        /*
         //  var mysession = Ext.create('NeqMobile.model.Session',
         //     {id: 1, session: 'edcsenchaacom'});
         Ext.ModelManager.getModel('NeqMobile.model.Session').load(null, {
         params:{

         username: 'admin'
         },
         success: function(user) {
         console.log(user.getId()); //outputs 123
         }});
         //mysession.load('login', {params: bla = 'bluubb'});
         console.log('it works');
         */
        /*
         var mySession = Ext.ModelManager.getModel('Session').load('login', {
         params:{

         },


         success:function (user) {
         console.log('trying to parse the result');
         console.log(user.getId()); //outputs 123


         }})*/
    },


    onLoginSuccess:function () {
        console.log('switching card');
        this.getWorkspace().setActiveItem(this.getPatientoverview());
    }


});