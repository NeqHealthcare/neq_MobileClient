/**
 * Created with JetBrains WebStorm.
 * User: geekflyer
 * Date: 26.02.12
 * Time: 04:20
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Ext.ux.touch.grid.feature.Expandable', {
    extend:'Ext.ux.touch.grid.feature.Abstract',
    requires:['Ext.ux.touch.grid.feature.Abstract','Ext.Anim'],

    config:{
        events:{
            grid:{
                itemtap:'handleTap'
            }
        }
        ,
        detailCmp:undefined
    },
    handleTap:function (dw, index, item, record, e, eOpts) {
        //checking whether the user clicked on the Overview or the Detailview (when visible)
        var y = e.pageY;
        overviewEl = item.child('*:first-child');
        var xy = overviewEl.getXY();
        bottomOfOverview = xy[1] + overviewEl.getHeight();
        if (bottomOfOverview < y) {
            console.log('clicked on overview');
            this.doToggle(dw, index, item, record, e, eOpts);
        }
        else {
            console.log('clicked on detail')
        }
        ;
    },

    //expanding or collapsing the item, depending on the previous status
    //during expanding a new DetailView instance is created and a model instance is assigned to the DetailView.
    doToggle:function (dw, index, item, itemrecord, e, eOpts) {
        var me = this;
        if (!item.expanded) {
            console.log('expanding...')
            item.expanded = true;
            var desiredCmp = this.getDetailCmp();
            desiredCmp.record = itemrecord;
            var detailinstance = Ext.ComponentManager.create(desiredCmp);

            Ext.Anim.run(detailinstance, 'slide', {
                direction:'down',
                autoClear: true
            });
            detailinstance.renderTo(item);
            item.detailinstance = detailinstance;
            dw.fireEvent('itemexpanded',dw,index,item,itemrecord, e,eOpts)
        }
        // during collapsing the DetailView is destroyed to get not only hidden, but also to save memory.
        else {
            console.log('collapsing...');
            item.expanded = false;
            Ext.Anim.run(item.detailinstance, 'slide', {
                direction:'up',
                autoClear: true,
                after: function(){item.detailinstance.destroy();}
            });

            dw.fireEvent('itemcollapsed',dw,index,item,itemrecord, e,eOpts)
        }
    }
});