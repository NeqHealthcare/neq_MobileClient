/**
 * Created with IntelliJ IDEA.
 * User: geekflyer
 * Date: 10.04.12
 * Time: 22:40
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.model.LabTestCriteria', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'name',
            'upper_limit',
            'lower_limit',
            'result',
            'excluded',
            'warning',
            'units_rec_name'
        ]
    }});