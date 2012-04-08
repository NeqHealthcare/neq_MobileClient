var myproxy = Ext.create('NeqMobile.proxy.NeqProxy',
        {
            customUrl:'/document/list'
        }
    )
    ;

var imageThumbNailProxy = Ext.create('NeqMobile.proxy.NeqProxy',
        {
            customUrl:'/document/image/thumbnail'
        }
    )
    ;

var imageProxy = Ext.create('NeqMobile.proxy.NeqProxy',
        {
            customUrl:'/document/image'
        }
    )
    ;


Ext.define('NeqMobile.model.Document', {
    extend:'Ext.data.Model',


    config:{
        fields:[
            "id", "link", "description", "type", "url", "url_big"
        ],
        proxy:myproxy


    },

    setUrl:function () {
        imageProxy.setExtraParam('id', this.id)
        var url = imageThumbNailProxy.buildUrl() + '?session=' + imageThumbNailProxy.getExtraParams().session + '&id=' + this.get('id');
        var url_big = imageProxy.buildUrl() + '?session=' + encodeURI(imageProxy.getExtraParams().session) + '&id=' + this.get('id');
        console.log('url_big');
        this.set('url', url);
        this.set('url_big', url_big);
    }
});