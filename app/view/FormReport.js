Ext.define("EnvPoolsForms.view.FormReport", {
    extend: "Ext.form.Panel",
    requires: ["Ext.form.FieldSet"],
    alias: "widget.reportpanel",
    xtype: "reportpanel",
    config: {
        record : {},
        form : {},
        scrollable: 'vertical',
        items: [
                {
                    xtype: 'titlebar',
                    cls: 'title',
                    docked: 'top',
                    title: 'Environmental Pools',
                    items: [
                {
                   ui: 'button',
                   action: 'logoutCommand',
                   itemId:"logoutButton",
                   align: 'right',
                   text: 'Logout'
                },
                {
                  ui: 'button',
                  iconCls: 'info',
                  action: 'aboutCommand',
                  itemId:"aboutButton",
                  align: 'right'
                }
              ]
                },                
            {
                xtype: "toolbar",
                docked: "bottom",      
                items: [
                        {
                            xtype: "button",
                            ui: "action",
                            iconCls: "action",
                            text: "Submit",
                            itemId: "submitButton"
                        },
                        {
                            xtype: "button",
                            ui: "back",
                            iconCls: "back",
                            text: "Back",
                            itemId: "backButton"
                        },
                        {
                            xtype: "button",
                            ui: "delete",
                            iconCls: "delete",
                            text: "cancel",
                            itemId: "cancelButton"
                        }
                ]
            },
        ],
        listeners: [
            {
                delegate: "#logoutButton",
                event: "tap",
                fn: "onLogoutButtonTap"
            },
            {
                delegate: "#aboutButton",
                event: "tap",
                fn: "onAboutButtonTap"
            },
            {
                delegate: "#submitButton",
                event: "tap",
                fn: "onSubmitButtonTap"
            },
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
            },
            {
                delegate: "#cancelButton",
                event: "tap",
                fn: "onCancelButtonTap"
            }
        ]
    },
    onAboutButtonTap: function () {
        console.log("onAboutButtonTap");
        this.fireEvent("aboutButtonTapCommand", this);
    },
    onBackButtonTap: function () {
        console.log("onBackButtonTap");
        this.fireEvent("backReportButtonTapCommand", this, this.config.form, this.config.record);
    },
    onLogoutButtonTap: function () {
        console.log("onLogoutButtonTap");
        this.fireEvent("logoutButtonTappedCommand", this);
    },
    onSubmitButtonTap: function () {
        console.log("onSubmitButtonTap");
        this.fireEvent("submitReportCommand", this);
    },
    onCancelButtonTap: function () {
        console.log("onCancelButtonTap");
        this.fireEvent("cancelReportCommand", this);
    },
    setFormDataView: function(form, record, formName)
    {
        this.config.record = record;
        this.config.form = form;
        console.log("Now in FormReports.setFormDataView");
		var results = EnvPoolsForms.util.Config.generateHTMReport(record.getData(), formName);
 		this.setHtml(results);		
    }    
});