Ext.define("EnvPoolsForms.view.PlansList", {
    extend: "Ext.Container",
    requires:["Ext.dataview.List","Ext.plugin.PullRefresh"],
    xtype: 'planslist',
    alias: 'widget.planslist',


    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "list",
            store: "Plans",
            itemId:"plansList",
            plugins: [
                {
                    xclass: 'plugin.pullrefreshfn',
                    itemId: "planslistpulldown",
                    pullText: 'Pull down for more Plans...',
                    refreshFn: function()
                    {
                        this.parent.parent.onRefreshData();
                    }
                }

            ],
            loadingText: "Loading Plans...",
            emptyText: "<div class=\"plans-list-empty-text\">No Plans found.</div>",
            onItemDisclosure: true,
            itemTpl: "<div class=\"list-item-Name\">{name}</div>"
        }],
        listeners: [
            {
                delegate: "#plansList",
                event: "itemtap",
                fn: "onItemTap"
            }
        ]
    },
    onItemTap: function (list, index, item, record)
    {
        console.log("Go to Plan : " + record.get('name'));
        this.fireEvent('viewPlanCommand', record.get('name'));
    },
    onRefreshData: function ()
    {
        this.fireEvent('reloadFilesCommand');
    }

});