Ext.define('EnvPoolsForms.controller.FormCtrl', {
    extend: 'Ext.app.Controller',

    config: 
    {
        refs: 
        {
                'navView'      : 'navigationview',
                mainView: 'mainview',
              loginPanel: 'loginform',
               formsList: 'formslist',
          formEditor: 'formeditorview',
          fieldsForm: 'formeditorview #fieldsform',
               homePanel: 'homepanel',
            mainTabPanel: 'homepanel #maintabpanel',
              reportPanel: 'reportpanel'
        },
        control: 
        {
        	formEditor : 
        	{
            // The commands fired by the Form Editor container.
        		submitFormCommand: 'onSubmitFormCommand',
        		cancelFormCommand: 'onCancelFormCommand',
        		logoutButtonTappedCommand: 'onLogoutTappedCommand'
            },        	
        	"formslist" : 
        	{
            // The commands fired by the forms list container.
        		editFormCommand: 'onEditFormCommand'
            },        	
            loginPanel : 
            {
            	loginButtonTappedCommand: 'onLoginButtonTapped'
            },
            homePanel :
            {
            	logoutTappedCommand: 'onLogoutTappedCommand'
            },
            reportPanel :
            {
              // The commands fired by the Form report container.
              submitReportCommand: 'onSubmitReportCommand',
          		cancelReportCommand: 'onCancelReportCommand',
             	logoutButtonTappedCommand: 'onLogoutTappedCommand'
            }
            
        }
    },

    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },

    onLogoutTappedCommand: function () 
    {
        console.log("Event : onLogoutTappedCommand");
        var loginPanel = Ext.create('widget.loginform');
        loginPanel.clearFields();
        EnvPoolsForms.util.Config.resetValues();
        Ext.Viewport.animateActiveItem(loginPanel, this.slideLeftTransition);
    },
    gotoFormsTab: function () 
    {
        var homePanel = Ext.create('widget.homepanel');
        homePanel.getComponent('maintabpanel').setActiveItem(1);
        Ext.Viewport.animateActiveItem(homePanel, this.slideLeftTransition);
    },
    onCancelFormCommand: function () 
    {
        console.log("Event : onCancelFormCommand");
        this.gotoFormsTab();
    },
    onSubmitFormCommand: function (curForm, formName) 
    {
        console.log("Event : onSubmitFormCommand");
        console.log("The curForm is : " + curForm.getId());

        var reportPanel = Ext.create('widget.reportpanel');
        reportPanel.setFormDataView(curForm.getValues(true, true), formName);
        console.log(curForm.getValues());
        Ext.Viewport.setActiveItem(reportPanel, this.slideLeftTransition);
    },
    onCancelReportCommand: function () 
    {
        console.log("Event : onCancelReportCommand");
        this.gotoFormsTab();
    },
    onSubmitReportCommand: function (curForm) 
    {
      console.log("Event : onSubmitReportCommand");
      console.log("The curForm is : " + curForm.getId());
      var me = this;
      
      var formEditPanel = me.getFormEditor();

      if(!formEditPanel)
      {
        formEditPanel = Ext.create('widget.formeditorview');
      }

      formEditPanel.setMasked({
        xtype: 'loadmask',
        fullscreen: true,
        message: 'Sending Email...'
      });

      loginPanel.setMasked(true);

      console.log("The html is : \n" + curForm.getHtml());
      
      Ext.Ajax.request
      ({
          url: 'http://www.choateinc.com/emailer.php',
          params:
          {
              to_email: 'schoatejr@yahoo.com',
              from_email: EnvPoolsForms.util.Config.getUserEmail(),
//              from_email: 'schoatejr@gmail.com',
              subject: 'Estimate for client',
              message: curForm.getHtml()
          },
          withCredentials: false,
          useDefaultXhrHeader: false,
          timeout: 3000,

          success: function(response)
          {
          	
              console.log('Send email request was successful');
              console.log('The response was : ' + response);
          },
          failure: function(response)
          {
            
              console.log('Send email request failed');
              console.log('The response was : ' + response);
          }
      });

      formEditPanel.setMasked(false);

    },
    onEditFormCommand: function (list, record) 
    {
        console.log("Event : onEditFormCommand");
        this.activateFormEditor(record);
    },
    activateFormEditor: function (record) 
    {
        var me = this;
        var fieldsUrl = record.get('LinkFields');
        var formName = record.get('Name');
        console.log("Ready to activate form : " + formName);        
        console.log("Ready to call fields link : " + fieldsUrl);

        Ext.Ajax.request
          ({
        withCredentials: true,
        password: 'footastic',
        username: EnvPoolsForms.util.Config.getApiKey(),
        url: fieldsUrl,
        useDefaultXhrHeader: false,
        success: function(response) 
        {
            console.log('get testForms was successful');
            console.log(response.responseText);
  			var formEditorView = Ext.create('widget.formeditorview');
  			formEditorView.setFormDataView(formName, response.responseText.trim());
			Ext.Viewport.setActiveItem(formEditorView, this.slideLeftTransition);
        },
        failure: function(response) 
            {
                console.log('get testForms was failed');
        }
      });
        
        console.log('The new APIKey is  : ' + EnvPoolsForms.util.Config.getApiKey());
        
        var fieldsStore = Ext.getStore('Fields');
        if(!fieldsStore) fieldsStore = Ext.create('EnvPoolsForms.store.Fields');
        
        fieldsStore.getProxy().setUsername(EnvPoolsForms.util.Config.getApiKey());
        fieldsStore.getProxy().setUrl(fieldsUrl);
        console.log('The Fields store url is  : ' + fieldsStore.getProxy().getUrl());
        console.log('The Fields store getUsername is  : ' + fieldsStore.getProxy().getUsername());
        console.log('The Fields store getPassword is  : ' + fieldsStore.getProxy().getPassword());

        fieldsStore.load();
    },
	signInFailure: function (message) 
	{
	    var loginView = this.getLoginPanel();
	    loginView.showSignInFailedMessage(message);
	    loginView.setMasked(false);
	},    

  /**
   * Performs login info sequence.
   */    
  onLoginButtonTapped: function(view, email, password)
  {
    console.log('Email: ' + email + '\n' + 'Password: ' + password);

    var me = this,
        loginPanel = me.getLoginPanel();
	
    var homePanel = Ext.create('widget.homepanel');

    if (email.length === 0 || password.length === 0) {

        loginPanel.showSignInFailedMessage('Please enter your email and password.');
        return;
    }
  	
      loginPanel.setMasked({
          xtype: 'loadmask',
          fullscreen: true,
          message: 'Signing in...'
        });

      Ext.Ajax.request
      ({
          url: 'https://wufoo.com/api/v3/login.json',
          params:
          {
              integrationKey: 'Zjfp93fXVX',
              email: email,
              password: password,
              subdomain: 'environmentalpools'
          },
          withCredentials: false,
          useDefaultXhrHeader: false,
          timeout: 3000,

          success: function(response)
          {
          	loginPanel.setMasked(false);
          	
              console.log('Login post request was successful');
              console.log(response.responseText);
              var data = Ext.JSON.decode(response.responseText.trim());
              
              EnvPoolsForms.util.Config.setUserEmail(email);
              
              console.log('The currentApi key is : ' + EnvPoolsForms.util.Config.getApiKey());
              EnvPoolsForms.util.Config.setApiKey(data.ApiKey);
              console.log('The new APIKey is  : ' + EnvPoolsForms.util.Config.getApiKey());
              
              me.retreiveUserInfo();
              var reportsStore = Ext.getStore('Reports');
			if(!reportsStore) reportsStore = Ext.create('EnvPoolsForms.store.Reports');
              
				reportsStore.getProxy().setUsername(EnvPoolsForms.util.Config.getApiKey());
              console.log('The Report store url is  : ' + reportsStore.getProxy().getUrl());
              console.log('The Report store getUsername is  : ' + reportsStore.getProxy().getUsername());
              console.log('The Report store getPassword is  : ' + reportsStore.getProxy().getPassword());

              reportsStore.load();

	        Ext.Viewport.setActiveItem(homePanel, this.slideLeftTransition);
          },
          failure: function(response)
          {
          	loginPanel.setMasked(false);
              console.log('Login post request failed');
              loginPanel.showSignInFailedMessage('Login failed. Please check email and password.');
          }
      });
  },
  
  /**
   * Performs User Retreival sequence.
   */    
  retreiveUserInfo: function()
  {
    console.log('retreiveUserInfo');

    var me = this,
        loginPanel = me.getLoginPanel();
	
      Ext.Ajax.request
      ({
          url: 'https://environmentalpools.wufoo.com/api/v3/users.json',
          password: 'footastic',
          username: EnvPoolsForms.util.Config.getApiKey(),
          withCredentials: true,
          useDefaultXhrHeader: false,
          timeout: 3000,

          success: function(response)
          {
              console.log('Get User post request was successful');
              console.log(response.responseText);
              var data = Ext.JSON.decode(response.responseText.trim());
              
              if ( data && data.Users.length >0)
              {
                 EnvPoolsForms.util.Config.setUserName(data.Users[0].User);
              }
              
              console.log('The userName is : ' + EnvPoolsForms.util.Config.getUserName());
          },
          failure: function(response)
          {
          	loginPanel.setMasked(false);
            console.log('Get User post request failed');
            loginPanel.showSignInFailedMessage('Error occurred check connectivity');
          }
      });
  },
  
}

);