/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 25.01.12
 * Time: 00:53
 * To change this template use File | Settings | File Templates.
 */

Ext.application({
    name:'SkeletonApp',

    launch:function () {

       var myselectfield = Ext.create('Ext.field.Select',
            { options:[
                {text:'HTTPS', value:'HTTPS'},
                {text:'HTTP', value:'HTTP'}
            ]}
        );

        Ext.Viewport.add(myselectfield);
        setTimeout(function() {
                    myselectfield.setValue('HTTP');
                }, 1500);
        setTimeout(function()
        {myselectfield.setValue('HTTPS');}, 3000);
    }
});