/**
 * Created with IntelliJ IDEA.
 * User: geekflyer
 * Date: 05.04.12
 * Time: 00:05
 * To change this template use File | Settings | File Templates.
 */


Ext.define('NeqMobile.controller.DoctorDashboard', {
    extend:'Ext.app.Controller',

    config:{
        refs:{
            patientdashboard:'patientdashboard',
            workspace:'workspace'
        },
        control:{
         //   'workspace patientlist list':{select:'someFunc'}
        },
        pollFn:undefined
    }
    ,
    init:function()
    {this.callParent(arguments);

    },
    someFunc:function()
    {
        var session = NeqMobile.manager.Session.getSession();

        var pollurl = session.get('domain').getCoreURL() + '/labtest/check';


        var pollFn = function () {Ext.Ajax.request({
            url: pollurl,
            method: 'GET',
            scope:this,
            params: {session:session.get('sessionId'),doctor_id:session.get('id')},
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                console.dir(obj);
                console.log('anzahl neuer labresults: ' + obj.data.length);
            },
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        }); }

      pollFn();
      var bla = setInterval(pollFn,10000);

    }
});