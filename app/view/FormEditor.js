Ext.define("EnvPoolsForms.view.FormEditor", {
    extend: "Ext.form.Panel",
    requires: ["Ext.form.FieldSet","Ext.field.DatePicker", "Ext.field.Checkbox", "Ext.field.TextArea"],
    alias: "widget.formeditorview",
    xtype: "formeditorview",
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
            	name: "mainFieldset",
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
    	var baseFieldSet = Ext.create('Ext.form.FieldSet',
    			{
    		   defaults: 
    		   {
    	       		labelWidth: "35%",
    	       		labelWrap: "true"
    			}
    			}
    			);
    	Ext.iterate(jsonData.Fields, function(item) 
    	{
                var wfDataType = item.Type;
                var xType = "textfield";

	        	console.log('The element type is : ' + item.Type);
	        	console.log('The title is : ' + item.Title);
	        	console.log('The ID is : ' + item.ID);

                switch (wfDataType) {
                    case "text":  //textfield
                        xType = "textfield";

                        baseFieldSet.add({
                            xtype: xType,
                            name: item.ID,
                            label: item.Title
                        });

                        break;
                    case "shortname":  //textfield
                        xType = "textfield";

                        baseFieldSet.add({
                            xtype: xType,
                            name: item.ID,
                            label: item.Title
                        });

                        break;
                   case "date":  //datefield
                        xType = "datepickerfield";

                         baseFieldSet.add({
                            xtype: xType,
                            name: item.ID,
                            label: item.Title,
                            value: new Date(),
                            picker: {
                                yearFrom: 1990
                            }
                        });

                        break;                   
                  case "checkbox":  //checkboxfield
                        xType = "checkboxfield";

                         baseFieldSet.add({
                            xtype: xType,
                            name: item.ID,
                            label: item.Title
                        });

                        break;
                    case "textarea":  //textareafield
                        xType = "textareafield";

                         baseFieldSet.add({
                            xtype: xType,
                            name: item.ID,
                            label: item.Title
                        });

                        break; 
                }

                

        });
    	this.add(baseFieldSet);
    }    
});