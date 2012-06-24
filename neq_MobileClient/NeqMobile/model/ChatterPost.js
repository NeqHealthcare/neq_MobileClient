/**
 * Created by Jan Gansen
 */

// Client code
Ext.define('NeqMobile.model.ChatterPost', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'message',{name:'timestamp', type:'date', dateFormat:'time'} ,'creator_name','image_url','child_posts'],
        proxy:{
            type:'neqproxy',
            customUrl:'/chatter/posts'
        }
    }
})

