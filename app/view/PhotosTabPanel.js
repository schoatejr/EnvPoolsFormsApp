Ext.define('EnvPoolsForms.view.PhotosTabPanel', {
    extend: 'Ext.Panel',
    xtype: 'photostabpanel',

    requires: [
        'Ext.Panel',
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'photoslist'
            }
        ]
    }

});