/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 25.02.12
 * Time: 17:06
 * To change this template use File | Settings | File Templates.
 */
Ext.define('NeqMobile.ux.expandableList.ExpandableList',
    {   extend:'Ext.DataView',
        xtype:'expdandablelist',
        config:{
            headerCmp:undefined,
            overviewXtype:undefined,
            detailXtype:undefined,
            listeners:{
                itemtap:function (dw, index, item, record, e, eOpts) {
                    var y = e.pageY;
                    overviewEl = item.child('div:first-child');
                    var xy = overviewEl.getXY();
                    bottomOfOverview = xy[1] + overviewEl.getHeight();
                    if (bottomOfOverview > y) {
                        console.log('clicked on overview');
                        this.doToggle(dw, index, item, record, e, eOpts);
                    }
                    else {
                        console.log('clicked on detail')
                    }
                    ;
                }
            }
        },

        constructor:function (config) {
            this.callParent(arguments);
        },
        setHeaderCmp:function (headerCmp) {
            var me = this;
            headerCmp.docked = 'top';
            var headerInstance = Ext.ComponentManager.create(headerCmp);
            me.add(headerInstance);
        },
        doToggle:function (dw, index, item, record, e, eOpts) {
            if (!item.Expanded) {
                console.log('expanding...')
                item.Expanded = true;
                var desiredCmp = this.getDetailXtype();
                desiredCmp.record:record

                var detailinstance = Ext.ComponentManager.create({xtype:this.getDetailXtype(), record:record});
                detailinstance.renderTo(item);
                item.detailinstance = detailinstance;
            }
            else {
                console.log('collapsing...');
                item.Expanded = false;
                item.detailinstance.destroy();
            }
        }
    }
)