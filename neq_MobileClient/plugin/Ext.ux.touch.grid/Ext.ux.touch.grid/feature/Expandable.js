/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 26.02.12
 * Time: 04:20
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Ext.ux.touch.grid.feature.Expandable', {
    extend:'Ext.ux.touch.grid.feature.Abstract',
    requires:['Ext.ux.touch.grid.feature.Abstract'],

    config:{
        events:{
            grid:{
                itemtap:'handleTap'
            }
        },
        detailCmp:undefined,
        expandeditem:undefined,
        autoScroll:true,
        autoExpand:true,
        extraCls:'editable'
    },
    init:function (dw) {
        var me = this;
        console.log('Expandable Feature initialized and trying to extend grid functions...');
        dw.expand = Ext.bind(me.expand,me);
    },
    handleTap:function (dw, index, item, record, e, eOpts) {

        //checking whether the user clicked on the Overview or the Detailview (when visible)
        var y = e.pageY;
        overviewEl = item.child('*:first-child');
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
    },

    doToggle:function (dw, index, item, itemrecord, e, eOpts) {
        //expanding or collapsing the item, depending on the previous status
        if (!item.expanded) {
            if (this.getAutoExpand() === true) {
                this.autoExpand(dw, index, item, itemrecord, e, eOpts);
            }
            else {
                dw.fireEvent('beforeitemexpand', this, dw, index, item, itemrecord, e, eOpts);
            }
        }
        else {
            this.collapse(dw, index, item, itemrecord, e, eOpts);
        //    dw.deselect(itemrecord);
        }
    },
    autoExpand:function (dw, index, item, itemrecord, e, eOpts) {
        var desiredCmp = this.getDetailCmp();
        desiredCmp.record = itemrecord;
        var detailinstance = Ext.ComponentManager.create(desiredCmp);
        this.expand(dw, detailinstance, item);
    },
    expand:function (dw, detailinstance, item) {
        item.expanded = true;
        detailinstance.setStyle('-webkit-transition: max-height 200ms ease-in-out;');
        detailinstance.setMaxHeight(1);
        detailinstance.renderTo(item);
        detailinstance.setMaxHeight(1000);
        item.detailinstance = detailinstance;
        if (this.getAutoScroll() === true)
            this.autoScroll(dw, item);
        //dw.fireEvent('itemexpanded', dw, index, item, itemrecord, e, eOpts, detailinstance)
    },
    collapse:function (dw, index, item, itemrecord, e, eOpts) {
        // during collapsing the DetailView is destroyed to get not only hidden, but also to save memory.
        item.expanded = false;
        item.detailinstance.setMaxHeight(0);
        item.detailinstance.hide();
        dw.deselect(item);
//        Ext.defer(function () {
//
         item.detailinstance.destroy();
//        }, 300);
        //  dw.fireEvent('itemcollapsed', dw, index, item, itemrecord, e, eOpts)
    },
    autoScroll:function (dw, item) {

        var me = this;

        var callback = function () {

            var myscroll = dw.up().up().getScrollable().getScroller();
            var patientEl = dw.up().up().element;
            var maxmove = item.getY() - patientEl.getY();
            var wantmove = maxmove + item.getHeight() - patientEl.getHeight();
            var tomove = wantmove;
            if (maxmove < wantmove) {
                tomove = maxmove;
            }
            if (tomove > 0) {
                myscroll.scrollBy(0, tomove, true);
            }
        }
        Ext.Function.defer(callback
            , 220, this);

    }

});