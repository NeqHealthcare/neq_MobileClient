/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 26.02.12
 * Time: 02:00
 * To change this template use File | Settings | File Templates.
 */




Ext.Loader.setConfig({
    enabled:true
});


var mycont = Ext.create('Ext.Container',{
  //  cls: 'login',
        items:[

        {
            docked:'top',
            xtype:'toolbar',
            ui:'light',
          //  cls:'login-toolbar',
            //title:'Login',
            items:[
                {
                    xtype:'button',
                    itemId:'settingsbutton',
            //        iconCls:'settings',
                    iconMask:true,
                    docked:'right'
                }
            ]

        },
        {
            xtype:'formpanel',
            //  centered:'true',
            //pack: 'start',
            //ui:'login',
            //StyleHtmlContent: true,
         //   cls:'loginform',
            //style:'background-color: white;',
            scrollable:false,
            items:[
                {
                    html:'<img src="../neq_MobileClient/theme/images/user/DefaultAvatar_small.jpg"/>'
                },
                {
                    xtype:'textfield',
                    id:'textfield',
                    value:'jgansen',
                    label:'User',
                    name:'user',
                    //width:300,
                    //margin:0,
                    //padding:0,
                    placeHolder:'Enter your Username',
                    autoComplete:true,
                    autoCorrect:true

                    //    cls:'login'
                },
                {
                    xtype:'passwordfield',
                    id:'passwordfield',
                    value:'iswi223<<',
                    label:'Password',
                    //width:300,
                    //margin:0,
                    //padding:0,
                    name:'password',
                    placeHolder:'Enter your Password'
                    //    cls:'login'
                },
                {
                    xtype:'selectfield',
                    id:'selectfield',
                    label: 'Domain',
             //       store:'Domains',
                    displayField: 'name',
                    valueField:'id'
                },
                {
                    xtype:'button',
                    text:'Login',
                    id:'login-button',
                    ui:'login-button',
                    itemId:'submitButton'
                    //baseCls:'button',
                    //       cls:'login'
                }


            ]

        }


    ]
}   );

Ext.application({
    name:'SkeletonApp',
    launch:function () {




        var touchTeam = Ext.create('Ext.DataView', {
            fullscreen: true,
            store: {
                fields: ['name', 'age'],
                data: [
                    {name: 'Jamie',  age: 100},
                    {name: 'Rob',   age: 21},
                    {name: 'Tommy', age: 24},
                    {name: 'Jacky', age: 24},
                    {name: 'Ed',   age: 26}
                ]
            },
            itemTpl: '<div>{name} is {age} years old</div>',
            listeners:{
                itemtap: function (dw, index, item, record, e, eOpts){

                    mycont.renderTo(item);

                }
            }
        });


    }
});