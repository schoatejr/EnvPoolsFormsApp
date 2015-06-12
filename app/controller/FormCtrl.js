Ext.define('EnvPoolsForms.controller.FormCtrl', {
    extend: 'Ext.app.Controller',

    config: 
    {
        refs: 
        {
                'navView': 'navigationview',
                mainView: 'mainview',
              loginPanel: 'loginform',
               formsList: 'formslist',
          formEditor: 'formeditorview',
          fieldsForm: 'formeditorview #fieldsform',
               homePanel: 'homepanel',
            mainTabPanel: 'homepanel #maintabpanel',
              reportPanel: 'reportpanel',
            photosList: 'photoslist',
            photoViewerPanel: 'photoviewerpanel',
            videosList: 'videoslist',
            videoViewerPanel: 'videoviewerpanel',
            plansList: 'planslist',
            planViewerPanel: 'planviewerpanel'
        },
        control: 
	        {
        	formEditor :
        	{
            // The commands fired by the Form Editor container.
        		submitFormCommand: 'onSubmitFormCommand',
        		cancelFormCommand: 'onCancelFormCommand',
        		logoutButtonTappedCommand: 'onLogoutTappedCommand',
        		aboutButtonTapCommand: 'onAboutButtonTapCommand'        		
            },        	
        	"formslist" : 
        	{
            // The commands fired by the forms list container.
        		editFormCommand: 'onEditFormCommand',
        		aboutButtonTapCommand: 'onAboutButtonTapCommand'        		
            },        	
            loginPanel : 
            {
            	loginButtonTappedCommand: 'onLoginButtonTapped'
            },
            homePanel :
            {
            	logoutTappedCommand: 'onLogoutTappedCommand',
            	aboutButtonTapCommand: 'onAboutButtonTapCommand'
            },
            reportPanel :
            {
            	// The commands fired by the Form report container.
            	submitReportCommand: 'onSubmitReportCommand',
              	backReportButtonTapCommand: 'onBackReportButtonTapCommand',
          		cancelReportCommand: 'onCancelReportCommand',
             	logoutButtonTappedCommand: 'onLogoutTappedCommand',
            	aboutButtonTapCommand: 'onAboutButtonTapCommand'
            },
            photosList:
            {
                viewPhotoCommand: 'onViewPhotoCommand',
                reloadFilesCommand : 'onReloadFilesCommand'
            },
            photoViewerPanel:
            {
                backPhotosButtonTapCommand: 'onBackPhotosButtonTapCommand',
                logoutButtonTappedCommand: 'onLogoutTappedCommand',
                aboutButtonTapCommand: 'onAboutButtonTapCommand'
            },
            plansList:
            {
                viewPlanCommand: 'onViewPlanCommand',
                reloadFilesCommand : 'onReloadFilesCommand'
            },
            planViewerPanel:
            {
                backPlansButtonTapCommand: 'onBackPlansButtonTapCommand',
                logoutButtonTappedCommand: 'onLogoutTappedCommand',
                aboutButtonTapCommand: 'onAboutButtonTapCommand'
            },
            videosList:
            {
                viewVideoCommand: 'onViewVideoCommand',
                reloadFilesCommand : 'onReloadFilesCommand'
            },
            videoViewerPanel:
            {
                backVideosButtonTapCommand: 'onBackVideosButtonTapCommand',
                logoutButtonTappedCommand: 'onLogoutTappedCommand',
                aboutButtonTapCommand: 'onAboutButtonTapCommand'
            }
        }
    },

    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },

        onReloadFilesCommand: function()
        {
           this.initializeFoldersData();
        },
        onViewPhotoCommand: function(fileName)
        {
            var viewerpanel = Ext.create('widget.photoviewerpanel');
            viewerpanel.setFileSrc("http://www.choateinc.com/Photos/" + fileName);
            Ext.Viewport.animateActiveItem(viewerpanel, this.slideLeftTransition);

        },
        onViewVideoCommand: function(fileName)
        {
            var viewerpanel = Ext.create('widget.videoviewerpanel');
            viewerpanel.setFileSrc(["http://www.choateinc.com/Videos/" + fileName]);
            Ext.Viewport.animateActiveItem(viewerpanel, this.slideLeftTransition);

        },
        onViewPlanCommand: function(fileName)
        {
            var viewerpanel = Ext.create('widget.planviewerpanel');
            viewerpanel.setFileSrc("http://www.choateinc.com/Plans/" + fileName);
            Ext.Viewport.animateActiveItem(viewerpanel, this.slideLeftTransition);

        },
    onAboutButtonTapCommand: function ()
    {
        //console.debug("Event : onAboutButtonTapCommand");
        var msg = "";
        msg += "Environmental Pools" + "<br>";
        msg += "Forms App" + "<br>";
        msg += "Version 1.0" + "<br>";
        Ext.Msg.alert("", msg);
    },

        onBackPhotosButtonTapCommand: function ()
        {
            this.gotoFormsTab(1);
        },
        onBackPlansButtonTapCommand: function ()
        {
            this.gotoFormsTab(2);
        },
        onBackVideosButtonTapCommand: function ()
        {
            this.gotoFormsTab(3);
        },
    onBackReportButtonTapCommand: function (curForm, formEditor, record)
    {
        //console.debug("Event : onBackReportButtonTapCommand");
        Ext.Viewport.setActiveItem(formEditor, this.slideLeftTransition);
        //this.gotoFormsTab(0);
    },
    onLogoutTappedCommand: function ()
    {
        //console.debug("Event : onLogoutTappedCommand");
        var loginPanel = Ext.create('widget.loginform');
        loginPanel.clearFields();
        EnvPoolsForms.util.Config.resetValues();
        Ext.Viewport.animateActiveItem(loginPanel, this.slideLeftTransition);
    },
    gotoFormsTab: function (tabNumber)
    {
        var homePanel = Ext.create('widget.homepanel');
        homePanel.setSelectedTab(tabNumber);
        Ext.Viewport.animateActiveItem(homePanel, this.slideLeftTransition);
    },
    onCancelFormCommand: function () 
    {
        //console.debug("Event : onCancelFormCommand");
        this.hideKeyboard();
        this.gotoFormsTab(0);
    },
    onSubmitFormCommand: function (curForm, formName) 
    {
        //console.debug("Event : onSubmitFormCommand");
        //console.debug("The curForm is : " + curForm.getId());

        // get model instance "bound" to form
        var rec = curForm.getRecord();

        // transfer data from form fields to model fields
        rec.set(curForm.getValues());

        // perform validation checks
        var errors = rec.validate();

        if (!errors.isValid()) {
            // at least one error occurred
            var errorMsg = "";
            errors.each(function (errorObj) {
                errorMsg += errorObj.getMessage() + "<br>";
                //console.debug("Error occurred " + errorObj.getMessage() + "\n");
            });
            Ext.Msg.alert("Errors", errorMsg);
        } else {
            // good-to-go -- commit changes back through the proxy
            var reportPanel = Ext.create('widget.reportpanel');
            reportPanel.setFormDataView(curForm, rec, formName);

            //console.debug(curForm.getValues());
            this.hideKeyboard();
            Ext.Viewport.setActiveItem(reportPanel, this.slideLeftTransition);
        }

    },
    hideKeyboard: function() {
        var activeElement = document.activeElement;
        activeElement.setAttribute('readonly', 'readonly'); // Force keyboard to hide on input field.
        activeElement.setAttribute('disabled', 'true'); // Force keyboard to hide on textarea field.
        Ext.defer(function() {
            activeElement.blur();
            // Remove readonly attribute after keyboard is hidden.
            activeElement.removeAttribute('readonly');
            activeElement.removeAttribute('disabled');
        }, 100);
    },    
    onCancelReportCommand: function ()
    {
        //console.debug("Event : onCancelReportCommand");
        this.gotoFormsTab(0);
    },
    onSubmitReportCommand: function (curForm) 
    {
      //console.debug("Event : onSubmitReportCommand");
      //console.debug("The curForm is : " + curForm.getId());
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

      //loginPanel.setMasked(true);

      //console.debug("The html is : \n" + curForm.getHtml());
      
      Ext.Ajax.request
      ({
          url: 'http://www.environmentalpools.com/emailer.php',
          params:
          {
              // This is the email address we are sending our report to
              to_email: 'job_work_orders@environmentalpools.com',

              // This is the email address of an account on the server that will
              // be sending the email.
              from_email: 'job_work_orders@environmentalpools.com',

              // This is the email address that will show up when the recipient of the
              // report click 'Reply'
              replyTo_email: EnvPoolsForms.util.Config.getUserEmail(),
              subject: 'Job Work Order ',
              message: curForm.getHtml()
          },
          withCredentials: false,
          useDefaultXhrHeader: false,
          timeout: 3000,

          success: function(response)
          {
          	
              console.debug('Send email request was successful');
              console.debug('The response was : ' + response);
              Ext.Msg.alert("", "Report sent!")
              me.gotoFormsTab(0);
          },
          failure: function(response)
          {
            
              console.debug('Send email request failed');
              console.debug('The response was : ' + response);
              Ext.Msg.alert("Error", "Problem occurred attempting to email report");
          }
      });

      formEditPanel.setMasked(false);

    },
    onEditFormCommand: function (list, record) 
    {
        //console.debug("Event : onEditFormCommand");
        this.activateFormEditor(record);
    },
    activateFormEditor: function (record) 
    {
        var me = this;
        var fieldsUrl = record.get('LinkFields');
        var formName = record.get('Name').split(")")[1].trim();
        //console.debug("Ready to activate form : " + formName);
        //console.debug("Ready to call fields link : " + fieldsUrl);

        Ext.Ajax.request
          ({
        withCredentials: true,
        password: 'footastic',
        username: EnvPoolsForms.util.Config.getApiKey(),
        url: fieldsUrl,
        useDefaultXhrHeader: false,
        success: function(response) 
        {
            //console.debug('get testForms was successful');
            //console.debug(response.responseText);
  			var formEditorView = Ext.create('widget.formeditorview');
  			formEditorView.setFormDataView(formName, response.responseText.trim());
			Ext.Viewport.setActiveItem(formEditorView, this.slideLeftTransition);
        },
        failure: function(response) 
            {
                //console.debug('get testForms was failed');
        }
      });
        
        //console.debug('The new APIKey is  : ' + EnvPoolsForms.util.Config.getApiKey());
        
        var fieldsStore = Ext.getStore('Fields');
        if(!fieldsStore) fieldsStore = Ext.create('EnvPoolsForms.store.Fields');
        
        fieldsStore.getProxy().setUsername(EnvPoolsForms.util.Config.getApiKey());
        fieldsStore.getProxy().setUrl(fieldsUrl);
        //console.debug('The Fields store url is  : ' + fieldsStore.getProxy().getUrl());
        //console.debug('The Fields store getUsername is  : ' + fieldsStore.getProxy().getUsername());
        ////console.debug('The Fields store getPassword is  : ' + fieldsStore.getProxy().getPassword());

        fieldsStore.load();
    },
	signInFailure: function (message) 
	{
	    var loginView = this.getLoginPanel();
	    loginView.showSignInFailedMessage(message);
	    loginView.setMasked(false);
	},

   populateDirectoryStoreByName: function(record)
   {
       var files = record.files();
       var dirName = record.data.name;

       console.log('Folder Name: ' + dirName);
       if (files.data.length > 0)
       {
           if(record.data.name === dirName)
           {
               var store = Ext.getStore(dirName);
               if(!store)
               {
                   store = Ext.create('EnvPoolsForms.store.' + dirName);
               }

               store.clearData();
               Ext.each(files.data.items, function (file)
               {
                   var newRecord = new EnvPoolsForms.model.File({name: file.data.name, type: file.data.type, isvisible: file.data.isvisible});
                   store.add(newRecord);
               });
           }
       }
   },

   initializeFoldersData: function()
   {

       var me = this;
       var folderStores = Ext.getStore('Folders');
       folderStores.load(function(records, options, success)
       {

           //console.log(records);
           if (success)
           {
               Ext.each(records, function (record)
               {
                   me.populateDirectoryStoreByName(record);

               });
           }
       });
   },

  /**
   * Performs login info sequence.
   */    
  onLoginButtonTapped: function(view, email, password, saveCredentials)
  {
    var me = this,
        loginPanel = me.getLoginPanel();
    var homePanel = Ext.create('widget.homepanel');

      var userStore = Ext.getStore('Users');
      if(!userStore) userStore = Ext.create('EnvPoolsForms.store.Users');
      if (userStore.getCount() > 0)
      {
          console.log("There was a record for the email and password");

          var newRecord = userStore.getAt(0);
          var emailVal = newRecord.email;
          var passwordVal = newRecord.password;
          //console.log("The email is [" + newRecord.email + "] the password is [" + newRecord.password + "]");
      }

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

              //console.debug('Login post request was successful');
              //console.debug(response.responseText);
              var data = Ext.JSON.decode(response.responseText.trim());

              EnvPoolsForms.util.Config.setUserEmail(email);

              //console.debug('The currentApi key is : ' + EnvPoolsForms.util.Config.getApiKey());
              EnvPoolsForms.util.Config.setApiKey(data.ApiKey);
              //console.debug('The new APIKey is  : ' + EnvPoolsForms.util.Config.getApiKey());

              me.retreiveUserInfo();
              me.initializeFoldersData();

              var reportsStore = Ext.getStore('Reports');
              if (!reportsStore) reportsStore = Ext.create('EnvPoolsForms.store.Reports');

              reportsStore.getProxy().setUsername(EnvPoolsForms.util.Config.getApiKey());
              //console.debug('The Report store url is  : ' + reportsStore.getProxy().getUrl());
              //console.debug('The Report store getUsername is  : ' + reportsStore.getProxy().getUsername());
              ////console.debug('The Report store getPassword is  : ' + reportsStore.getProxy().getPassword());

              reportsStore.load();
              //reportsStore.autoLoad = true;

              //our Store automatically picks up the LocalStorageProxy defined on the Search model
              var userStore = Ext.getStore('Users');
              if (!userStore) userStore = Ext.create('EnvPoolsForms.store.Users');
              userStore.clearData();

            if (saveCredentials.getChecked())
            {
              var newRecord = new EnvPoolsForms.model.User({email: email, password: password});
              userStore.add(newRecord);
            }

            //finally, save our Search data to localStorage
              userStore.sync();
	        Ext.Viewport.setActiveItem(homePanel, this.slideLeftTransition);
          },
          failure: function(response)
          {
          	loginPanel.setMasked(false);
              //console.debug('Login post request failed');
              loginPanel.showSignInFailedMessage('Login failed. Please check email and password.');
          }
      });
  },

        /**
         * Performs User Retreival sequence.
         */
        retreiveUserInfo: function()
        {
            //console.debug('retreiveUserInfo');

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
                    //console.debug('Get User post request was successful');
                    //console.debug(response.responseText);
                    var data = Ext.JSON.decode(response.responseText.trim());

                    if ( data && data.Users.length >0)
                    {
                        EnvPoolsForms.util.Config.setUserName(data.Users[0].User);
                    }

                    //console.debug('The userName is : ' + EnvPoolsForms.util.Config.getUserName());
                },
                failure: function(response)
                {
                    loginPanel.setMasked(false);
                    //console.debug('Get User post request failed');
                    loginPanel.showSignInFailedMessage('Error occurred check connectivity');
                }
            });
        },


        /**
         * Performs Folders Retreival sequence.
         */
        retreiveFoldersInfo: function()
        {
            //console.debug('retreiveFoldersInfo');

            var me = this;

            var filesStore = Ext.getStore('Files');
            if(!filesStore)
            {
                filesStore = Ext.create('EnvPoolsForms.store.Reports');
            }
            filesStore.load();
        }

}

);