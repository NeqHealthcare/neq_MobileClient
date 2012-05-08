/**
 * Created with IntelliJ IDEA.
 * User: geekflyer
 * Date: 06.05.12
 * Time: 04:11
 * To change this template use File | Settings | File Templates.
 */

mystore = Ext.create('Ext.data.Store', {
    model: 'NeqMobile.model.HeartbeatCoordinate',
    data : [
        {x: 0.1,    y: 0.1} ,
        {x: 0.2,    y: 0.2}
    ]
});

Ext.define('NeqMobile.view.patient.measurements.HeartbeatLive',
    {
        extend:'Ext.Panel'
        //html:'<canvas id="heartbeatcanvas" width="400" height="100"></canvas>'
  }
)