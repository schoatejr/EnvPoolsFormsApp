Ext.define("EnvPoolsForms.view.VideosList", {
    extend: "Ext.Container",
    requires:["Ext.dataview.List","Ext.plugin.PullRefresh"],
    xtype: 'videoslist',
    alias: 'widget.videoslist',


    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "list",
            store: "Videos",
            itemId:"videosList",
            plugins: [
                {
                    xclass: 'plugin.pullrefreshfn',
                    itemId: "videoslistpulldown",
                    pullText: 'Pull down for more Videos...',
                    refreshFn: function()
                    {
                        this.parent.parent.onRefreshData();
                    }
                }

            ],
            loadingText: "Loading Videos...",
            emptyText: "<div class=\"videos-list-empty-text\">No Videos found.</div>",
            onItemDisclosure: true,
            itemTpl: "<div class=\"list-item-Name\">{name}</div>"
        }],
        listeners: [
            {
                delegate: "#videosList",
                event: "itemtap",
                fn: "onItemTap"
            }
        ]
    },
    onItemTap: function (list, index, item, record)
    {
        console.log("Go to Video : " + record.get('name'));
        this.fireEvent('viewVideoCommand', record.get('name'));
    },
    onRefreshData: function ()
    {
        this.fireEvent('reloadFilesCommand');
    }

});