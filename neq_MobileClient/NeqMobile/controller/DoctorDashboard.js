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
            'workspace #homebutton':{tap:'onHomeTap'}

        },
        pollFn:undefined
    },
    init:function () {
        var me = this;
        Ext.Viewport.on('login', this.startpolling, me);
        Ext.Viewport.on('logout', this.stoppolling, me);

        window.generateData = function (n, floor) {
            var data = [],
                i;

            floor = (!floor && floor !== 0) ? 20 : floor;

            for (i = 0; i < (n || 12); i++) {
                data.push({
                    name:Ext.Date.monthNames[i % 12],
                    data1:Math.floor(Math.max((Math.random() * 100), floor)),
                    data2:Math.floor(Math.max((Math.random() * 100), floor)),
                    data3:Math.floor(Math.max((Math.random() * 100), floor)),
                    2003:Math.floor(Math.max((Math.random() * 100), floor)),
                    2004:Math.floor(Math.max((Math.random() * 100), floor)),
                    2005:Math.floor(Math.max((Math.random() * 100), floor)),
                    2006:Math.floor(Math.max((Math.random() * 100), floor)),
                    2007:Math.floor(Math.max((Math.random() * 100), floor)),
                    2008:Math.floor(Math.max((Math.random() * 100), floor)),
                    2009:Math.floor(Math.max((Math.random() * 100), floor)),
                    2010:Math.floor(Math.max((Math.random() * 100), floor)),
                    iphone:Math.floor(Math.max((Math.random() * 100), floor)),
                    android:Math.floor(Math.max((Math.random() * 100), floor)),
                    ipad:Math.floor(Math.max((Math.random() * 100), floor))
                });
            }
            return data;
        };

        window.store1 = new Ext.create('Ext.data.JsonStore', {
            fields:['name', 'data1', 'data2', 'data3', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', 'iphone', 'android', 'ipad'],
            data:generateData(5, 20)
        });

//        window.chart = Ext.create('Ext.chart.Chart', {
//            layout:'auto',
//            themeCls:'bar1',
//            theme:'Demo',
//            store:store1,
//            animate:true,
//            shadow:false,
//            legend:{
//                position:{
//                    portrait:'bottom',
//                    landscape:'right'
//                },
//                labelFont:'17px Arial'
//            },
//            interactions:[
//                {
//                    type:'reset'
//                },
//                {
//                    type:'togglestacked'
//                },
//                {
//                    type:'panzoom',
//                    axes:{
//                        left:{}
//                    }
//                },
//                'itemhighlight',
//                {
//                    type:'iteminfo',
//                    gesture:'longpress',
//                    panel:{
//                        items:[
//                            {
//                                docked:'top',
//                                xtype:'toolbar',
//                                title:'Details'
//                            }
//                        ]
//                    },
//                    listeners:{
//                        'show':function (me, item, panel) {
//                            panel.setHtml('<ul><li><b>Month:</b> ' + item.value[0] + '</li><li><b>Value: </b> ' + item.value[1] + '</li></ul>');
//                        }
//                    }
//                },
//                {
//                    type:'itemcompare',
//                    offset:{
//                        x:-10
//                    },
//                    listeners:{
//                        'show':function (interaction) {
//                            var val1 = interaction.item1.value,
//                                val2 = interaction.item2.value;
//
//                            chartPanel.descriptionPanel.setTitle(val1[0] + ' to ' + val2[0] + ' : ' + Math.round((val2[1] - val1[1]) / val1[1] * 100) + '%');
//                            chartPanel.headerPanel.getLayout().setAnimation('slide');
//                            chartPanel.headerPanel.setActiveItem(1);
//                        },
//                        'hide':function () {
//                            var animation = chartPanel.headerPanel.getLayout().getAnimation();
//                            if (animation) {
//                                animation.setReverse(true);
//                            }
//                            chartPanel.headerPanel.setActiveItem(0);
//                        }
//                    }
//                }
//            ],
//            axes:[
//                {
//                    type:'Numeric',
//                    position:'bottom',
//                    fields:['2008', '2009', '2010'],
//                    label:{
//                        renderer:function (v) {
//                            return v.toFixed(0);
//                        }
//                    },
//                    title:'Number of Hits',
//                    minimum:0
//                },
//                {
//                    type:'Category',
//                    position:'left',
//                    fields:['name'],
//                    title:'Month of the Year'
//                }
//            ],
//            series:[
//                {
//                    type:'bar',
//                    xField:'name',
//                    yField:['2008', '2009', '2010'],
//                    axis:'bottom',
//                    highlight:true,
//                    showInLegend:true
//                }
//            ]
//        });


    },
    onHomeTap:function () {
        this.switchtohome();
        this.createchart();

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
                params:{session:session.get('sessionId'), doctor_id:session.get('userinfo').get('physician_id')},
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

    createchart:function () {


//       this.getDoctordashboard().down('testchart').add(window.chart);


    }
});