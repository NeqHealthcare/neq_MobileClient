
var myproxy = Ext.create('NeqMobile.proxy.NeqProxy',
    {customUrl:'/personalInformation'});

Ext.define('NeqMobile.model.Doctor', {
        extend:'Ext.data.Model',
        config:{
            fields:['name', 'id', 'physician_id', 'image_url'],
            proxy:myproxy
        }
    }
);
