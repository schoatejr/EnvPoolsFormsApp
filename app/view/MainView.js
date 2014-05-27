Ext.define('EnvPoolsForms.view.MainView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainview',

    requires: [
        'Ext.Panel',
        'Ext.Button',
        'Ext.Label',
        'Ext.field.Password'
    ],

    config: {
        items: [
            {
                xtype: 'panel',
                itemId: 'homePanel2',
                layout: 'fit',
                items: [
                    {
                        xtype: 'loginform',
                        itemId: 'loginPanel'
                    }
                ]
            }
        ]
    }

});