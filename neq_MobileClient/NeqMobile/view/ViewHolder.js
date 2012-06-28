Ext.define('NeqMobile.view.ViewHolder', {
        extend:'Ext.Container',
        requires:['NeqMobile.view.patient.PatientList', 'NeqMobile.view.doctor.UserView'],
        xtype:'viewholder',

        config:{
            listeners:{
                erased:function (cmp, eOpts) {
                    cmp.destroy();
                    console.log('viewholder destroyed');
                }
            },
            layout:'hbox',
            items:[
                {
                    region:'west',
                    xtype:'patientlist'
                },
                {
                    xtype:'container',
                    layout:{
                        type:'card',
                        animation:'fade'
                    },
                    flex:5,
                    region:'center',
                    itemId:'userviewcontainer'
                }
            ]

        }
    }
);
