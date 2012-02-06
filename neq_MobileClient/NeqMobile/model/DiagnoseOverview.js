var myproxy = Ext.create('NeqMobile.proxy.AbstractProxy',
    {customUrl:'/diagnose/one'});

Ext.define('NeqMobile.model.DiagnoseOverview', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'id',
            {name:"status", type:'boolean'},
            {name:"pathology.rec_name", type:'string'},
            {name:"pregnancy_warning", type:'boolean'},
            {name:"is_active", type:'boolean'},
            {name:"short_comment", type:'string'},
            {name:"diagnosed_date", type:'string'},
            {name:"healed_date",type:'date'},
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