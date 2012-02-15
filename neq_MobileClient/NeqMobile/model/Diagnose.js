var myproxy = Ext.create('NeqMobile.proxy.AbstractProxy',
    {customUrl:'/dashboard/one'});

Ext.define('NeqMobile.model.Diagnose', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'id',
            "status"        ,
          "pathology.rec_name"  ,
          "pregnancy_warning",
            "is_active",
            "short_comment",
            "diagnosed_date",
            "healed_date",
            "pathology",
            "disease_severity",
            "is_infectious",
            "is_allergy"
        ],
        proxy:myproxy
//          associations:[
//
//
//
//                        {
//                            type:'belongsTo',
//                            model:'Patient',
//                            primaryKey:'id',
//                            foreignKey:'id',
//                            ownerModel:'Patient',
//                            associatedModel:'Patient',
//                            associationKey:'id' // read child data from child_groups
//                        }]

        // ]
    }
});