Ext.define('EnvPoolsForms.view.PlansTabPanel', {
    extend: 'Ext.Panel',
    xtype: 'planstabpanel',

    requires: [
        'Ext.Panel',
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'planslist'
            }
        ]
    }

});