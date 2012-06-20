/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 02.02.12
 * Time: 08:01
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.proxy.NeqProxy', {
    extend:'Ext.data.proxy.Rest',
    alias : 'proxy.neqproxy',
    buildUrl:function (request) {

//        var me = this;
//        var url = NeqMobile.manager.Session.getSession().get('domain').getCoreURL() + me.getCustomUrl();
////        if (me.getNoCache()) {
////            url = Ext.urlAppend(url, Ext.String.format("{0}={1}", me.getCacheString(), Ext.Date.now()));
////        }
//        return url

          var me        = this,
            operation = request.getOperation(),
            records   = operation.getRecords() || [],
            record    = records[0],
            model     = me.getModel(),
            idProperty= model.getIdProperty(),
            format    = me.getFormat(),
            url       = me.getUrl(request),
            params    = request.getParams() || {},
            id        = (record && !record.phantom) ? record.getId() : params[idProperty];

        var nequrl = NeqMobile.manager.Session.getSession().get('domain').getCoreURL() + me.getCustomUrl();

        request.setUrl(nequrl);

        return me.callParent([request]);
    },
    getExtraParams:function () {
        var params = this.callParent(arguments);
        if (params) {
            params.session = NeqMobile.manager.Session.getSessionId()
        }
        else params = {session:NeqMobile.manager.Session.getSessionId()}
        return params
    },
    config:{
        appendId:false,
        customUrl:undefined,

        reader:{
            type:'json',
            rootProperty:'data'
        }
    }});