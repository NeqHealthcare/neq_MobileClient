
Ext.define('NeqMobile.model.Userinfo', {
        extend:'Ext.data.Model',
        config:{
            fields:['name', 'id', 'physician_id', 'image_url'],
            proxy:
            {type:'neqproxy',
            customUrl:'/user/personalInformation'}
        }
    }
);
