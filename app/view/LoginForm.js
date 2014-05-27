Ext.define('EnvPoolsForms.view.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',
    alias: 'widget.loginform',

    requires: [
        'Ext.field.Email',
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
                            xtype: 'emailfield',
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
        ],
listeners: [{
    delegate: "#loginButton",
    event: "tap",
    fn: "onLoginButtonTap"
}]
    },
onLoginButtonTap: function (evt, options) {
    console.log('The Login button was tapped');
    this.fireEvent('loginButtonTappedCommand', this);
}


});