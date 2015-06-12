Ext.define('EnvPoolsForms.view.PlanViewerPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.planviewerpanel',
    xtype: 'planviewerpanel',

    requires: [
        'Ext.TitleBar',
        'Ext.Toolbar'
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'titlebar',
                cls: 'title',
                docked: 'top',
                title: 'Environmental Pools',
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        iconCls: "back",
                        text: "Back",
                        itemId: "backButton"
                    },
                    {
                        ui: 'button',
                        action: 'logoutCommand',
                        itemId: "logoutButton",
                        align: 'right',
                        text: 'Logout'
                    },
                    {
                        ui: 'button',
                        iconCls: 'info',
                        action: 'aboutCommand',
                        itemId: "aboutButton",
                        align: 'right'
                    }]
            },
            {
                xtype: 'pdfpanel',
                itemId: "fileItem",
                fullscreen: true,
                layout: 'fit',
                src: '',
                style: {
                    backgroundColor: '#333'
                }
            }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
            },
            {
                delegate: "#aboutButton",
                event: "tap",
                fn: "onAboutButtonTap"
            },
            {
                delegate: "#logoutButton",
                event: "tap",
                fn: "onLogoutTapped"
            }
        ]
    },
    onBackButtonTap: function ()
    {
        console.log("onBackButtonTap");
        this.fireEvent("backPlansButtonTapCommand", this);
    },
    onAboutButtonTap: function ()
    {
        console.log("onAboutButtonTap");
        this.fireEvent("aboutButtonTapCommand", this);
    },
    onLogoutTapped: function (evt, options)
    {
        console.log("Logout button tapped");
        this.fireEvent('logoutTappedCommand', this);
    },
    setFileSrc: function (fileSrc)
    {
        var panel = this.down('#fileItem');
        panel.setSrc(fileSrc);
        this.add(
            {
                xtype: 'pdfpanel',
                fullscreen: true,
                layout: 'fit',
                src: fileSrc,
                style: {
                    backgroundColor: '#333'
                }
            });
    }

});