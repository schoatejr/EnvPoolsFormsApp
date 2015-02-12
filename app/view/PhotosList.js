Ext.define("EnvPoolsForms.view.PhotosList", {
    extend: "Ext.Container",
    requires:["Ext.dataview.List","Ext.plugin.PullRefresh"],
    xtype: 'photoslist',
    alias: 'widget.photoslist',


    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "list",
            store: "Photos",
            itemId:"photosList",
            plugins: [
                {
                    xclass: 'plugin.pullrefreshfn',
                    itemId: "photoslistpulldown",
                    pullText: 'Pull down for more Reports...',
                    refreshFn: function()
                    {
                        this.parent.parent.onRefreshData();
                    }
                }

            ],
            loadingText: "Loading Photos...",
            emptyText: "<div class=\"photos-list-empty-text\">No photos found.</div>",
            onItemDisclosure: true,
            itemTpl: "<div class=\"list-item-Name\">{name}</div>"
        }],
        listeners: [{
            delegate: "#photosList",
            event: "disclose",
            fn: "onPhotosListDisclose"
        }]
    },
    onPhotosListDisclose: function (list, record, target, index, evt, options) {
        console.log("Go to Photo : " + record.get('name'));
        this.fireEvent('viewPhotoCommand', record.get('name'));
    },
    onRefreshData: function ()
    {
        this.fireEvent('reloadFilesCommand');
    }

});