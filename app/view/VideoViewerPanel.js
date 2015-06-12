Ext.define('EnvPoolsForms.view.VideoViewerPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.videoviewerpanel',
    xtype: 'videoviewerpanel',

    requires: [
               'Ext.TitleBar',
               'Ext.Toolbar',
               'Ext.Video'
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
                xtype: 'video',
                itemId:"fileItem",
                loop: true
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
    onBackButtonTap: function () {
        console.log("backVideosButtonTapCommand");
        this.fireEvent("backVideosButtonTapCommand", this);
    },
    onAboutButtonTap: function () {
        console.log("onAboutButtonTap");
        this.fireEvent("aboutButtonTapCommand", this);
    },    
    onLogoutTapped: function (evt, options) {
        console.log("Logout button tapped");
        this.fireEvent('logoutButtonTappedCommand', this);
    },
    setFileSrc: function (fileSrc)
    {
        var file = this.down('#fileItem');
        file.setUrl(fileSrc);
        file.play();
    }

});