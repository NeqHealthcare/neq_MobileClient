Ext.define('NeqMobile.view.patient.List', {
    extend:'Ext.Container',
    requires:'NeqMobile.store.Patients',
    alias:'widget.patientlist',

    config:{

        layout:'vbox',

        items:[
            {xtype : 'toolbar',
                ui : 'searchbar',
                docked : 'top'
                ,items:[
                {
                    xtype: 'searchfield'
                }
            ]
            },
            {
                xtype:    'list',
                //  dock: 'right',
               // grouped     : true,
               //  indexBar    : true,
                flex :1,
                store :'Patients',
                itemTpl: '<strong>{lastName}</strong>, {firstName} - {age}'
            }
        ]
    },

    initialize:function () {
        console.log('initialize Patients list');
        this.callParent();
    }
});