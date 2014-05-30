Ext.define("EnvPoolsForms.view.FormEditor", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.formeditorview",
    config: {
        scrollable: 'vertical',
        items: [
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
    	Ext.iterate(jsonData.Fields, function(item) 
    	{
        	console.log('The element type is : ' + item.Type);
        	console.log('The title is : ' + item.Title);
    		if (item.Type == 'text')
    		{
    			me.add({
    				xtype: 'textfield',
    				label: item.Title
    			});
    		};
        });
    }
});

