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
                    }
                ]
            },
            { xtype: "fieldset",
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
            }
        ]
    },
    onSubmitButtonTap: function () {
        console.log("submitFormCommand");
        this.fireEvent("submitFormCommand", this);
    }
});

