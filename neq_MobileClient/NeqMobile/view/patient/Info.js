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
    '<h3>Patient</h3><table cellpadding="5" cellspacing="10" style="background-color: #FFFFFF; -webkit-border-radius: 6px";>' +
        '<tr>'+
        '<th rowspan="4" width=70><img src="theme/images/user/DefaultAvatar_small.jpg" width="60" height="67"></th>'+
        '   <td align="left"><b>ID:</b> {id}</td></tr>'+
        '<tr><td><b>Name:</b>{rec_name}</td></tr>'+
        '<tr><td><b>Sex:</b>{sex}</td></tr>' +
        '<tr><td><small>{latestDiagnoseRecName}</small></td></tr>'+'</table>'
//    '<div class="patientImage" style="float: left; height: 125px; width: 114px; margin-right: 10px; background-size: cover; background-position: center center; background: #ddd; @include border-radius(3px); -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,.6); background-image:url(theme/images/user/DefaultAvatar_small.jpg);"></div>',
//    //'<div class="headshot" style="background-image:url(resources/images/headshots/{headshot});"></div>',
//    '<span style="display: block; font-size: 12pt; font-weight: bold; color: #000;">ID: {id} - {rec_name}</strong>  - {[values.age.split(" ")\[0\]]} - {sex}&nbsp;</span>',
//    '<span style="display: block; font-size: 12pt; font-weight: normal; color: #666;">{latestDiagnoseRecName}&nbsp;</span>',
//    '<br /><br />'

);


var diagnoses = new Ext.XTemplate(
    '<br><h3>Diseases</h3>'+
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
                '<td>{[this.checkStatus(values.is_active)]}</td>',
                '<td>{pathology_rec_name}</td>',
                '<td>{disease_severity}</td>',
                '<td>{healed_dated}</td>',
                '<td>{[this.checkStatus(values.is_infectious)]}</td>',
                '<td>{[this.checkStatus(values.is_allergy)]}</td>',
            '</tr>',
            '</tpl>',
        '</tbody>',
    '</table>',

    {
        // XTemplate configuration:
        disableFormats:true,
        // member functions:
        checkStatus:function (currentStat) {
            if (currentStat == 'true') {
                return '<input type="checkbox" checked="checked" />'
            }
            else return '<input type="checkbox"/>'
        }

    }

    /*
    '<p>ID: {id}</p>',
    '<p>Name: {rec_name}</p>',

    '<p>Sex: ',
    '{[this.getLongSex(values.sex)]}',
    '</p>',

    '<h1>Diagnoses</h1>',
    '<table border="1"> ',
    '<thead>',
    '<tr>',
    '<th>id</th>',
    '<th>active</th>',
    '<th>name</th>',
    '</tr>',
    '</thead>',
    '<tbody>',
    '<tpl for="diagnoseList">',
    '<tr><td>{id}</td><td>', '{[this.checkAct(values.is_active)]}', '</td><td>{pathology_rec_name}</td></tr>',
    //is_active
    '</tpl>',
    '</tbody',
    '</table>',
    */
 /*   {
        // XTemplate configuration:
        disableFormats:true,
        // member functions:
        getLongSex:function (shortsex) {
        if (shortsex === "m") {
        return "male"
    }
    else return "female"
    },
    isBaby:function (age) {
        return age < 1;
    },

    checkAct:function (activness) {
        if (activness == 'true') {
            return '<input type="checkbox" checked />'
        }
        else return '<input type="checkbox" unchecked />'
    }

    }*/
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
            scrollable: true,
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