Ext.define('NeqMobile.view.doctor.dashboard.DoctorHeader', {
    extend:'Ext.form.Panel',
    xtype:'doctorheader',
    config:{
        scrollable:false,
        padding:'0 0 10 0',
        layout:{
            itemId:'doctorheader',
            cls:'x-doctorheader',
            layout:'hbox'
        },
        items:[
            {
                xtype:'fieldset',
                width:'100%',
                layout:{
                    type:'hbox'
                },
                items:[
                    {
                        xtype:'panel',
                        padding:5,
                        width:'100%',
                        layout:{
                            type:'vbox'
                        },
                        items:[

                            {
                                xtype:'panel',
                                docked:'left',
                                padding:7,

                                //name:'image_url',
                                //icon:'theme/images/user/doctor_avatar_big.jpg',
                                //align:'right',
                                itemId:'doctorimage_big',
                                //data:{'image_url':'ideidie'},

                                tpl:'<img src="http://{image_url}?width=145&height=145"' +
                                    'style="background-size: cover; background-position: center center;' +
                                    'background: #ddd; border-radius: 3px;' +
                                    '-webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6);"' +
                                    'height=145' +
                                    '/>'
                                /*html: '<img style="background-size: cover; background-position: center center;' +
                                 ' background: #ddd; border-radius: 3px;' +
                                 ' -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6);"' +
                                 ' src="theme/images/user/doctor_avatar_big.jpg" width="145" height="145">'
                                 */
                            },
                            /*
                             {
                             xtype: 'panel',
                             docked: 'left',
                             padding: 7,
                             html: '<img style="background-size: cover; background-position: center center; background: #ddd; border-radius: 3px; -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6);" src="theme/images/user/patient_avatar_big.jpg" width="145" height="145">'
                             },
                             */
                            {
                                xtype:'textfield',
                                itemId:'doc_name',
                                padding:5,
                                label:'Name:',
                                labelWidth:'140px',
                                name:'name',
                                readOnly:true
                            },
                            {
                                xtype:'textfield',
                                itemId:'doc_patient_number',
                                padding:5,
                                label:'Number of patients:',
                                labelWidth:'140px',
                                name:'number_of_patients',
                                readOnly:true
                            },
                            {
                                xtype:'textfield',
                                itemId:'doc_last_login',
                                padding:5,
                                label:'Last Login:',
                                labelWidth:'140px',
                                name:'last_login',
                                readOnly:true
                                /*,
                                 setValue:function(value)
                                 {NeqMobile.util.Renderer.daterenderer(value);
                                 console.log('some value');}*/
                            }
                        ]
                    }
                ]
            }
        ]
    }

});

