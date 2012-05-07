Ext.define('NeqMobile.view.doctor.DoctorNewsFeedDetail', {
    extend: 'Ext.form.Panel',
    xtype: 'doctornewsfeeddetail',

    config: {
        padding: 5,
        scrollable: false,
        items: [
            {
                xtype: 'textareafield',
                name:'description',
                padding: 5,
                //margin: 5,
                //width: 250,
                labelWidth: 0,
                readOnly: true,
                id: 'doctornewsfeeddetail'//,
                //html: '<p><h2>Dies ist eine Beispielnews</h2></br> Lorum ipsum dolorum Lorum ipsum dolorum Lorum ipsum dolorum</p>'
            }
        ]
    }

});