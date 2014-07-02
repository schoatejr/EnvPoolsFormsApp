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
        
        var fieldsStore = Ext.getStore('Fields');
        if(!fieldsStore) fieldsStore = Ext.create('EnvPoolsForms.store.Fields');

        for (key in params) 
        {
            if (params.hasOwnProperty(key)) 
            {
                var aRecord = fieldsStore.findRecord('ID', key);
                var subFields;
                
                if (aRecord.SubFields != null)
                {
                    subFields = aRecord.SubFields;
                    console.log('The field is : ' + aRecord);
                }

                console.log('The field is : ' + aRecord);
                console.log("The key is [" + key + "] value is [" + params[key] + "] the type is [" +aRecord.get('Type') + "]");
            }
        }
        
    }
});