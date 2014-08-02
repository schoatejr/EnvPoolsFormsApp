Ext.define('EnvPoolsForms.view.HomeTabPanel', {
    extend: 'Ext.Panel',
    xtype: 'hometabpanel',

    requires: [
        'Ext.tab.Panel',
        'Ext.Img',
    ],

    config: 
    {
    	layout:'hbox',
    	align:'center',
    	defaults: {
    	    flex : 1
    	},
    	items:[
	               {
	                  xtype:'panel',
	                  width: '20%',
	                  html:'<div align="center" style="position:relative;display:block;height:100px;width:100px;margin:10px;"><div align="center" style="position:absolute;top:50%;height:50%;width:100px;margin-top:-25%;text-align:center;" ><img src="http://192.185.99.175/~environm/ma/wp-content/uploads/logo_env_pools1.png"></div></div>',
	                  style: 'background-color: #101B37;',
	                  flex:1
	                },
	                {
	                  xtype:'panel',
	                  width: '80%',
	                  html:'Hello World',
	                  style:'background-color:white',
	                  flex:2
	                }  
    	 ]
    }


});