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
                var wfDataType = item.Type;
                var xType = "textfield";

	        	console.log('The element type is : ' + item.Type);
	        	console.log('The title is : ' + item.Title);

	    	/*	if (item.Type == 'text')
	    		{
	    			baseFieldSet.add({
	    				xtype: 'textfield',
	    				label: item.Title
	    			});
	    		};
                */

                switch (wfDataType) {
                    case "text":  //textfield
                        xType = "textfield";

                        baseFieldSet.add({
                            xtype: xType,
                            label: item.Title
                        });

                        break;
                    case "shortname":  //textfield
                        xType = "textfield";

                        baseFieldSet.add({
                            xtype: xType,
                            label: item.Title
                        });

                        break;
                   case "date":  //datefield
                        xType = "datepickerfield";

                         baseFieldSet.add({
                            xtype: xType,
                            label: item.Title,
                            value: new Date(),
                            picker: {
                                yearFrom: 1990
                            }
                        });

                        break;                   
               /*    case "time": //timefield
                        xType = "timepickerfield";

                        baseFieldSet.add({
                            xtype: xType,
                            value: new Date(),
                            label: item.Title,
                            picker: {
                                minHours: 9,
                                maxHours: 18
                            }
                           
                        });

                        break; */
                  case "checkbox":  //checkboxfield
                        xType = "checkboxfield";

                         baseFieldSet.add({
                            xtype: xType,
                            label: item.Title
                        });

                        break;
                    case "textarea":  //textareafield
                        xType = "textareafield";

                         baseFieldSet.add({
                            xtype: xType,
                            label: item.Title
                        });

                        break; 
                }

                

        });
    	this.add(baseFieldSet);
    }
});