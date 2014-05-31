Ext.define("EnvPoolsForms.view.FormEditor", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.formeditorview",
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
            {   xtype: "fieldset",
            	itemId: "fieldsform",
            	items:[]
            }
        ],
        listeners: [
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
    onSubmitButtonTap: function () {
        console.log("onSubmitButtonTap");
        this.fireEvent("submitFormCommand", this);
    },
    onCancelButtonTap: function () {
        console.log("onCancelButtonTap");
        this.fireEvent("cancelFormCommand", this);
    },
    setFormDataView: function(data) 
    {
    	var me = this;
    	var jsonData  = JSON.parse(data);
    	var baseFieldSet = Ext.create('Ext.form.FieldSet');
    	Ext.iterate(jsonData.Fields, function(item) 
    	{
	        	console.log('The element type is : ' + item.Type);
	        	console.log('The title is : ' + item.Title);
	    		if (item.Type == 'text')
	    		{
	    			baseFieldSet.add({
	    				xtype: 'textfield',
	    				label: item.Title
	    			});
	    		};
        });
    	this.add(baseFieldSet);
    }
});