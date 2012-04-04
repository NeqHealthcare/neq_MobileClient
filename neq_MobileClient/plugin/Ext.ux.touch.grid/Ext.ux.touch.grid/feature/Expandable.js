/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 26.02.12
 * Time: 04:20
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Ext.ux.touch.grid.feature.Expandable', {
    extend:'Ext.ux.touch.grid.feature.Abstract',
    requires:['Ext.ux.touch.grid.feature.Abstract', 'Ext.Anim'],

    config:{
        events:{
            grid:{
                itemtap:'handleTap'
            }
        },
        detailCmp:undefined,
        expandeditem:undefined
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
            this.expand(dw, index, item, itemrecord, e, eOpts);
        }
        else {
            this.collapse(dw, index, item, itemrecord, e, eOpts);
        }
    },

    expand:function (dw, index, item, itemrecord, e, eOpts) {
        //during expanding a new DetailView instance is created and a model instance is assigned to the DetailView.
        //get currently expanded item
        var expandeditem = this.getExpandeditem();
//        if (expandeditem){
//        this.collapse(dw, index, expandeditem, itemrecord, e, eOpts); }
        item.expanded = true;
        this.setExpandeditem(item);
        var desiredCmp = this.getDetailCmp();
        desiredCmp.record = itemrecord;
        var detailinstance = Ext.ComponentManager.create(desiredCmp);
        detailinstance.renderTo(item);
        item.detailinstance = detailinstance;
        dw.fireEvent('itemexpanded', dw, index, item, itemrecord, e, eOpts, detailinstance)
    },
    collapse:function (dw, index, item, itemrecord, e, eOpts) {
        // during collapsing the DetailView is destroyed to get not only hidden, but also to save memory.
        item.expanded = false;
        item.detailinstance.setHidden(true);
        Ext.defer(function() {item.detailinstance.destroy()});
        dw.fireEvent('itemcollapsed', dw, index, item, itemrecord, e, eOpts)
    }
});