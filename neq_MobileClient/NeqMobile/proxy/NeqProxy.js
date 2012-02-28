/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 02.02.12
 * Time: 08:01
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.proxy.NeqProxy', {
    extend:'Ext.data.proxy.Rest',

    buildUrl:function (request) {
        var me = this;
       // var url = this.callParent(arguments);


        url = NeqMobile.manager.Session.getSession().get('domain').getCoreURL()

        var me = this;
        console.log('my custom buildurl is called.');
        var url = NeqMobile.manager.Session.getSession().get('domain').getCoreURL() + me.getCustomUrl();
//        if (me.getNoCache()) {
//            url = Ext.urlAppend(url, Ext.String.format("{0}={1}", me.getCacheString(), Ext.Date.now()));
//        }
        return url
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
        customUrl:undefined,
        withCredentials:true,
        reader:{
            type:'json',
            root:'results'
        }
    }});