Ext.define('EnvPoolsForms.view.FormsTabPanel', {
    extend: 'Ext.Panel',
    xtype: 'formstabpanel',

    requires: [
        'Ext.Panel',
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'formslist'
            }
        ]
    }

});