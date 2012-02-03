/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 02.02.12
 * Time: 08:01
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.proxy.Patient', {
    extend:'Ext.data.proxy.Ajax',
    buildUrl:function (request) {
        var me = this;
        console.log('my custom buildurl is called.');
        var url = NeqMobile.manager.Session.getSession().get('domain').getCoreURL() + '/patients/all_for_user';
        if (me.getNoCache()) {
            url = Ext.urlAppend(url, Ext.String.format("{0}={1}", me.getCacheString(), Ext.Date.now()));
        }
        return url
    },
    getExtraParams:function () {
        return {session:NeqMobile.manager.Session.getSessionId()}
    },
    config:{
        reader:{
            type:'json',
            root:'results'
        }
    }});
