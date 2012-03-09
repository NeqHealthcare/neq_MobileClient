Ext.define('NeqMobile.view.patient.List', {
    extend:'Ext.Panel',
    requires:'NeqMobile.store.Patients',
    xtype:'patientList',

    initialize:function () {
        this.callParent(arguments);

//        this.on({
//            show:function (view) {
//                console.log('applying store');
//                this.down('list').setStore(Ext.data.StoreManager.lookup('myPatientsStore'));
//                Ext.data.StoreManager.lookup('myPatientsStore').load();
//            }
//        });
    },


    config:{

        layout:'hbox',

        items:[
            {
                xtype:'panel',
                id:'patientListContainer',
                layout:'hbox',
                hideAnimation: 'slideOut',
                items:[
                    {xtype:'toolbar',
                        ui:'searchbar',
                        docked:'top', items:[
                        {
                            xtype:'searchfield',
                            itemId:'patientsearchfield'
                        }
                    ]
                    }
                    ,
                    {
                        xtype:'list',
                        // styleHtmlContent:true,
                        //  dock: 'right',
                        // grouped     : true,
                        //  indexBar    : true,
                        //styleHtmlContent:true,
                        // flex:1,

                        flex:1,
                        cls:'x-patients',
                        //store:'NeqMobile.store.Patients',
                        itemTpl:['<div class="patientImage" style="float: left; height: 37px; width: 37px; margin-right: 10px; background-size: cover; background-position: center center; background: #ddd; @include border-radius(3px); -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6); background-image:url(theme/images/user/DefaultAvatar_small.jpg);"></div>',
                            //'<div class="headshot" style="background-image:url(resources/images/headshots/{headshot});"></div>',
                            '<span style="display: block; font-size: 14px; font-weight: bold; color: #666;">{rec_name}</strong><br />' +
                                '{[NeqMobile.util.Renderer.daterenderer(values.age)]} ' +
                                '- {sex}&nbsp;</span>',
                            '<span style="display: block; font-size: 14px; font-weight: normal; color: #666;">{latestDiagnoseRecName}&nbsp;</span>'].join('')

                        /*
                         itemTpl:'<table>' +
                         '<tr>' +
                         '<td rowspan="2">' +
                         '<img width="40" height="40" src="theme/images/user/DefaultAvatar_small.jpg" />' +
                         '</td>' +
                         '<td>' +
                         '<strong>{rec_name}</strong>  - {[values.age.split(" ")\[0\]]} - {sex}' +
                         '</td>' +
                         '</tr>' +
                         '<tr>' +
                         '<td>' +
                         '<table>' +
                         '<tr>' +
                         '<td>{latestDiagnoseRecName} </td>' +
                         '</tr>' +
                         '</table>' +
                         '</td>' +
                         '</tr>' +
                         '</table>'
                         */
                    }
                ]
            },
            {
                xtype:'button',
                width: 5,
                id:'x-hidePatientListButton',
                iconCls: 'arrow_left',
                iconMask: true
            }
        ]
    }

});