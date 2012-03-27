Ext.define('NeqMobile.view.patient.PatientInfoContd2', {
        extend:'Ext.Container',
        xtype:'patientInfoContd2',
        requires:['NeqMobile.view.patient.detail.DocumentContainer'],

        loadDocuement:function (documents) {
          console.log(documents.data);
          this.down('documentcontainer #x-documentTable').setData(documents.data);
        },

        config:{
            styleHtmlContent:true,
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
            hidden: true,
            layout:'vbox',
            items:[
                {
                  xtype:'documentcontainer'
                }
            ]
        }
    }
)