Ext.define('Override.util.PaintMonitor', {
    override : 'Ext.util.PaintMonitor',

    constructor : function(config) {
        return new Ext.util.paintmonitor.CssAnimation(config);
    }
});

Ext.define('Override.util.SizeMonitor', {
    override : 'Ext.util.SizeMonitor',

    constructor : function(config) {
        var namespace = Ext.util.sizemonitor;

        if (Ext.browser.is.Firefox) {
            return new namespace.OverflowChange(config);
        } else if (Ext.browser.is.WebKit || Ext.browser.is.IE11) {
            return new namespace.Scroll(config);
        } else {
            return new namespace.Default(config);
        }
    }
});

Ext.application({
    name: 'EnvPoolsForms',

    requires: [
        'Ext.MessageBox',
        'EnvPoolsForms.util.Config'
    ],

    views: 
    [
        'MainView',
        'HomePanel',
        'LoginForm',
        'TabPanel',
        'FormsTabPanel',
        'AboutTabPanel',
        'FormsList',
        'FormEditor',
        'FormReport',
        'DateTimePicker',
        'PhotosTabPanel',
        'PhotosList',
        'PhotoViewerPanel',
        'PlansTabPanel',
        'PlansList',
        'PlanViewerPanel',
        'VideosTabPanel',
        'VideosList',
        'VideoViewerPanel',
        'PDF'
    ],
    controllers: 
    [
        'FormCtrl'
    ],
    stores: 
    [
        'Reports',
        'Fields',
        'Folders',
        'Users',
        'Photos',
        'Videos',
        'Plans'
    ],

    models: 
    [
        'Form',
        'Field',
        'SubField',
        'Report',
        'PullRefreshFn',
        'File',
        'Folder',
        'User'
    ],
    
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,



    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
    launch3: function() {

        Ext.Viewport.add({
            xtype     : 'pdfpanel',
            fullscreen: true,
            layout    : 'fit',
            src       : 'http://www.choateinc.com/Plans/PrinceCatalogue.pdf', // URL to the PDF - Same Domain or Server with CORS Support
            style     : {
                backgroundColor: '#333'
            }
        });
    },

    launch2: function() {

        Ext.Viewport.add({
            xtype     : 'panel',
            fullscreen: true,
            layout    : 'fit',
            html       : '<embed type="application/pdf" width="100%" height="800px" src="http://docs.google.com/viewer?url=http%3A%2F%2Fresearch.google.com%2Farchive%2Fbigtable-osdi06.pdf" />', // URL to the PDF - Same Domain or Server with CORS Support
            style     : {
                backgroundColor: '#333'
            }
        });
    },


    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        var formListView = {
            xtype: "formslist"
        };

        var formEditorView = {
                xtype: "formeditorview"
            };

        var reportPanel = {
                xtype: "reportpanel"
            };

        var homePanel = {
                xtype: "homepanel"
            };

        var loginForm = {
                xtype: "loginform"
            };

        var mainView = {
                xtype: "mainview"
            };

        // Initialize the main view
        Ext.Viewport.add([loginForm, homePanel, formEditorView, reportPanel]);
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
