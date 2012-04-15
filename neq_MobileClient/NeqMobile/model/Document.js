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
        proxy:
        {
            type:'neqproxy',
            customUrl:'/document/list'
        }
    },

    setUrl:function () {
        var coreurl = NeqMobile.manager.Session.getSession().get('domain').getCoreURL();
        imageProxy.setExtraParam('id', this.id)
        var url = coreurl + imageThumbNailProxy.getCustomUrl() + '?session=' + imageThumbNailProxy.getExtraParams().session + '&id=' + this.get('id');
        var url_big = coreurl + imageProxy.getCustomUrl() + '?session=' + encodeURI(imageProxy.getExtraParams().session) + '&id=' + this.get('id');
        this.set('url', url);
        this.set('url_big', url_big);
    }
});