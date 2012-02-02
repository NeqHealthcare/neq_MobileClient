/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 29.11.11
 * Time: 20:44
 * To change this template use File | Settings | File Templates.
 */
/**
 * @author geekflyer
 */
var tpl = new Ext.XTemplate(
    '<p>ID: {id}</p>',
    '<p>Name: {reclili_name}</p>',

    '<p>Sex: ',
   '{[this.getLongSex(values.sex)]}',
    '</p>',

    '<h1>Diagnoses</h1>',
    '<table border="1"> ',
    '<thead>',
    '<tr>',
    '<th>id</th>',
    '<th>active</th>',
    '<th>name</th>',
    '</tr>',
    '</thead>',
    '<tbody>',
    '<tpl for="diagnoseList">',
    '<tr><td>{id}</td><td>', '{[this.checkAct(values.is_active)]}', '</td><td>{pathology_rec_name}</td></tr>',
    //is_active
    '</tpl>',
    '</tbody',
    '</table>',
    {
        // XTemplate configuration:
        disableFormats:true,
        // member functions:
        getLongSex:function (shortsex) {
            if (shortsex ==="m")
            {return "male"}
            else return "female"
        },
        isBaby:function (age) {
            return age < 1;
        },

        checkAct: function (activness){
            if(activness == 'true'){
                return '<input type="checkbox" checked />'
            }
            else return '<input type="checkbox" unchecked />'
        }

    }
);


Ext.define('NeqMobile.view.patient.Info', {
        extend:'Ext.Container',
        xtype:'patientInfo',
        ref: ['NeqMobile.view.patient.SimpleDiseaseView.tpl1'],

        loadPatient:function (patientrecord) {
          //  data = patientrecord.getFields();
            console.log('setting the data config of the info component');
            console.log('the patients data...');
            console.log(patientrecord.data);
            this.down('component').setData(patientrecord.data);
            }
        ,

        config:{

            styleHtmlContent:true,
            layout:'hbox',
            // layout:'card',
          //  tpl:tpl',

            items: [
                {xtype:'label',
                    flex:1
                    ,
                   tpl:tpl
            },
                {
                    flex:1,
                    xtype:'label',

                   html: '<h1>some other HTML Code</h1>'}


            ]

//            items:[
//                {
//                    xtype:'formpanel',
//                    scrollable:true,{
//                    items:[
//                        {
//                            xtype:'fieldset',
//                             title:'Patient Information',
//                            items:[
//                                {
//                                    html:'<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><th>' +
//                                        '<img src="http://t0.gstatic.com/images?q=tbn:ANd9GcS-l5gDNi9BJ9ucACpWOoIlJggmKALKjdjDn42fgbIipSOUGrdmBg"></th><th>H a m b u r g</th><th>M u e n c h e n' +
//                                        '</th></tr><tr><td>Buletten</td><td>Frikadellen</td><td>Fleischpflanzerl</td></tr><table>'
//
//                                },
//                                {
//                                    xtype:'textfield',
//                                    name:'age',
//                                    label:'Age123',
//                                    value:'123 Yrs',
//                                    readOnly:true
//                                }
//
//                                ,
//                                {
//                                    xtype:'textfield',
//                                    name:'age',
//                                    label:'Age123',
//                                    value:'123 Yrs',
//                                    readOnly:true
//                                }
//                                ,
//                                {   xtype:'textareafield',
//                                    name:'adress',
//                                    label:'Adresse',
//                                    value:'aaa',
//                                    readOnly:true
//
//                                },
//                                {xtype:'button',
//                                    text:'blaa'}
//
//                            ]
//                        },
//                        {
//                            xtype:'fieldset',
//                            title:'Allergies & Critical Information',
//                            items:[
//                                {
//                                    // xtype: ''
//                                }
//                            ]
//
//                        },
//                        {
//                            xtype:'fieldset',
//                            title:'Diseases'
//
//                        },
//                        {
//                            xtype:'fieldset',
//                            title:'Medication'
//
//                        }
//
//                    ]
//                }
//
//            ]


        }

    }


)
;