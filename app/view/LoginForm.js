Ext.define('EnvPoolsForms.view.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',

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
                items: 
                    [
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
    }

});