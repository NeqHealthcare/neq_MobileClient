/**
 * Created by JetBrains WebStorm.
 * User: joohee
 * Date: 3/18/12
 * Time: 11:04 PM
 * To change this template use File | Settings | File Templates.
 */

//var myproxy = Ext.create('NeqMobile.proxy.NeqProxy',
//    {customUrl:'/labtest/one'});
//

Ext.define('NeqMobile.model.LabResults', {
        extend:'Ext.data.Model',
        config:{
            fields:[
                'test',
                'patient',
                'name',
                'test_rec_name',
                'patient_rec_name',
                'date_requested',
                'date_analysis'
            ],
            proxy:{
                type:'neqproxy',
                customUrl:'/labtest/one'
            }
        },
        markAsRead:function () {
            var me = this;
            var session = NeqMobile.manager.Session.getSession();
            Ext.Ajax.request({
                url:session.get('domain').getCoreURL() +
                    '/labtest/watchlist/remove',
                method:'GET',
                scope:me,
                params:{session:session.get('sessionId'), labTestRequestId:this.get('test')},
                callback:function (opts, success, response) {
                    var obj = Ext.decode(response.responseText, true);
                    if (obj && obj.success && obj.success === 'true') {
                        console.log('removal successfull');
                    }
                    else {
                        console.log('removal failed')
                    }
                }
            });


        }

    }
)