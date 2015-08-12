Ext.define("EnvPoolsForms.view.FormsList", {
    extend: "Ext.Container",
    requires: ["Ext.dataview.List", "Ext.plugin.PullRefresh"],
    xtype: 'formslist',
    alias: 'widget.formslist',


    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "list",
            store: "Reports",
            itemId: "formsList",
            plugins: [
                {
                    xclass: 'plugin.pullrefreshfn',
                    pullText: 'Pull down for more Reports...',
                    refreshFn: function ()
                    {
                        var reportsStore = Ext.getStore('Reports');
                        if (!reportsStore)
                        {
                            reportsStore = Ext.create('EnvPoolsForms.store.Reports');
                        }
                        reportsStore.load();
                    }
                }

            ],
            loadingText: "Loading Forms...",
            emptyText: "<div class=\"forms-list-empty-text\">No forms found.</div>",
            onItemDisclosure: true,
            itemTpl: "<div class=\"listx-item-Name\">{Name}</div>"
        }],
        listeners: [
            {
                delegate: "#formsList",
                event: "itemtap",
                fn: "onItemTap"
            }
        ]
    },
    onItemTap: function (list, index, item, record)
    {
        console.log("Go to Report : " + record.data.Name);
        this.fireEvent('editFormCommand', this, record);
    }
});