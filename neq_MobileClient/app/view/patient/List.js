/**
 * @author geekflyer
 */
//Ext.define('indexbar', Ext.dataview.IndexBar);

Ext.define('NeqMobile.view.patient.List', {
    extend:'Ext.Container',
    requires:'NeqMobile.store.Patients',
    alias:'widget.patientlist',

    config:{

        layout:'hbox',

        items:[


            //new Ext.dataview.List({{
            {
                xtype: 'list',
              //  dock: 'right',
              //  grouped     : true,
            //   indexBar    : true,
                flex:1,
                store:'Patients',
                itemTpl:'<strong>{lastName}</strong>'

            },
            {

                xtype:'fieldset',
                flex:2,
                title:'Server Profile',
                items:[
                    {
                        xtype:'textfield',
                        label:'Profile',
                        name:'profile'
                    },
                    {
                        xtype:'textfield',
                        label:'Host',
                        name:'host'
                    },
                    {
                        xtype:'textfield',
                        label:'Database',
                        name:'database'
                    },
                    {
                        xtype:'textfield',
                        label:'User name',
                        name:'server'
                    },
                    {xtype:'button',
                        ui:'confirm',
                        text:'Save',
                        action:'saveServerProfile'}  // action gibt es nicht mehr!! Du meinst wahrscheinlich das property 'handler' --> siehe Sencha Docs Button
                ]
            }



//            {
//                flex: 3,
//                xtype:'button',
//                text:'deimudda',
//                handler:function () {
//
//                    // this.up().down('list').setStore({
//                    // fields : ['name'],
//                    // data : [{
//                    // id : 1,
//                    // name : 'Cowper'
//                    // }, {
//                    // id : 2,
//                    // name : 'Everett'
//                    // }, {
//                    // id : 3,
//                    // name : 'University'
//                    // }, {
//                    // id : 4,
//                    // name : 'Forest'
//                    // }]
//                    // });
//
//                    if (this.up().Store == null) {
//                        console.log('no Store in this list');
//                    }
//
//                    this.up().down('list').refresh();
//                    console.log('refreshing list');
//                }
//            }
        ]
    }

   /* initialize:function () {
        console.log('initialize Patients List View');
        this.callParent();
    }*/
});