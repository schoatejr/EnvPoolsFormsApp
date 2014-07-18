Ext.define('EnvPoolsForms.view.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',
    alias: 'widget.loginform',

    requires: [
        'Ext.field.Email',
        'Ext.Button',
        'Ext.util.DelayedTask'
    ],

    config: {
        items: [
            {
                xtype: 'fieldset',
                itemId: 'loginFieldset',
                title: 'Login',
                items: 
                    [
			            {
			                xtype: 'label',
			                html: 'Login failed. Please enter the correct credentials.',
			                itemId: 'signInFailedLabel',
			                hidden: true,
			                hideAnimation: 'fadeOut',
			                showAnimation: 'fadeIn',
			                style: 'color:#990000;margin:5px 0px'
			            },
                         {
                            xtype: 'emailfield',
                            itemId: 'userEmailField',
                            label: 'Email',
                            labelWidth: '40%',
                            name: 'email',
                            required: true,
                            value: 'schoatejr@yahoo.com',
                        },
                        {
                            xtype: 'passwordfield',
                            itemId: 'userPasswordField',
                            label: 'Password',
                            labelWidth: '40%',
                            name: 'password',
                            required: true,
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

    var me = this;

    var emailField = me.down('#userEmailField'),
        passwordField = me.down('#userPasswordField'),
        label = me.down('#signInFailedLabel');

    label.hide();

    var email = emailField.getValue(),
        password = passwordField.getValue();

	console.log('In LoginForm Email: ' + email + '\n' + 'Password: ' + password);
    // Using a delayed task in order to give the hide animation above
    // time to finish before executing the next steps.
    var task = Ext.create('Ext.util.DelayedTask', function () {

        label.setHtml('');

        me.fireEvent('loginButtonTappedCommand', me, email, password);
    });

    task.delay(500);
},
showSignInFailedMessage: function (message) 
{
    var label = this.down('#signInFailedLabel');
    label.setHtml(message);
    label.show();
},
clearFields: function (message) 
{
 this.getComponent('loginFieldset').getComponent('userEmailField').setValue('');
 this.getComponent('loginFieldset').getComponent('userPasswordField').setValue('');
}
});