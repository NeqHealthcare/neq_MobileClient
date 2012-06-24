/**
 * Created by GSane
 */
/**
 * Created by Jan Gansen

 /* - Basic Definition ---------------------------------------------------------------------------------- */
Ext.define('NeqMobile.controller.settings.UserSettingsC', {
        extend:'Ext.app.Controller',

        config:{

            refs:{
                userSettings:'userSettings'
            },

            control:{
                'userSettings fieldset #peoplesearchfield':{keyup:'doFilter'}
            }
        },

        /* - Functions ---------------------------------------------------------------------------------- */

        doFilter:function (searchfield, e, eOpts) {
            var store = Ext.data.StoreManager.lookup('chatterUsers');
            var searchstring = Ext.String.trim(searchfield.getValue());
            searchstring = searchstring.replace(/\s+/g, '|')
            store.clearFilter();
            store.filter(
                {filterFn:function (item) {
                    var name = item.get('rec_name');
                    var id = item.get('id');
                    var searchexpr = new RegExp(searchstring, 'i');
                    if (searchexpr.test(name) || searchexpr.test(id)) {
                        return true
                    }
                    else {
                        return false
                    }
                }}
            );

        }
    }

);
