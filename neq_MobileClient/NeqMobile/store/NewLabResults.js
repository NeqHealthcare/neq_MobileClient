/**
 * Created with IntelliJ IDEA.
 * User: geekflyer
 * Date: 05.04.12
 * Time: 19:19
 * To change this template use File | Settings | File Templates.
 */


Ext.define('NeqMobile.store.NewLabResults', {
        extend:'NeqMobile.store.LabResults',
        config:{
            storeId:'newlabresults',
            proxy:{
                type:'neqproxy',
                customUrl:'/labtest/watchlist/check/details'
            }
        }}
);