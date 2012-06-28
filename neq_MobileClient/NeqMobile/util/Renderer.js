/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 09.03.12
 * Time: 19:28
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.util.Renderer',
    {
        singleton:true,
        longToDateRenderer:function(long, values){
            var date = new Date(long);
            return Ext.Date.format(date,'d.m.Y');
        },

        longToTimerenderer: function(long,values){
            var date = new Date(long);
            return Ext.Date.format(date,'d.m.Y - H:i:s');
        },

        dateTimerenderer: function(date,values) {
            if (date) {
                return Ext.Date.format(date, 'd.m.Y - H:i:s');
            }
            else {
                return '-';
            }
        },
        urgencyrenderer: function (value, values){
            if(value =='a')
                return 'Normal';
            else {
                if(value == 'b')
                    return 'Urgent';
                else
                    return 'Medical Emergency';
            }
        },

         undefinedRenderer: function (value, values){
             if(value==null)
                return "-";
             else
                return value;
         },

         limitRenderer: function (value, values){
            if (value.length>5){
                return value.slice(0, value.indexOf(".")+2);
            }
            return value;
        },

        unitRenderer: function (value, values) {
            if (value=="false")
                return "-";
            else
                return value;
        },

        daterenderer:function (date, values) {
            if (date)
            {
            return Ext.Date.format(date, 'd.m.Y');
            }
            else
            {return '-';}
        },
        booleanrenderer:function (value, values) {
            if (value) {
                return '<input type="checkbox" checked="checked" disabled />'
            }
            else return '<input type="checkbox" disabled/>'
        },
        bulletRenderer:function (value, values) {
            var url_1 ='<div style="background:url(theme/images/view/patient/';
            var url_2 = ') no-repeat center center;height:2.5em;"></div>';
            if (value) {
                return url_1+'active.png'+url_2;
            }
            else return url_1+'inactive.png'+url_2;
        },
        followRenderer:function (value, values) {
            if (value) {
                return '<img src="theme/images/view/unfollow.png">'
            }
            else return '<img src="theme/images/view/follow.png"/>'
        },

        chatterSettingsImageRenderer:function (value, values) {
                var id = value.substring(value.indexOf("image/")+6);
                return '<img src="http://'+value+'?width=45&height=45" style="display: table-cell;  vertical-align: middle; float: left" />'+'<span style="display: table-cell;  vertical-align: middle;height: 45px;min-width:5px; margin-left: 3px; text-align:left">'+"&nbsp;"+'ID: '+id+'</span>'
        },

        severityrenderer:function (value, values) {
            var severity = 'severity_3';
            var url_1 ='<div style="background:url(theme/images/view/patient/';
            var url_2 = ') no-repeat center center;height:2.5em;"></div>';
            if(value.charAt(0)>2){
                severity="severity_1";
            }
            else{
                if(value.charAt(0)>1)
                   {
                       severity="severity_2";
            }}
            return url_1+severity+'.png'+url_2;
        },
        completerenderer: function(value, values){
            if(values.discontinued=="true")
                return '<span style="color:#FF0000;">'+value+'</span>'
            if (values.course_completed=="true")
                return '<div style="text-decoration: line-through;">'+value+'</div>'
            else{
                return value
        }
        },
        falseRenderer: function (value){
            if (value == "false")
                return "-";
            else
                return value;
        }





    });