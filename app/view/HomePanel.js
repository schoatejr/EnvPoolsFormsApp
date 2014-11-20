Ext.define('EnvPoolsForms.view.HomePanel', {
    extend: 'Ext.Panel',
    alias: 'widget.homepanel',
    xtype: 'homepanel',

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
                xtype: 'maintabpanel',
                itemId:"maintabpanel",
                layout: 
                {
                 animation: 'slide',
                 type: 'card'
                }         	
            }
        ],
        listeners: [
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
    onAboutButtonTap: function () {
        console.log("onAboutButtonTap");
        this.fireEvent("aboutButtonTapCommand", this);
    },    
    onLogoutTapped: function (evt, options) {
        console.log("Logout button tapped");
        this.fireEvent('logoutTappedCommand', this);
    }

});