/**
 * Created by Jan Gansen
 */
var postsContainer = new Ext.XTemplate(
    '<div id="chatter-post-image"><img src="{image_url}" /></div>',
    '<span id="list-block-normal">{message}</span>',
    '<div id="list-block-thin"> {creator_name}  {[NeqMobile.util.Renderer.dateTimerenderer(values.timestamp)]}</div>',
    '<p>Comments: ',
    '<tpl for="child_posts">',
        '<tpl for=".">',
            '<div id="chatter-post-image"><img src="http://{image_url}?width=45&height=45" /></div>',
            '<span id="list-block-normal">{message}</span>',
            '<div id="list-block-thin"> {creator_name}  {[NeqMobile.util.Renderer.longToTimerenderer(values.timestamp)]}</div>',
        '</tpl>',
    '</tpl></p>'
)


Ext.define('NeqMobile.view.doctor.chatter.ChatterContainer', {
    extend:'Ext.Container',
    requires:['NeqMobile.view.doctor.chatter.NewPostContainer','NeqMobile.store.ChatterPosts'],
    xtype:'chattercontainer',

    config:{
        styleHtmlContent:true,
        scrollable: false,
        layout: 'vbox',
        margin: 0,
        padding: 15,
        items:[
            {
                xtype:'newpostcontainer'

            },
            {
                xtype:'list',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                flex: 1,
                id: 'chatterPostContainer',
                cls:'x-chatterPostsContainer',
                itemTpl:postsContainer
            }
        ]
    }
});