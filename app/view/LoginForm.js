Ext.define('EnvPoolsForms.view.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Button'
    ],

    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Login',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Username',
                        labelWidth: '40%',
                        name: 'username'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Password',
                        labelWidth: '40%',
                        name: 'password'
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
    }

});