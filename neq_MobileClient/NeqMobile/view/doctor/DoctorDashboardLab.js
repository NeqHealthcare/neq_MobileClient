/**
 * Created with IntelliJ IDEA.
 * User: geekflyer
 * Date: 05.04.12
 * Time: 00:56
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.view.doctor.DoctorDashboardLab', {
    extend:'Ext.form.FieldSet',
    requires:'Ext.form.FieldSet',
    xtype:'doctordashboardlab',
    config:{
        title:'new Lab Results',
        items:[
            {xtype:'touchgridpanel',
                itemId:'doctordashboardlab',
                scrollable:false,

                features:[

                ],
                columns:[
                    {
                        header:'Patient ID',
                        dataIndex:'patient',
                        width:'20%'
                    },
                    {
                        header:'Patient Name',
                        dataIndex:'patient_rec_name',
                        width:'20%'
                    },
                    {
                        header:'No.',
                        dataIndex:'test',
                        style:'text-align: left; padding-left: 1em;',
                        width:'20%'
                    },
                    {
                        header:'Test Name',
                        dataIndex:'name',
                        style:'text-align: center;',
                        width:'20%'
                    },
                    {
                        header:'Test Type',
                        dataIndex:'test_rec_name',
                        style:'text-align: center;',
                        cls:'centered-cell',
                        width:'20%'
                    }
                ]
            }
        ]
    }
});