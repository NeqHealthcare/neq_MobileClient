
Ext.define('NeqMobile.model.Userinfo', {
        extend:'Ext.data.Model',
        config: {
            fields:['name', 'id', 'physician_id', 'image_url'],

            proxy: {
                type:'neqproxy',
                customUrl:'/user/personalInformation'
            },

            hasMany: 'NeqMobile.model.LastLogin'
        }


    }
);

Ext.define('NeqMobile.model.LastLogin', {
        extend:'Ext.data.Model',
        config: {
            fields: ['success', 'data'],

            proxy: {
                type:'neqproxy',
                customUrl:'/usr/lastLogin'
            },

            belongsTo: 'NeqMobile.model.Userinfo'
        }
    }
);
