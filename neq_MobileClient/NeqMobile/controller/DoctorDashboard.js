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
            doctordashboard:'doctordashboard',
            workspace:'workspace'
        },
        control:{
            //   'workspace patientlist list':{select:'someFunc'},
            'workspace #homebutton':{tap:'switchtohome'}

        },
        pollFn:undefined
    },
    init:function () {
        var me = this;
        Ext.Viewport.on('login', this.startpolling, me);
        Ext.Viewport.on('logout', this.stoppolling, me);
    },
    stoppolling:function () {
        console.log('stopping polling');
        var pollFn = this.getPollFn();
        clearInterval(pollFn);
    },
    startpolling:function () {
        console.log('starting polling');
        var me = this;
        var session = NeqMobile.manager.Session.getSession();
        var pollurl = session.get('domain').getCoreURL() + '/labtest/check';
        var pollFn = function () {
            Ext.Ajax.request({
                url:pollurl,
                method:'GET',
                scope:me,
                params:{session:session.get('sessionId'), doctor_id:session.get('physician_id')},
                success:function (response, opts) {
                    var obj = Ext.decode(response.responseText);
                    console.log('anzahl neuer labresults: ' + obj.data.length);
                    me.getWorkspace().down('#homebutton').setBadgeText(obj.data.length);
                }
            });
        }
        pollFn();
        pollFn = setInterval(pollFn, 60000);
        this.setPollFn(pollFn);
    },
    switchtohome:function (button, e, eOpts) {
        var workspace = this.getWorkspace();
        workspace.down('#dashboardcontainer').setActiveItem(workspace.down('doctordashboard'));
        this.refreshnewlabresults();
    },
  refreshnewlabresults:function () {
        var me = this;
        var mystore = Ext.data.StoreManager.lookup('newlabresults');
        if (!mystore) {
            mystore = Ext.create('NeqMobile.store.NewLabResults');
        }
        this.getDoctordashboard().down('#doctordashboardlab').setStore(mystore);
        mystore.load(
            {
                callback:function () {
//                    console.log('trying to show newlab count')
//                     me.getWorkspace().down('#homebutton').setBadgeText(mystore.getCount());
                }
            }
        );
    },
    someFunc:function () {


    }
});