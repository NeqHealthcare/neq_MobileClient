Ext.define('NeqMobile.model.ChatterUser', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'id',
            'name',
            'isFollowed'
        ],
        proxy:{
            type:'neqproxy',
            customUrl:'/chatter/followingUsers'
        }

    }
});