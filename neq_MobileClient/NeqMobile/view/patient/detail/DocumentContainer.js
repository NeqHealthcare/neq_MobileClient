var document = [
                    {
                     data: '',
                     description: '',
                     link: 'no requests',
                     type: ''

                    }
                ]


Ext.define('NeqMobile.view.patient.detail.DocumentContainer', {

        extend:'Ext.form.FieldSet',
        xtype:'documentcontainer',
        config:{
            title:'Docuements',
            margin: '0',
            padding: '5',
            items:[
                {
                    xtype: 'panel',
                    id: 'x-documentTable',
                    data: testdata,
                    tpl: documentTable
                }
            ]
        }

    }
)
