
/**
 * Created by Jan Gansen
 */
Ext.define('NeqMobile.controller.settings.UserSettings', {
    extend   : 'Ext.ux.touch.grid.feature.Abstract',
    requires : 'Ext.ux.touch.grid.feature.Abstract',

    config : {
        events : {
            grid : {
                itemtap       : 'handleTap'
            }
        },
        extraCls : 'editable'
    },

    handleTap : function(grid, index, rowEl, rec, e) {
        if(rec.get('isFollowed')){
            rec.set('isFollowed', false);
        }else{
            rec.set('isFollowed', true);
        }
        grid.refresh();

        var tempRecord = Ext.create('NeqMobile.model.ChatterUser', {
        });
        tempRecord.getProxy().setExtraParam('userId', rec.get('id'));
        tempRecord.getProxy().setExtraParam('isFollowed', rec.get('isFollowed'));
        tempRecord.save({
            success:function (newRequest) {
                console.log("request successfully saved");
            },
            failure:function (response, opts) {
                if(rec.get('isFollowed')){
                    rec.set('isFollowed', false);
                }else{
                    rec.set('isFollowed', true);
                }
                grid.refresh();
                console.log('server-side failure with status code ' + response.status);
                Ext.Msg.alert('Server not responding', 'status code: ' + response.status + '<br>' +
                    'It occured a technical connection problem. Possible causes are:<br><br>' +
                    '1. The server ist not responding - check your network connection or the connection settings of the app (ask the administrator.)', Ext.emptyFn);
                failureCallback.apply(scope);
            }
        })
    }
});