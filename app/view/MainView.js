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
                        xtype: 'formpanel',
                        hidden: false,
                        itemId: 'loginPanel',
                        items: [
                                {
                                    xtype: 'fieldset',
                                    title: 'Login',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            label: 'Email',
                                            labelWidth: '40%',
                                            name: 'email',
                                            value: 'schoatejr@yahoo.com'
                                        },
                                        {
                                            xtype: 'passwordfield',
                                            label: 'Password',
                                            labelWidth: '40%',
                                            name: 'password',
                                            value: 'Mother!23'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'loginButton',
                                    margin: 20,
                                    padding: 8,
                                    text: 'Login'
                                }
                            ]
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