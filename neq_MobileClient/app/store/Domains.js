/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 16.01.12
 * Time: 02:03
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.store.Domains', {
    extend:'Ext.data.Store',
    requires:'NeqMobile.model.Domain',
    config:{model:'NeqMobile.model.Domain',
        autoLoad:true,
        autoSync:true
//    data:[
//        {name:'GnuHe1', ip:'theilemann.dyndns.org', port:'8080', backendSid:'gnuhealth1', protocol:'HTTP'},
//        {name:'blaserve', ip:'blablabla.dyndns.org', port:'7777', backendSid:'blabluas', protocol:'HTTP'}
//    ]

    }})
;