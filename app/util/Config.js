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
    	this.apiKey = newApiKey;
    },
    getApiKey:function()
    {
    	return this.apiKey;
    },
    generateHTMReport:function(params)
    {
        var key;

        console.log("Now in generateHTMReport");
        
        for (key in params) 
        {
            if (params.hasOwnProperty(key)) 
            {
                console.log("The key is [" + key + "] value is [" + params[key] + "]");   
            }
        }
        
    }
});