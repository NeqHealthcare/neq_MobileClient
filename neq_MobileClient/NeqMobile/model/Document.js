var myproxy = Ext.create('NeqMobile.proxy.NeqProxy',
    {customUrl:'/document/list'});

Ext.define('NeqMobile.model.Document', {
    extend:'Ext.data.Model',
    config:{
        fields:[
          "link", "description", "type"
        ],
        proxy:myproxy

    }
});