/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 07.01.12
 * Time: 01:04
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.model.Session', {
    extend: 'Ext.data.Model',
    fields: ['id','session'],
    proxy: {
        type: 'rest',
        url : 'http://theilemann.dyndns.org:8080/connection/login'
    }
});