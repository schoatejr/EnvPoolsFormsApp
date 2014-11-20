Ext.define('EnvPoolsForms.view.AboutTabPanel', {
    extend: 'Ext.Panel',
    xtype: 'abouttabpanel',

    requires: [
        'Ext.tab.Panel'
    ],

    config: {
        layout: 'fit',
        items: [
                {
                    ui: 'button',
                    action: 'logoutCommand',
                    itemId:"logoutButton",
                    align: 'left',
                    text: 'Logout'
                 },
//                 {
//                     ui: 'button',
//                     iconCls: 'info',
//                     action: 'aboutCommand',
//                     itemId:"aboutButton",
//                     align: 'left',
//                     text: 'about'
//                  },
         ]
    }

});