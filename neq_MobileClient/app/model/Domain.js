/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 16.01.12
 * Time: 01:00
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.model.Domain', {
        extend:'Ext.data.Model',
        fields:['id', 'name', 'ip', 'port', 'backendSid', 'protocol'],
        getCoreURL:function () {
            {
                return this.get('protocol') + '://' + this.get('ip') + ':' + this.get('port')
            }
        },
        proxy:{
            type:'localstorage',
            id:'NeqMobile-Domains'
        }
    }
);
