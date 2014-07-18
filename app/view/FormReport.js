Ext.define("EnvPoolsForms.view.FormReport", {
    extend: "Ext.form.Panel",
    requires: ["Ext.form.FieldSet"],
    alias: "widget.reportpanel",
    xtype: "reportpanel",
    config: {
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
                delegate: "#submitButton",
                event: "tap",
                fn: "onSubmitButtonTap"
            },
            {
                delegate: "#cancelButton",
                event: "tap",
                fn: "onCancelButtonTap"
            }
        ]
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
    setFormDataView: function(data) 
    {
        console.log("Now in FormReports.setFormDataView");      
		var results = EnvPoolsForms.util.Config.generateHTMReport(data);
 		this.setHtml(results);		
    }    
});