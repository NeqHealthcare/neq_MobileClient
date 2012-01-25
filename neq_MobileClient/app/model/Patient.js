Ext.define('NeqMobile.model.Patient', {
    extend:'Ext.data.Model',
    config:{

        fields:['id', 'rec_name', 'doctor', 'firstName', 'lastName', 'age', 'sex', 'other', 'disease', 'station', 'maritalstatus'],
        proxy:{
            type:'ajax',
            url:function () {
                var myurl = NeqMobile.manager.Session.getSession().getCoreURL() + '/patients/all'
                return myurl
            },
            extraParams:{session:function () {
                return NeqMobile.manager.Session.getSessionId()
            }},
            reader:{
                type:'json',
                rootProperty:'results'
            }
        }
    }


})
;