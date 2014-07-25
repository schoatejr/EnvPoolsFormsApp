Ext.define("EnvPoolsForms.view.FormEditor", {
    extend: "Ext.form.Panel",
    requires: ["Ext.form.FieldSet", "Ext.field.Number", "Ext.field.DatePicker", "Ext.field.Checkbox", "Ext.field.TextArea", "EnvPoolsForms.view.DateTimePicker"],
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
        this.fireEvent("submitFormCommand", this);
    },
    onCancelButtonTap: function () {
        console.log("onCancelButtonTap");
        this.fireEvent("cancelFormCommand", this);
    },
    setFormDataView: function(formName, data) 
    {
    	var me = this;
        var isbaseFieldSet = false;    	
    	var jsonData  = JSON.parse(data);
    	var baseFieldSet = Ext.create('Ext.form.FieldSet',
    			{
    		   defaults: 
    		   {
    	       		labelWidth: "35%",
    	       		labelWrap: "true"
    		   },
    		   title: formName
    			}
    			);
    	Ext.iterate(jsonData.Fields, function(item) 
    	{
                var wfDataType = item.Type;
                var xType = "textfield";
                tmpBol = ( (item.IsRequired == null) || (item.IsRequired == 0))?false:true;

	        	console.log('The element type is : ' + item.Type);
	        	console.log('The title is : ' + item.Title);
	        	console.log('The ID is : ' + item.ID);

                switch (wfDataType) {
                case "text":  //textfield
                    xType = "textfield";

                    baseFieldSet.add({
                        xtype: xType,
                        name: item.ID,
                        required: tmpBol,
                        label: item.Title
                    });

                    break;
                case "number":  //textfield
                    xType = "numberfield";

                    baseFieldSet.add({
                        xtype: xType,
                        name: item.ID,
                        required: tmpBol,
                        label: item.Title
                    });

                    break;
                    case "shortname":  //textfield
                        xType = "textfield";

                        baseFieldSet.add({
                            xtype: xType,
                            name: item.ID,
                            required: tmpBol,
                            label: item.Title
                        });

                        break;
                   case "date":  //datefield
                        xType = "datepickerfield";

                         baseFieldSet.add({
                            xtype: xType,
                            name: item.ID,
                            required: tmpBol,
                            label: item.Title,
                            value: new Date(),
                            picker: {
                                yearFrom: 1990
                            }
                        });

                        break;                   
                  case "checkbox":  //checkboxfield
                        xType = "checkboxfield";

                         if (item.ClassNames == 'group_tbl_cls')
                         {
                        	console.log('We found a special table');
                        	console.log('The subfields : ' + item.SubFields);
                        	
                        	if (!isbaseFieldSet)
                        	{
                        		isbaseFieldSet = !isbaseFieldSet;
                        		me.add(baseFieldSet);
                        	}
                        	
                        	if ((item.SubFields != null) && (item.SubFields.length > 0))
                        	{
                             	var innerBaseFieldSet = Ext.create('Ext.form.FieldSet',
                                		{
                                		   defaults: 
                                		   {
                                	       		labelWidth: "35%",
                                	       		labelWrap: "true"
                                		   },
                             	           title:item.Title
                                		}
                                	);                        	 

                        		console.log('The number of subfields : ' + item.SubFields.length);
                        		Ext.iterate(item.SubFields, function(innerItem) 
                        		    	{
                        			console.log('The inner field is : ' + innerItem.Label);
                        			
                        			innerBaseFieldSet.add({
                                        xtype: "textfield",
                                        name: innerItem.ID,
                                        label: innerItem.Label
                                    });                        			
                        			
                        		    	}
                        		);
                        		
                        		me.add(innerBaseFieldSet);
                        	}
                         }
                         else
                         {
                         
                         baseFieldSet.add({
                            xtype: xType,
                            name: item.ID,
                            required: tmpBol,
                            label: item.Title
                        });
                         }

                        break;
                  case "textarea":  //textareafield
                      xType = "textareafield";

                       baseFieldSet.add({
                          xtype: xType,
                          name: item.ID,
                          required: tmpBol,
                          label: item.Title
                      });

                      break; 
                  case "time":  //textareafield
                      xType = "datetimepickerfield";

                       baseFieldSet.add({
                          xtype: xType,
                          name: item.ID,
                          required: tmpBol,
                          label: item.Title,
                          value: new Date(),
                          dateTimeFormat : 'h:i:A',
                          picker: {
                              yearFrom: 1980,
                              minuteInterval : 1,
                              ampm : true,
                              slotOrder: ['hour','minute','ampm']
                          }                          
                      });

                      break; 
                }

                

        });
    	
    	if (!isbaseFieldSet)
    	{
    		this.add(baseFieldSet);
    	}    	
    }    
});