Ext.define('NeqMobile.model.ChatterUser', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'id',
            'image_url',
            'rec_name',
            'isFollowed'
        ],
        proxy:{
            type:'neqproxy',
            customUrl:'/chatter/people'
        }

    }
});