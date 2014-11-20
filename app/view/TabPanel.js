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
                title: 'Forms',
                iconCls: 'action',
                xtype: 'formstabpanel'
            }
        ]
    }
});
