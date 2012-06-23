/**
 * Created by Jan Gansen
 */

// Client code
Ext.define('NeqMobile.model.ChatterPost', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'message',{name:'timestamp', type:'date', dateFormat:'time'} ,'parent_id','creator_id','image_url','child_posts'],
        proxy:{
            type:'neqproxy',
            customUrl:'/chatter/posts'
        }
    }
})

