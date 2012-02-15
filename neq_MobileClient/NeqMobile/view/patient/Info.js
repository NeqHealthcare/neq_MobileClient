/**
 * Created by JetBrains WebStorm.
 * User: geekflyer
 * Date: 29.11.11
 * Time: 20:44
 * To change this template use File | Settings | File Templates.
 */
/**
 * @author geekflyer
 */

var patientheader = new Ext.XTemplate(
//    '<h1>"Information"</h1><table border="2" cellspacing="10">' +
//        '</table>'

    //'<h1>here should be the patient header</h1>'
    '<div class="patientImage" style="float: left; height: 125px; width: 114px; margin-right: 10px; background-size: cover; background-position: center center; background: #ddd; @include border-radius(3px); -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6); background-image:url(theme/images/user/DefaultAvatar_small.jpg);"></div>',
    //'<div class="headshot" style="background-image:url(resources/images/headshots/{headshot});"></div>',
    '<span style="display: block; font-size: 12pt; font-weight: bold; color: #000;">ID: {id} - {rec_name}</strong>  - {[values.age.split(" ")\[0\]]} - {sex}&nbsp;</span>',
    '<span style="display: block; font-size: 12pt; font-weight: normal; color: #666;">{latestDiagnoseRecName}&nbsp;</span>',
    '<br /><br />'

);


var diagnoses = new Ext.XTemplate(
    '<table id="box-table-a" summary="Employee Pay Sheet">',
    '<thead>',
    '<tr>',
    '<th scope="col">Date</th>',
    '<th scope="col">Activity Status</th>',
    '<th scope="col">Disease</th>',
    '<th scope="col">Severity</th>',
    '<th scope="col">Healed Date</th>',
    '<th scope="col">Infectability</th>',
    '<th scope="col">Allergies</th>',
    '</tr>',
    '</thead>',
    '<tbody>',
    '<tpl for=".">',
    '<tr>',

    '<td>{diagnosed_date.day}.{diagnosed_date.month}.{diagnosed_date.year}</td>',
    '<td>{[this.checkAct(values.is_active)]}</td>',
    '<td>{pathology_rec_name}</td>',
    '<td>{disease_severity}</td>',
    '<td>{healed_dated}</td>',
    '<td>{is_infectious}</td>',
    '<td>{is_allergy}</td>',
    '</tr>',
    '</tpl>',
    '</tbody>',
    '</table>',

    {
        // XTemplate configuration:
        disableFormats:true,
        // member functions:
        checkAct:function (activness) {
            if (activness == 'true') {
                return '<input type="checkbox" checked="checked" />'
            }
            else return '<input type="checkbox" checked="unchecked" />'
        }

    }
);


Ext.define('NeqMobile.view.patient.Info', {
        extend:'Ext.Container',
        xtype:'patientInfo',
        //ref: ['NeqMobile.view.patient.SimpleDiseaseView.tpl1'],


        loadPatient:function (patientrecord, diagnoses) {
            //  data = patientrecord.getFields();
            console.log('setting the data config of the info component');
            console.log('the patients data...');
            console.log(patientrecord.data);
            this.down('#patientheader').setData(patientrecord.data);
            console.log('the diagnoses data');
            this.down('#diagnoses').setData(diagnoses);
            console.log(diagnoses);
        },
        config:{

            styleHtmlContent:true,
            layout:'vbox',
            // layout:'card',
            //  tpl:tpl',

            items:[
                {xtype:'container',

                    itemId:'patientheader',
                    tpl:patientheader
                },
                {

                    xtype:'container',
                    itemId:'diagnoses',
                    tpl:diagnoses}
            ]
        }

    }


)
;