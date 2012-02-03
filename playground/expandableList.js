/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 03.02.12
 * Time: 02:16
 * To change this template use File | Settings | File Templates.
 */

Ext.define('CollapsibleContainer',
    {extend:'Ext.Container',
        xtype:'collapsibleContainer',
        setButtonText:function (text) {
            this.down('button').setText(text);
        },
        config:{


            layout:'vbox',


            items:[
                {xtype:'button',
                    text:'click me',
                    handler:function () {
                        if (this.up().down('container').isHidden()) {
                            this.up().down('container').setHidden(false)
                            console.log('showing full container')
                        }
                        else {
                            this.up().down('container').setHidden(true)
                            console.log('hiding container');
                        }
                    }
                },

                {
                    html:'<p>ID: {id}</p>' +
                        '<p>Name: {reclili_name}</p>' +

                        '<p>Sex: ' +
                        '{[this.getLongSex(values.sex)]}' +
                        '</p>' +

                        '<h1>Diagnoses</h1>' +
                        '<table border="1">' +
                        '<thead>' +
                        '<tr>' +
                        '<th>id</th>' +
                        '<th>active</th>' +
                        '<th>name</th>' +
                        '</tr>' +
                        '</thead>' +
                        '<tbody>' +
                        '<tpl for="diagnoseList">' +
                        '<tr><td>{id}</td><td>' + '{[this.checkAct(values.is_active)]}' + '</td><td>{pathology_rec_name}</td></tr>' +
                        '<tr><td>{id}</td><td>' + '{[this.checkAct(values.is_active)]}' + '</td><td>{pathology_rec_name}</td></tr>' +
                        '<tr><td>{id}</td><td>' + '{[this.checkAct(values.is_active)]}' + '</td><td>{pathology_rec_name}</td></tr>' +
                        '<tr><td>{id}</td><td>' + '{[this.checkAct(values.is_active)]}' + '</td><td>{pathology_rec_name}</td></tr>' +
                        //is_active
                        '</tpl>' +
                        '</tbody' +
                        '</table>',
                    //  height:200,
                    hidden:true
                }

            ]
        }

    }


)


Ext.define('MyListItem', {
    extend:'Ext.dataview.component.DataItem',
    requires:['Ext.Button'],
    xtype:'mylistitem',

    config:{
        nameButton:true,

        dataMap:{
            getNameButton:{
                setButtonText:'name'
            }
        }
    },

    applyNameButton:function (config) {
        return Ext.factory(config, CollapsibleContainer, this.getNameButton());
    },

    updateNameButton:function (newNameButton, oldNameButton) {
        if (oldNameButton) {
            this.remove(oldNameButton);
        }

        if (newNameButton) {
            // add an event listeners for the `tap` event onto the new button, and tell it to call the onNameButtonTap method
            // when it happens
            newNameButton.on('tap', this.onNameButtonTap, this);

            this.add(newNameButton);
        }
    }
});

Ext.application({
    name:'SkeletonApp',
    launch:function () {

        var dataviewconfig = {

            scrollable:false,
            store:{
                fields:['name', 'age'],
                data:[
                    {name:'Jamie Avins', age:100},
                    {name:'Rob Dougan', age:21},
                    {name:'Tommy Maintz', age:24},
                    {name:'Jacky Nguyen', age:24},
                    {name:'Ed Spencer', age:26},
                    {name:'Jamie Avins', age:100},
                    {name:'Rob Dougan', age:21},
                    {name:'Tommy Maintz', age:24},
                    {name:'Jacky Nguyen', age:24},
                    {name:'Ed Spencer', age:26}
                ]
            },

            useComponents:true,
            defaultType:'mylistitem'
        };

        var dw1 = Ext.create('Ext.DataView', dataviewconfig);
        var dw2 = Ext.create('Ext.DataView', dataviewconfig);
        var dw3 = Ext.create('Ext.DataView', dataviewconfig);


        Ext.create('Ext.Container',
            {fullscreen:true,
                width:1500,
                styleHtmlContent:true,
                scrollable:true,
//                layout:{type:'vbox',
//                    flex:1},
                items:[dw1,
                    {html:'<h1>das ist ein Abstandshalter - Groesse 100 px</h1>',
                        height:100},
                    dw2,
                    {html:'<h1>das ist ein Abstandshalter - Groesse 200 px</h1>', height:200},
                    dw3]
            }
        )

//     Ext.Viewport.add(Ext.create('SkeletonApp.view.Viewport'));
//    }
    }});
