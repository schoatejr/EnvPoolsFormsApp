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
                itemId: 'homePanel',
                layout: 'fit',
                items: [
                    {
                        xtype: 'loginform',
                        itemId: 'loginPanel'
                    },
                    {
                        xtype: 'panel',
                        hidden: true,
                        itemId: 'welcomePanel',
                        items: [
                            {
                                xtype: 'label',
                                centered: true,
                                html: 'Welcome!',
                                itemId: 'welcomeLabel'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});