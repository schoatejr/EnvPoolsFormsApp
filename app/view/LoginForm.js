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
                            value: ''
                        },
                        {
                            xtype: 'passwordfield',
                            itemId: 'userPasswordField',
                            label: 'Password',
                            labelWidth: '40%',
                            name: 'password',
                            required: true,
                            value: ''
                        },
                        {
                            xtype: 'checkboxfield',
                            itemId: 'saveCredentialsField',
                            label: 'Remember Credentials',
                            labelWidth: '40%',
                            name: 'credentials',
                            required: false,
                            value: false
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
    initialize: function()
    {
        //our Store automatically picks up the LocalStorageProxy defined on the Search model
        var userStore = Ext.getStore('Users');
        if(!userStore) userStore = Ext.create('EnvPoolsForms.store.Users');
        if (userStore.getCount() > 0)
        {
            console.log("There was a record for the email and password");

            var newRecord = userStore.getAt(0).getData();
            var emailVal = newRecord.email;
            var passwordVal = newRecord.password;
            console.log("The email is [" + newRecord.email + "] the password is [" + newRecord.password + "]");

            this.setValues({
                email: emailVal,
                password: passwordVal,
                credentials:true
            });
        }

    },

onLoginButtonTap: function (evt, options) {

    var me = this;

    var emailField = me.down('#userEmailField'),
        passwordField = me.down('#userPasswordField'),
        label = me.down('#signInFailedLabel'),
        saveCredentials = me.down('#saveCredentialsField');

    label.hide();

    var email = emailField.getValue(),
        password = passwordField.getValue();

    // Using a delayed task in order to give the hide animation above
    // time to finish before executing the next steps.
    var task = Ext.create('Ext.util.DelayedTask', function () {

        label.setHtml('');

        me.fireEvent('loginButtonTappedCommand', me, email, password, saveCredentials);
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
 //this.getComponent('loginFieldset').getComponent('userPasswordField').setValue('');
}
});