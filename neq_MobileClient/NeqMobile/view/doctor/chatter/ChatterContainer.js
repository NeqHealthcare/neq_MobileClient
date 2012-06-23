/**
 * Created by Jan Gansen
 */


var postsContainer = new Ext.XTemplate(
    '<p>id: {id}</p>',
    '<p>message: {message}</p>',
    '<p>timestamp: {timestamp}</p>',
    '<p>parent_id: {parent_id}</p>',
    '<p>creator_id: {creator_id}</p>',
    '<p>child_posts: {child_posts[0].id}</p>',
    '<p>Childs: ',
    '<tpl for="child_posts">',
        '<tpl for=".">',
            '<p>id: {id}</p>',
            '<p>message: {message}</p>',
            '<p>timestamp: {timestamp}</p>',
            '<p>parent_id: {parent_id}</p>',
            '<p>creator_id: {creator_id}</p>',
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
                flex:1,
                id: 'chatterPostContainer',
                cls:'x-chatterPostsContainer',
                itemTpl:postsContainer
            }
        ]
    }
});