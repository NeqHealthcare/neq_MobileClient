/**
 * Created by Jan Gansen
 */
// Server Data
//{
//    "groups": {
//    "id": 10,
//        "parent_id": 100,
//        "message": "Main Group",
//        "parent_group": {
//        "id": 100,
//            "parent_id": null,
//            "message": "Parent Group"
//    },
//    "child_posts": [{
//        "id": 2,
//        "parent_id": 10,
//        "message": "Child Group 1"
//    },{
//        "id": 3,
//        "parent_id": 10,
//        "message": "Child Group 2"
//    },{
//        "id": 4,
//        "parent_id": 10,
//        "message": "Child Group 3"
//    }]
//}
//}

// Client code
Ext.define('NeqMobile.model.ChatterPost', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'message',{name:'timestamp', type:'date', dateFormat:'time'} ,'parent_id','creator_id'],
        proxy:{
            type:'neqproxy',
            customUrl:'/chatter/post'
        },
        associations: [{
            type: 'hasMany',
            model: 'NeqMobile.model.ChatterPost',
            primaryKey: 'id',
            foreignKey: 'parent_id',
            autoLoad: true,
            associationKey: 'child_posts' // read child data from child_groups
        }, {
            type: 'belongsTo',
            model: 'NeqMobile.model.ChatterPost',
            primaryKey: 'id',
            foreignKey: 'parent_id',
            associationKey: 'parent_post' // read parent data from parent_group
        }]
    }
})

//Ext.onReady(function(){
//    MyApp.model.Group.load(10, {
//        success: function(group){
//            console.log(group.getGroup().get('name'));
//
//            group.groups().each(function(rec){
//                console.log(rec.get('name'));
//            });
//        }
//    });
