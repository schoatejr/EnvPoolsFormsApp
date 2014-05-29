Ext.define('EnvPoolsForms.controller.FormCtrl', {
    extend: 'Ext.app.Controller',

    config: 
    {
        refs: 
        {
                mainView: 'mainview',
              loginPanel: 'loginform',
               formsList: 'formslist',
          formEditorView: 'formeditorview',
               homePanel: 'homepanel',
            mainTabPanel: 'homepanel #maintabpanel'
        },
        control: 
        {
        	formEditorView : 
        	{
                // The commands fired by the notes list container.
        		submitFormCommand: "onSubmitFormCommand",
        		cancelFormCommand: "onCancelFormCommand"
            },        	
        	"formslist" : 
        	{
                // The commands fired by the notes list container.
        		editFormCommand: "onEditFormCommand"
            },        	
            loginPanel : 
            {
            	loginButtonTappedCommand: 'onLoginButtonTapped'
            },
            homePanel :
            {
            	logoutTappedCommand: 'onLogoutTappedCommand'
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
        Ext.Viewport.animateActiveItem(loginPanel, this.slideLeftTransition);
    },
    onCancelFormCommand: function () 
    {
        console.log("Event : onCancelFormCommand");
        homePanel = Ext.create('widget.homepanel');
        mainTabPanel = this.getMainTabPanel();
        mainTabPanel.setActiveItem(1);
        Ext.Viewport.animateActiveItem(homePanel, this.slideLeftTransition);
    },
    onSubmitFormCommand: function (list, record) 
    {
        console.log("Event : onSubmitFormCommand");
    },
    onEditFormCommand: function (list, record) 
    {
        console.log("Event : onEditFormCommand");
        this.activateFormEditor(record);
    },
    activateFormEditor: function (record) 
    {
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
        var formEditorView = Ext.create('widget.formeditorview');
        formEditorView.setRecord(record);
        Ext.Viewport.animateActiveItem(formEditorView, this.slideLeftTransition);
    },

    /**
     * Performs the login sequence.
     */    
    onLoginButtonTapped: function(button)
    {
    	console.log("Event : onLoginButtonTapped");
    	
    	var me = this;
        var mainView = this.getMainView(),			// Main view
        	loginPanel = this.getLoginPanel();
        var homePanel = Ext.create('widget.homepanel');

        var email = loginPanel.getValues().email,
            password = loginPanel.getValues().password;

        loginPanel.setMasked({
            xtype: 'loadmask',
            message: 'Connecting...'
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

            success: function(response)
            {
            	loginPanel.setMasked(false);
                console.log('Login post request was successful');
                console.log(response.responseText);
                var data = Ext.JSON.decode(response.responseText.trim());
                
                console.log('The currentApi key is : ' + EnvPoolsForms.util.Config.getApiKey());
                EnvPoolsForms.util.Config.setApiKey(data.ApiKey);
                console.log('The new APIKey is  : ' + EnvPoolsForms.util.Config.getApiKey());
                
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
                console.log('Login post request failed');
            }
        });
    },
}

);