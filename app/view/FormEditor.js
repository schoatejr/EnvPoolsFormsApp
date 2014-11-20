Ext.define("EnvPoolsForms.view.FormEditor", {
    extend: "Ext.form.Panel",
    requires: ["Ext.form.FieldSet", "Ext.field.Number", "Ext.field.DatePicker", "Ext.field.Checkbox", "Ext.field.TextArea", "EnvPoolsForms.view.DateTimePicker"],
    alias: "widget.formeditorview",
    xtype: "formeditorview",
    formName: "",
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
                delegate: "#aboutButton",
                event: "tap",
                fn: "onAboutButtonTap"
            },                    
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
    onAboutButtonTap: function () {
        console.log("onAboutButtonTap");
        this.fireEvent("aboutButtonTapCommand", this);
    },      
    onLogoutButtonTap: function () {
        console.log("onLogoutButtonTap");
        this.fireEvent("logoutButtonTappedCommand", this);
    },
    onSubmitButtonTap: function () {
        console.log("onSubmitButtonTap");
        this.fireEvent("submitFormCommand", this, this.formName);
    },
    onCancelButtonTap: function () {
        console.log("onCancelButtonTap");
        this.fireEvent("cancelFormCommand", this);
    },
    setFormDataView: function (formName, data) {
        var me = this;
        this.formName = formName;
        var isbaseFieldSet = false;
        var jsonData = JSON.parse(data);
        var baseFieldSet = Ext.create('Ext.form.FieldSet',
            {
                defaults: {
                    labelWidth: "35%",
                    labelWrap: "true"
                },
                title: formName
            }
        );

        var reportModel = Ext.create('EnvPoolsForms.model.Report');

        var modelFields = []; //this can be obtained dynamically
        var validations = []; // This is the dynamic set of validations for the model

        Ext.iterate(jsonData.Fields, function (item) {
            var wfDataType = item.Type;
            var xType = "textfield";
            tmpBol = ( (item.IsRequired == null) || (item.IsRequired == 0)) ? false : true;

	        	console.log('The element type is : ' + item.Type);
	        	console.log('The title is : ' + item.Title);
	        	console.log('The ID is : ' + item.ID);

            switch (wfDataType) {
                case "text":  //textfield
                    xType = "textfield";

                    val = "";

                    if ((item.Title == "Entry Id") || (item.Title == "Updated By") || (item.Title == "Created By")) {
                        break;
                    }

                    baseFieldSet.add({
                        xtype: xType,
                        name: item.ID,
                        required: tmpBol,
                        label: item.Title
                    });

                    modelFields.push(new Ext.data.Field(item.ID, xType));

                    if (tmpBol) {
                        validations.push({type: 'presence', field: item.ID, message: item.Title + ': must be present'});
                    }

                    break;
                case "number":  //textfield
                    xType = "numberfield";

                    baseFieldSet.add({
                        xtype: xType,
                        name: item.ID,
                        required: tmpBol,
                        label: item.Title
                    });

                    if (tmpBol) {
                        validations.push({type: 'presence', field: item.ID, message: item.Title + ': must be present'});
                    }
                    break;
                case "shortname":  //textfield
                    xType = "textfield";

                    baseFieldSet.add({
                        xtype: xType,
                        name: item.ID,
                        required: tmpBol,
                        label: item.Title
                    });

                    if (tmpBol) {
                        validations.push({type: 'presence', field: item.ID, message: item.Title + ': must be present'});
                    }

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

                    modelFields.push(new Ext.data.Field(item.ID, xType));
                    break;
                case "checkbox":  //checkboxfield
                    xType = "checkboxfield";

                    if ((item.ClassNames == 'Table') || (item.ClassNames == 'NumberTable')) {
                        console.log('We found a special table');
                        console.log('The subfields : ' + item.SubFields);

                        if (!isbaseFieldSet) {
                            isbaseFieldSet = !isbaseFieldSet;
                            me.add(baseFieldSet);
                        }

                        if ((item.SubFields != null) && (item.SubFields.length > 0)) {
                            var innerBaseFieldSet = Ext.create('Ext.form.FieldSet',
                                {
                                    defaults: {
                                        labelWidth: "35%",
                                        labelWrap: "true"
                                    },
                                    title: item.Title
                                }
                            );

                            console.log('The number of subfields : ' + item.SubFields.length);
                            Ext.iterate(item.SubFields, function (innerItem) {
                                    console.log('The inner field is : ' + innerItem.Label);


                                    var tmpType = "textfield";

                                    if (item.ClassNames == 'NumberTable')
                                    {
                                        tmpType = "numberfield";
                                    }

                                    innerBaseFieldSet.add({
                                        xtype: tmpType,
                                        name: innerItem.ID,
                                        label: innerItem.Label
                                    });

                                    modelFields.push(new Ext.data.Field(item.ID, tmpType));

                                }
                            );

                            me.add(innerBaseFieldSet);
                        }
                    }
                    else {

                        baseFieldSet.add({
                            xtype: xType,
                            name: item.ID,
                            required: tmpBol,
                            label: item.Title
                        });
                        modelFields.push(new Ext.data.Field(item.ID, "checkboxfield"));
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

                    if (tmpBol) {
                        validations.push({type: 'presence', field: item.ID, message: item.Title + ': must be present'});
                    }
                    modelFields.push(new Ext.data.Field(item.ID, xType));
                    break;
                case "time":  //textareafield
                    xType = "datetimepickerfield";

                    baseFieldSet.add({
                        xtype: xType,
                        name: item.ID,
                        required: tmpBol,
                        label: item.Title,
                        value: new Date(),
                        dateTimeFormat: 'h:i:A',
                        picker: {
                            yearFrom: 1980,
                            minuteInterval: 1,
                            ampm: true,
                            slotOrder: ['hour', 'minute', 'ampm']
                        }
                    });

                    modelFields.push(new Ext.data.Field(item.ID, xType));
                    break;
            }


        });


        reportModel.updateFields(modelFields);
        reportModel.setValidations(validations);

        Ext.define("ReportModel", reportModel);

        this.setRecord(reportModel);

        if (!isbaseFieldSet) {
            this.add(baseFieldSet);
        }
    }
});