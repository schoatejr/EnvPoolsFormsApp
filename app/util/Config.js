Ext.define('EnvPoolsForms.util.Config', { 
    singleton : true,
    alias : 'widget.appConfigUtil',
   	apiKey : 'xyzKey',
    constructor: function(config) 
    {
        this.initConfig(config);
        this.callParent([config]);
    },
    setApiKey:function (newApiKey)
    {
    	this.apiKey = newApiKey
    },
    getApiKey:function()
    {
    	return this.apiKey;
    }
})  