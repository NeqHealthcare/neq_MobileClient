/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 08.05.12
 * Time: 23:09
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.view.patient.create.DiseaseType',{
    extend:'Ext.Panel',
    requires:['NeqMobile.store.DiseaseType'],
    xtype: 'diseasetype',
    config:{
        modal: true,
        hideOnMaskTap: false,
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        centered:true,
        styleHtmlContent:true,
        layout: {
            align: 'center',
            pack: 'center',
            type: 'vbox',
            width: 400,
            height: 450
        },
        items: [
            {xtype:'toolbar',
                ui:'searchbar',
                docked:'top',
                items:[
                    {
                        xtype:'searchfield',
                        itemId:'diseasesearchfield'
                    },
                    {
                        iconMask: true,
                        iconCls: 'refresh',
                        itemId: 'refreshbutton'
                    }
                ]
            },
                {
                    xtype:'list',
                    id:'diseaselist',
                    width:400,
                    height:400,
                    itemTpl: '<bold>{name}   </bold> <span style="font-size: 80%; color: grey" > {code}'
                }
            ]
}
    }
);
