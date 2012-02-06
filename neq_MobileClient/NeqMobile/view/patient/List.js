Ext.define('NeqMobile.view.patient.List', {
    extend:'Ext.Container',
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

        layout:'vbox',

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
                styleHtmlContent:true,
                flex:1,
                // store:'NeqMobile.store.Patients',
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
            }
        ]
    }

});