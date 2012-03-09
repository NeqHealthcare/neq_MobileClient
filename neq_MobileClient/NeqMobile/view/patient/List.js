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
                        flex:1,
                        cls:'x-patientslist',
                        itemTpl:['<div id="list-patient-image"></div>',
                            '<span id="list-block-bold">{rec_name}<br />{age} - {sex}&nbsp;</span>',
                            '<span id="list-block-normal">{latestDiagnoseRecName}&nbsp;</span>'].join('')
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