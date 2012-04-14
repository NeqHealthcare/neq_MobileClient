/**
 * Created with IntelliJ IDEA.
 * User: geekflyer
 * Date: 05.04.12
 * Time: 00:05
 * To change this template use File | Settings | File Templates.
 */


Ext.define('NeqMobile.controller.DoctorDashboard', {
    extend:'Ext.app.Controller',
    requires:[ 'NeqMobile.store.Doctor'],
    config:{
        refs:{
            doctordashboard:'doctordashboard',
            workspace:'workspace'
        },
        control:{
            //   'workspace patientlist list':{select:'someFunc'},
            'workspace #homebutton':{tap:'onHomeTap'},
            //   'workspace doctordashboard touchgridpanel'ui:{itemtap:'onLabtestTap'},
            'workspace doctordashboard #doctordashboardlab':{beforeitemexpand:'onLabtestTap'}

        },
        routes:{
            'doctordashboard':'switchtohome'
        },
        pollFn:undefined
    },
    init:function () {
        var me = this;

        Ext.Viewport.on('login', this.startpolling, me);
        Ext.Viewport.on('logout', this.stoppolling, me);
    },

    onHomeTap:function () {
        this.redirectTo('doctordashboard');
    },

    switchtohome:function (button, e, eOpts) {
        var workspace = this.getWorkspace();
        workspace.down('#dashboardcontainer').setActiveItem(workspace.down('doctordashboard'));
        this.refreshnewlabresults();
        this.refreshdoctorinfo();
    },
    refreshdoctorinfo:function ()
    {
        var userinfodata = NeqMobile.manager.Session.getSession().get('userinfo');
        userinfodata.load(1, {
            success: function(userinfodata) {
                console.log("userinfodata: " + userinfodata.get('name'));

                userinfodata.LastLogin().each(function(LastLogin) {
                    console.log("LastLogin for userinfodata: " + LastLogin.get('data'));
                });
            }
        });
    },
    onLabtestTap:function (expandfeature, dw, index, item, labrecordoverview, e, eOpts) {
        console.log('labtest on doctordashboard tapped');
        this.showLabResultDetail(dw, labrecordoverview.get('id'), item, labrecordoverview);
        record.markAsRead();
    },
    showLabResultDetail:function (dw, labresultid, item, labrecordoverview) {

        console.log(dw);
        var me = this;
        var labdetailmodel = Ext.ModelMgr.getModel('NeqMobile.model.LabDetail');
        var detailinstance;

        var somefunc = function () {

            detailinstance = Ext.create('NeqMobile.view.patient.detail.LabDetail',
                {
                    //   record:labdetailrecord
                });


            var gotopatientbutton = Ext.create('Ext.Button',
                {
                    iconMask:true,
                    iconCls:'action',
                    text:'Open Patient',
                    width:200,
                    docked:'top',
                    handler:function () {
                        item.expanded = false;
                        me.redirectTo('patient/' + labrecordoverview.get('patient'));
                    }
                }
            );
            detailinstance.add(gotopatientbutton);
            dw.expandfeature.expand(dw, detailinstance, item);
        };

        somefunc();

        labdetailmodel.load(undefined, {
            params:{
                labTestId:labresultid
            },
            scope:me,
            success:function (labdetailrecord) {
                detailinstance.setRecord(labdetailrecord);

                var criteriastore = labdetailrecord.labtestcriteria();


                var myfn = function () {
                    labdetailtable = detailinstance.down('#labdetailtable');
                    labdetailtable.setStore(criteriastore);
                }

                var labdetailtable = detailinstance.down('#labdetailtable');
                if (!labdetailtable) {
                    Ext.defer(myfn, 100)
                }
                else (myfn());


            }
        });
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
        var pollurl = session.get('domain').getCoreURL() + '/labtest/watchlist/check';
        var pollFn = function () {
            Ext.Ajax.request({
                url:pollurl,
                method:'GET',
                scope:me,
                params:{session:session.get('sessionId'),

                    doctor_id:session.get('userinfo').get('physician_id')
                },
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

    refreshnewlabresults:function () {
        var me = this;
        var mystore = Ext.data.StoreManager.lookup('newlabresults');
        if (!mystore) {
            mystore = Ext.create('NeqMobile.store.NewLabResults');
        }
        this.getDoctordashboard().down('#doctordashboardlab').setStore(mystore);
        mystore.load(
            {

                params:{doctor_id:NeqMobile.manager.Session.getSession().get('userinfo').get('physician_id')},

                callback:function () {
//                    console.log('trying to show newlab count')
//                     me.getWorkspace().down('#homebutton').setBadgeText(mystore.getCount());
                }
            }
        );
    },

    createchart:function () {
        var testchart = this.getDoctordashboard().down('testchart');
        testchart.setHeight(750);
//        testchart.setWidth(500);
        var mycircle = new Ext.draw.Component({
            items:[
                {
                    type:'circle',
                    fill:'#ffc',
                    radius:100,
                    x:100,
                    y:100
                }
            ]
        });

        testchart.setItems(mycircle);
    }
});