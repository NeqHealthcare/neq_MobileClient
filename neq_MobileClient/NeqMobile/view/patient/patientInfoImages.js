Ext.define('NeqMobile.view.patient.PatientInfoImages', {
        extend:'Ext.Container',
        xtype:'patientinfoimages',
        requires:['NeqMobile.view.patient.detail.DocumentContainer'],

        loadDocument:function (documentsstore) {

            documentsstore.each(function (record) {
                record.setUrl();
                console.log('loading document')
            });
            image_list = this.down('#documentList')
            image_container = this.down('#imageScreen');
            image_list.setStore(documentsstore);
            this.down('documentcontainer').setActiveItem(0);
        },

        config:{
            layout:'vbox',
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
            items:[
                {
                    xtype:'documentcontainer'
                }
            ]
        }

    }
)