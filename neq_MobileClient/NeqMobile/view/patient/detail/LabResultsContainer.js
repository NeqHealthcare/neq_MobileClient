/**
 * Created by JetBrains WebStorm.
 * User: joohee
 * Date: 3/18/12
 * Time: 11:04 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.view.patient.detail.LabResultsContainer', {
        extend:'Ext.form.FieldSet',
        xtype:'labresultscontainer',

        config:{
            title:'Laboratory Results',
            margin: '0',
            padding: '5',
            items:[
                  {
                    xtype:'touchgridpanel',
                    itemId:'labresult',
                    scrollable:false,
                      features:[
                          {
                              ftype:'Ext.ux.touch.grid.feature.Expandable',
                              launchFn:'initialize',
                              detailCmp:{ xtype:'labdetail'},
                              config: {autoExpand: 'false'}
                          }
                      ],
                      columns:[
                          {
                              header:'Test ID',
                              dataIndex:'name',
                              style:'text-align: left; padding-left: 1em;',
                              width:'10%'
                          },
                          {
                              header:'Test Type',
                              dataIndex:'test_rec_name',
                              style: 'text-align: right;',
                              cls:'centered-cell',
                              width:'53%'
                          },
                          {
                              header:'Type No.',
                              dataIndex:'test',
                              style:'text-align: center;',
                              width:'7%'
                          },
                          {
                              header:'Date Requested',
                              dataIndex:'date_requested',
                              style:'text-align: right;',
                              width:'15%'
                         //     renderer:NeqMobile.util.Renderer.daterenderer
                          },
                          {
                              header:'Date of the Analysis',
                              dataIndex:'date_analysis',
                              style:'text-align: right;',
                              width:'15%'
                       //       renderer:NeqMobile.util.Renderer.daterenderer
                          }
                      ]
                  }
            ]
        }
    }

)
