Ext.define('EnvPoolsForms.view.HomePanel', {
    extend: 'Ext.Panel',
    alias: 'widget.homepanel',

    requires: [

    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'maintabpanel',
                layout: {
                 animation: 'slide',
                 type: 'card'
                },            	
            }
        ]
    }

});