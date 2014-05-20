Ext.define('EnvPoolsForms.controller.FormCtrl', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
                mainView: 'mainview',
              loginPanel: 'mainview #loginPanel',
            welcomePanel: 'mainview #welcomePanel',
               formsList: 'formslist',
              formEditorView: 'formeditorview'
        },

        control: {
        	
        	formEditorview : {
                // The commands fired by the notes list container.
        		submitFormCommand: "onSubmitFormCommand"
            },        	
        	"formslist" : {
                // The commands fired by the notes list container.
        		editFormCommand: "onEditFormCommand"
            },        	
            "mainview #showLoginButton": {
                tap: 'showLogin'
            },
            "mainview #showRegisterButton": {
                tap: 'showRegister'
            },
            "mainview #loginButton": {
                tap: 'login'
            },
            "registerform #registerButton": {
                tap: 'register'
            }
        }
    },

    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },    
    onSubmitFormCommand: function (list, record) 
    {
        console.log("Event : onSubmitFormCommand");
    },
    onEditFormCommand: function (list, record) 
    {
        console.log("Event : onEditFormCommand");
        this.activateFormEditor(record);
    },
    activateFormEditor: function (record) {

        console.log("Ready to activate form : " + record.get('Name'));
        console.log("Ready call link : " + record.get('LinkEntries'));


        Ext.Ajax.request
          ({
            url: record.get('LinkFields'),
        params: {
        },
        withCredentials: false,
        useDefaultXhrHeader: false,
        success: function(response) 
        {
            console.log('get testForms was successful');
            console.log(response.responseText);
          
        },
        failure: function(response) 
            {
                console.log('get testForms was failed');
        }
      });
        var formEditorView = Ext.create('widget.formeditorview'); // Login form

        
        //var formEditorView = this.getFormEditorview();
        formEditorView.setRecord(record); // load() is deprecated.
        Ext.Viewport.animateActiveItem(formEditorView, this.slideLeftTransition);        
    },
    showLogin: function(button, e, eOpts) {

        var loginForm = Ext.create('widget.loginform'),	// Login form
            mainView = this.getMainView();				// Main view

        // Navigate to login
        mainView.push({
            xtype: "loginform",
            title: "Login"
        });

    },

    login: function(button, e, eOpts) {
    	var me = this;
        var form = button.up('formpanel'),			// Login form
        	values = form.getValues(),				// Form values
        	mainView = this.getMainView(),			// Main view
        	loginPanel = this.getLoginPanel(),		// Login and register buttons
        	welcomePanel = this.getWelcomePanel(),	// Welcome panel
        	homePanel = Ext.create('widget.homepanel');	// Home Panel

        // Success
        var successCallback = function(resp, ops) {

            // Go back
            //mainView.pop();

            // Hide login panel
            //loginPanel.hide();

            // Show welcome panel
            //welcomePanel.show();
            me.doMyLogin();

            // Navigate to register
            mainView.push({
                xtype: "homepanel",
                title: "The Home Panel"
            });
            
            //Show home panel
            //homePanel.show();

        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show login failure error
            Ext.Msg.alert("Login Failure", resp);

        };


        // TODO: Login using server-side authentication service
        // Ext.Ajax.request({
        //		url: "/api/login",
        //		params: values,
        //		success: successCallback,
        //		failure: failureCallback
        // });

        // Just run success for now
        successCallback();
    },
    
    doMyLogin: function() 
    {
    	var me = this;
        var mainView = this.getMainView();			// Login form
    	
//        mainView.setMasked
//		  ({
//          xtype: 'loadmask',
//          message: 'Connecting...'
//        });

        Ext.Ajax.request
		  ({
	        url: 'https://environmentalpools.wufoo.com/api/v3/forms.json',
        params: {
        },
        withCredentials: false,
        useDefaultXhrHeader: false,
        success: function(response) 
        {
			console.log('get testForms was successful');
  		    console.log(response.responseText);
          
        },
        failure: function(response) 
			{
				console.log('get testForms was failed');
        }
      });

    },

    /**
     * Performs the login sequence.
     */
    doLogin: function() {
      var me = this;
      var form = this.getLoginButton().parent;

      var server = form.getValues().server;
      var username = form.getValues().username;
      var password = form.getValues().password;

      EqlMobile.UserSettings.set('lastServer', server);

      if (Ext.isEmpty(server)) {
        Ext.Msg.alert('Error', 'Please enter an ESMS server.');
      } else if (server === 'demo') {
        this.setDemoMode();
      } else {
        EqlMobile.APIManager.setServerAddress(server);
        if (Ext.isEmpty(username)) {
          Ext.Msg.alert('Error', 'Please enter a username.');
        } 
  	  else 
  	  {
          this.getLoginView().setMasked({
            xtype: 'loadmask',
            message: 'Connecting...'
          });

          Ext.Ajax.request({
            url: EqlMobile.APIManager.getLoginUrl(),
            method: 'POST',
            params: {
              username: username,
              password: password
            },
            withCredentials: true,
            useDefaultXhrHeader: false,
            success: function(response) 
            {
              me.loadStores();
              me.showMainView();
              me.setUserIndicator(username);
              me.getLoginView().setMasked(false);
              var token = Ext.decode(response.responseText).currentTokenValue;
              EqlMobile.util.PushNotificationManager.subscribe(token);
            },
            failure: function(response) {
              me.getLoginView().setMasked(false);
              if (response.status == 401) {
                EqlMobile.EqlLogger.error('Invalid username/password', me);
                Ext.Msg.alert('Error', 'Invalid username/password');
              } else {
                EqlMobile.EqlLogger.error('Unable to connect to server ' + server, me);
                Ext.Msg.alert('Error', 'Unable to connect to ' + server + '.');
              }
            }
          });
        }

      }
    },
});