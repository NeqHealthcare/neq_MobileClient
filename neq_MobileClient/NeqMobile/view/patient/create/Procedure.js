/**
 * Created by JetBrains WebStorm.
 * User: Joohee
 * Date: 19.05.12
 * Time: 16:29
 * To change this template use File | Settings | File Templates.
 */

Ext.define('NeqMobile.view.patient.create.Procedure',{
        extend:'Ext.Panel',
        requires:['NeqMobile.store.Procedure'],
        xtype: 'procedure',
        config:{
            modal: true,
            hideOnMaskTap: true,
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
               {
                    xtype:'list',
                    id:'pcdlist',
                    width:400,
                    height:400,
                    itemTpl: '<bold>{description}   </bold> <span style="font-size: 80%; color: grey" > {name}'
               }
            ]
        }
    }
);
