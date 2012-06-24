/**
 * Created with IntelliJ IDEA.
 * User: geekflyer
 * Date: 05.04.12
 * Time: 00:56
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.view.doctor.dashboard.DoctorDashboardLab', {
    extend:'Ext.form.FieldSet',
    requires:['Ext.form.FieldSet', 'Ext.ux.touch.grid.View'],
    xtype:'doctordashboardlab',
    config:{
        title:'New Lab Results',
        margin: '0',
        padding: '5',
        items:[
            {xtype:'touchgridpanel',
                itemId:'doctordashboardlab',
                features:[
                    {
                        ftype:'Ext.ux.touch.grid.feature.Expandable',
                        launchFn:'initialize',
                       // detailCmp:{ xtype:'labdetail'},
                        autoExpand: 'false'
                    }],
                scrollable:false,
                margin: 0,
                padding: 5,
                columns:[

                    {
                        header:'Patient',
                        dataIndex:'patient',
                        width:'20%',
                        style:'text-align: center; padding-left: 1em;' ,
                        renderer:function(value,values)
                        {return values.patient_rec_name + " (" + values.patient + ")"}
                    },
                    {
                        header:'Test Type',
                        dataIndex:'test_rec_name',
                        style:'text-align: center; padding-left: 1em;' ,
                       width:'20%'
                    },
                    {
                        header:'Test ID',
                        dataIndex:'id',
                        style:'text-align: center; padding-left: 1em;' ,
                       width:'20%'
                    }
                ]
            }
        ]
    }
});