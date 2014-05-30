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
                items: [
                    {
                        xtype: 'textfield',
                        name: 'Name',
                        label: 'Title',
                        required: true
                    },
                    {
                        xtype: 'textareafield',
                        name: 'Description',
                        label: 'Narrative'
                    }
                ]
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
    }
});

