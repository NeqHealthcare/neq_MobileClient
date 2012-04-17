/*
 {"success":"true",
 "data":[{"name":"Jan Gansen","id":"3","physician_id":"1","image_url":"http://i43.tinypic.com/29lzamh.png",
 "number_of_patients":"5","last_login":"1334589916691"}]}
 */
Ext.define('NeqMobile.model.Userinfo', {
        extend:'Ext.data.Model',
        config: {
            fields:['name',
                    'id',
                    'physician_id',
                    'image_url',
                    'number_of_patients',
                    {name:'last_login', type:'date',dateFormat:'time'}
            ],

            proxy: {
                type:'neqproxy',
                customUrl:'/user/personalInformation'
            }
        }


    }
);
