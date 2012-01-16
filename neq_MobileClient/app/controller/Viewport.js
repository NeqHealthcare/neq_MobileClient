Ext.define('NeqMobile.controller.Viewport', {
    extend:'Ext.app.Controller',
    views:['Viewport'],

    refs:[
        {   ref:'viewport',
            selector:'viewport',
            xtype:'viewport',
            autoCreate:true},
        { ref:'Workspace',
            selector:'Workspace',
            xtype:'Workspace',
            autoCreate:true}
    ],

    init:function () {

        console.log('Init Viewport controller');
        this.control(
            {
                'patientdashboard button':{'tap':this.onDashboardSubmit}
            }
        );
        this.control(
            {
                'navigationview navigationbar button[align="right"]': { 'tap':this.onLogoutClick}
            }
        );

    },


    onLogoutClick: function()
    {
        //this.getViewport().setActiveItem(this.getLoginform());
       // this.application.fireEvent("logout",this);
    }
,
    onDashboardSubmit: function()
    {this.getWorkspace().push({
                        title: 'Second',
                        html: 'Second view!'
                    });}

});