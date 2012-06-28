/**
 * Created by Jan Gansen
 */
var postsContainer = new Ext.XTemplate(
    '<div class="chatterPostWrapper">',
        '<div class="postImage"><img src="http://{image_url}?width=45&height=45" /></div>',
        '<div class="postContent">',
            '<div><span class="postCreatorName">{creator_name}&nbsp;</span>{message}</div>',
            '<div class="postDate">{[NeqMobile.util.Renderer.longToTimerenderer(values.timestamp)]}</div>',
        '</div>',
        '<div style="clear:both;"></div>',
    '</div>',
    '<tpl for="child_posts">',
        '<tpl for=".">',
            '<div class="chatterCommentWrapper" style="background: #F5FDFF;background: -moz-linear-gradient(top, #fff 0%, #F5FDFF 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fff), color-stop(100%,#F5FDFF));background: -webkit-linear-gradient(top, #fff 0%,#F5FDFF 100%);">',
                '<div class="postImage"><img src="http://{image_url}?width=38&height=38" /></div>',
                '<div>',
                    '<div><span class="postCreatorName">{creator_name}&nbsp;</span>{message}</div>',
                    '<div class="postDate">{[NeqMobile.util.Renderer.longToTimerenderer(values.timestamp)]}</div>',
                '</div>',
                '<div style="clear:both;"></div>',
            '</div>',
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
                style:'background-color:white;',
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