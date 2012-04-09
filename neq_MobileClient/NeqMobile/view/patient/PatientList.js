Ext.define('NeqMobile.view.patient.PatientList', {
    extend:'Ext.Panel',
    requires:'NeqMobile.store.Patients',
    xtype:'patientlist',
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
                        }                               ,
                        { iconMask: true, iconCls: 'refresh', itemId: 'refreshbutton' }
                    ]
                    },


                    {
                        xtype:'list',
                        flex:1,
                        cls:'x-patientslist',
                        itemTpl:['<div id="list-patient-image"></div>',
                            '<span id="list-block-bold">{rec_name}&nbsp;({id})<br />' +
                                '{[NeqMobile.util.Renderer.daterenderer(values.age)]}' +
                                ' - {sex}&nbsp;</span>',
                            '<span id="list-block-normal">{latestDiagnoseRecName}&nbsp;</span>'].join('')
                    }
                ]
            },
            {
                xtype:'button',
                width: 5,
                id:'showHidePatientListButton',
                itemId:'showHidePatientListButton',
                iconCls: 'arrow_left',
                iconMask: true
            }
        ]
    }

});