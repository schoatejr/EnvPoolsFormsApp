Ext.define('EnvPoolsForms.view.PhotoViewerPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.photoviewerpanel',
    xtype: 'photoviewerpanel',

    requires: [
               'Ext.TitleBar',
               'Ext.Toolbar',
               'Ext.Img'
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
                xtype: 'img',
                itemId:"imageItem",
                src: 'http://www.choateinc.com/Photos/image1.jpg'
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
        console.log("onBackButtonTap");
        this.fireEvent("backPhotosButtonTapCommand", this);
    },
    onAboutButtonTap: function () {
        console.log("onAboutButtonTap");
        this.fireEvent("aboutButtonTapCommand", this);
    },    
    onLogoutTapped: function (evt, options) {
        console.log("Logout button tapped");
        this.fireEvent('logoutTappedCommand', this);
    },
    setFileSrc: function (imgSrc)
    {
        var image = this.down('#imageItem');
        image.setSrc(imgSrc);
    }

});