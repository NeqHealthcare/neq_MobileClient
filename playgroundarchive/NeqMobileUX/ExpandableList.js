/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 25.02.12
 * Time: 17:06
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.ux.expandableList.ExpandableList',
    {   extend:'Ext.DataView',
        requires:['NeqMobile.ux.expandableList.ExpandableListItem'],
        xtype:'expdandablelist',
        config:{
            defaultType:'expandablelistitem',
            headerCmp:undefined,
            overviewXtype:undefined,
            detailXtype:undefined,
            useComponents:false,
            listeners:{
                itemtap:function (dw, index, item, record, e, eOpts) {
                    var y = e.pageY;
                    var overviewId = item.getAt(0).getId();
                    var overviewEl = Ext.get(overviewId);
                    var xy = overviewEl.getXY();
                    bottomOfOverview = xy[1] + overviewEl.getHeight();
                    if (bottomOfOverview > y) {
                        console.log('clicked on overview');
                        this.doToggle(dw,index,item,record, e,eOpts);}
                     else {
                        console.log('clicked on detail')
                    }
                    ;
                }
            }
        },
        setHeaderCmp:function (headerCmp) {
            var me = this;
            headerCmp.docked = 'top';
            var headerInstance = Ext.factory(headerCmp);
            me.add(headerInstance);
        },
        doToggle:function (dw,index,item,record, e,eOpts) {
            if (!item.getExpanded()) {
                item.setExpanded(true);
                var detailinstance = Ext.factory({xtype:this.getDetailXtype(),record:record});
                item.add(detailinstance) ;
            }
            else {
                item.setExpanded(false);
                item.getAt(1).destroy();
            }
        }
    }
)