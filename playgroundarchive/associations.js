/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 04.02.12
 * Time: 04:36
 * To change this template use File | Settings | File Templates.
 */

// Server Data


// Client code

Ext.define('OtherGroup', {
    extend: 'Ext.data.Model',
    config: {
    fields: ['id','parent_id']}
});


Ext.define('Group', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'parent_id', 'name'],
        proxy: {
            type: 'ajax',
            url: 'groups.json',
            reader: {
                type: 'json',
                rootProperty: 'groups'
            }
        },
        associations: [{
            type: 'hasMany',
            model: 'OtherGroup',
            name:'bla',
           // autoLoad: true
            //,
          //  associationKey: 'child_groups' // read child data from child_groups
        }
        ]
    }
});


Ext.onReady(function(){

    Group.load(10, {
        success: function(group){
          // console.log(group.getGroup().get('name'));
//            for (var member in group) {
//            	console.log('Name: ' + member + '   Value: ' + group[member]);
//            }
            console.log(group.bla());
            group.bla().each(function(rec){
                console.log(rec.get('name'));
            });
        }
    });

});