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
                //  dock: 'right',
                // grouped     : true,
                //  indexBar    : true,
                flex:1,
                // store:'NeqMobile.store.Patients',
                itemTpl:'{id}  <strong>{rec_name}</strong>' +
                    '<br>' +
                    'age: {[values.age.split(" ")\[0\]]} ' +
                    //'{[myage.slice(0,myage.length - 1)]}' +
                    ' actual disease: {latestDiagnoseRecName}' +
                    '  sex: {sex}'
            }
        ]
    }

});