Ext.define("EnvPoolsForms.view.FormsList", {
    extend: "Ext.Container",
    requires:"Ext.dataview.List",
    xtype: 'formslist',
    alias: 'widget.formslist',


    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "list",
            store: "Forms",
            itemId:"formsList",
            loadingText: "Loading Forms...",
            emptyText: "<div class=\"forms-list-empty-text\">No forms found.</div>",
            onItemDisclosure: true,
            grouped: true,
            itemTpl: "<div class=\"list-item-Name\">{Name}</div>"
        }],
        listeners: [{
            delegate: "#formsList",
            event: "disclose",
            fn: "onFormsListDisclose"
        }]
    },    
    onFormsListDisclose: function (list, record, target, index, evt, options) {
        console.log("Go to Report : " + record.get('Name'));
        this.fireEvent('editFormCommand', this, record);
    }
});