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
            if (value) {
                return '<img src="theme/images/view/patient/bullet_black.png">'
            }
            else return '<img src="theme/images/view/patient/bullet_red.png"/>'
        },
        followRenderer:function (value, values) {
            if (value) {
                return '<img src="theme/images/view/patient/bullet_black.png">'
            }
            else return '<img src="theme/images/view/patient/bullet_red.png"/>'
        },
        severityrenderer:function (value, values) {
            var barColor1="blue", barColor2="blue";
            if(value.charAt(0)>2){
                barColor1="black"
            }
            else{
                if(value.charAt(0)>1)
                   {
                barColor1="black", barColor2="black"
            }}
            return '<img src="theme/images/view/patient/'+barColor1+'_bar.png"><img src="theme/images/view/patient/'+barColor2+'_bar.png"><img src="theme/images/view/patient/blue_bar.png">';
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