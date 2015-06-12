Ext.define('EnvPoolsForms.view.VideosTabPanel', {
    extend: 'Ext.Panel',
    xtype: 'videostabpanel',

    requires: [
        'Ext.Panel',
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'videoslist'
            }
        ]
    }

});