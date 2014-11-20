Ext.define("EnvPoolsForms.view.FormsList", {
    extend: "Ext.Container",
    requires:["Ext.dataview.List","Ext.plugin.PullRefresh"],
    xtype: 'formslist',
    alias: 'widget.formslist',


    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "list",
            store: "Reports",
            itemId:"formsList",
            plugins: [
                {
                    xclass: 'plugin.pullrefreshfn',
                    pullText: 'Pull down for more Reports...',
                    refreshFn: function()
                    {
                        var reportsStore = Ext.getStore('Reports');
                        if(!reportsStore) reportsStore = Ext.create('EnvPoolsForms.store.Reports');
                        reportsStore.load();
                    }
                }

            ],
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