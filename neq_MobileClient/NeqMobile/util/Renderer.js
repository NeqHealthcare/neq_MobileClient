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
        daterenderer:function (date, values) {
            return Ext.Date.format(date, 'd.m.Y');
        },
        booleanrenderer:function (value, values) {
            if (value) {
                return '<input type="checkbox" checked="checked" disabled />'
            }
            else return '<input type="checkbox" disabled/>'
        },
        bulletRenderer:function (value, values) {
            if (value) {
                return '<img src="../neq_MobileClient/bullet_black.png">'
            }
            else return '<img src="../neq_MobileClient/bullet_red.png"/>'
        },
        severityrenderer:function (value, values) {
            var barColor1 = "blue", barColor2 = "blue";
            if (value.charAt(0) > 2) {
                barColor1 = "black"
            }
            else(value.charAt(0) > 1)
            {
                barColor1 = "black", barColor2 = "black"
            }
            return '<img src="../neq_MobileClient/' + barColor1 + '_bar.png"><img src="../neq_MobileClient/' + barColor2 + '_bar.png"><img src="../neq_MobileClient/blue_bar.png">';

        }

    });