/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 07.01.12
 * Time: 01:04
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.model.Session', {
    extend:'Ext.data.Model',
    config:{
        fields:['user',
            'sessionId',
            'domain',
            'doctor']
    }
});