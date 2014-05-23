Ext.define('EnvPoolsForms.controller.FormCtrl', {
    extend: 'Ext.app.Controller',

    config: 
    {
        refs: 
        {
                mainView: 'mainview',
              loginPanel: 'mainview #loginPanel',
            welcomePanel: 'mainview #welcomePanel',
               formsList: 'formslist',
          formEditorView: 'formeditorview',
          
        },
        control: 
        {
        	formEditorview : 
        	{
                // The commands fired by the notes list container.
        		submitFormCommand: "onSubmitFormCommand"
            },        	
        	"formslist" : 
        	{
                // The commands fired by the notes list container.
        		editFormCommand: "onEditFormCommand"
            },        	
            "mainview #loginButton": 
            {
                tap: 'login'
            },
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
    login: function(button, e, eOpts)
    {
    	var me = this;
        var mainView = this.getMainView(),			// Main view
        	loginPanel = this.getLoginPanel();

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
                reportsStore.getProxy().setUrl('https://' + EnvPoolsForms.util.Config.getApiKey() + ':footastic@environmentalpools.wufoo.com/api/v3/forms.json');
                reportsStore.load();
                
//              // Navigate to register
		          mainView.push({
		              xtype: "homepanel",
		              title: "The Home Panel"
		          });
		          
                
            },
            failure: function(response)
            {
                console.log('Login post request failed');
            }
        });
    }
}

);