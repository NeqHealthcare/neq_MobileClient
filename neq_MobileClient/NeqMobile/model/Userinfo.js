
var myproxy = Ext.create('NeqMobile.proxy.NeqProxy',
    {customUrl:'/user/personalInformation'});

Ext.define('NeqMobile.model.Userinfo', {
        extend:'Ext.data.Model',
        config:{
            fields:['name', 'id', 'physician_id', 'image_url'],
            proxy:myproxy
        }
    }
);
