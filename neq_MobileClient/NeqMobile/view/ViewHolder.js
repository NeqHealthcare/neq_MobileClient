Ext.define('NeqMobile.view.ViewHolder', {
        extend:'Ext.Container',
        requires:['NeqMobile.view.patient.PatientList','NeqMobile.view.doctor.UserView'],
        xtype:'viewholder',

        config:{
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
                        itemId:'userviewcontainer',
                        items:[
                            {
                                xtype:'userview'
                            }
                        ]
                    }
            ]

        }
    }
);
