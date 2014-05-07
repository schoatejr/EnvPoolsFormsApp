/**
 * Demonstrates a very simple tab panel with 3 tabs
 */
Ext.define('EnvPoolsForms.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'maintabpanel',

    config: {
        activeTab: 0,
        ui: 'dark',
        tabBar: {
            ui: 'dark',
            layout:{
                pack: 'center',
                align: 'center'
            },
            docked: 'bottom'
        },
        defaults: {
            scrollable: true
        },
        items: [
            {
                title: 'Home',
                iconCls: 'home',
                xtype: 'hometabpanel',
            },
            {
                title: 'Forms',
                iconCls: 'action',
                xtype: 'formstabpanel',
            },
            {
                title: 'About',
                iconCls: 'info',
                xtype: 'abouttabpanel',
            }
        ]
    }
});
