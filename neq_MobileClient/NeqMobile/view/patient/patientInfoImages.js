Ext.define('NeqMobile.view.patient.PatientInfoImages', {
        extend:'Ext.Container',
        xtype:'patientinfoimages',
        requires:['NeqMobile.view.patient.detail.DocumentContainer'],

        loadDocument:function (documentsstore) {
            //console.log(documentsstore.data);
            //documentsstore.setUrl();

            //var data = Ext.ModelMgr.getModel('NeqMobile.model.Document');
            //con            sole.log(data);
            //data.setUrl();
            documentsstore.each(function (record) {
                console.log(record.data);
                record.setUrl();
                console.log(record.data);
            });
            image_list = this.down('#documentList')
            image_container = this.down('#imageScreen');
            image_list.setStore(documentsstore);
            //image_container.src(documentsstore.get());
            this.down('#patientListContainer').setActiveItem(0);
            //image_list.itemtap(this, index, target, record, e, eOpts )

            //     setUrl();

            // Ext.repaint();
        },

        config:{
            //scrollable: true,

            layout:'vbox',
            items:[
                {
                    xtype:'documentcontainer'
                }
            ]
        }

    }
)