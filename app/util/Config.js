Ext.define('EnvPoolsForms.util.Config', { 
    singleton : true,
    alias : 'widget.appConfigUtil',
   	apiKey : '',
   	userEmail: '',
   	userName: '',
   	   	
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
    setUserEmail:function (newUserEmail)
    {
    	this.userEmail = newUserEmail;
    },
    getUserEmail:function()
    {
    	return this.userEmail;
    },
    setUserName:function (newUserName)
    {
    	this.userName = newUserName;
    },
    getUserName:function()
    {
    	return this.userName;
    },
    resetValues:function()
    {
    	this.setUserName("");
    	this.setUserEmail("");
    	this.setApiKey("");
    },
    generateHTMLDataRow:function()
    {
    },
    generateHTMReport:function(params, formName)
    {
        var key;
        console.log("Now in generateHTMReport");
        
        var fieldsStore = Ext.getStore('Fields');
        if(!fieldsStore) fieldsStore = Ext.create('EnvPoolsForms.store.Fields');
        
var date = new Date();

var htmltmplStr="";
htmltmplStr += "<!DOCTYPE html>";
htmltmplStr += "\n<html>";
htmltmplStr += "\n  <head>";
htmltmplStr += "\n  <head>";

htmltmplStr += "\n  <style>"; 
htmltmplStr += "\n  .tableClass";
htmltmplStr += "\n  {";
htmltmplStr += "\n  border:2px solid #a1a1a1;";
htmltmplStr += "\n  padding:10px 10px; ";
htmltmplStr += "\n  background:#dddddd;";
htmltmplStr += "\n  width:100%;";
htmltmplStr += "\n  border-radius:25px;";
htmltmplStr += "\n  }";
htmltmplStr += "\n  </style>";

htmltmplStr += "\n    <meta content=\"text\/html; charset=windows-1252\" http-equiv=\"content-type\">";
htmltmplStr += "\n    <title><\/title>";
htmltmplStr += "\n  <\/head>";
htmltmplStr += "\n  <body>";
htmltmplStr += "\n    <table  style=\"margin: 0px; padding: 0px; display: table; border-collapse: separate; word-break: break-word; color: rgb(0, 0, 0); font-family: 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; width: 100%; background-color: rgb(255, 255, 255);\"";
htmltmplStr += "";
htmltmplStr += "      cellspacing=\"0\">";
htmltmplStr += "\n      <tbody  style=\"width: 100%\">";
htmltmplStr += " \n       <tr style=\"display: table-row; vertical-align: inherit; background-color: #101B37\">";
htmltmplStr += "\n          <td colspan=\"2\" align=\"center\" style=\" display: table-cell; border-spacing: 2px; width: 100%; font-weight: normal; line-height: 42px; font-size: 22px; clear: left; color: rgb(0, 0, 0); padding: 0px 10px 7px 0px;\">";
htmltmplStr += "\n			<a id=\"logo\" href=\"http:\/\/www.environmentalpools.com\" >";
htmltmplStr += "\n			  <img id=\"default-logo\" alt=\"Environmental Pools\" src=\"http:\/\/192.185.99.175\/~environm\/ma\/wp-content\/uploads\/logo_env_pools1.png\" \/>";
htmltmplStr += "\n			<\/a>";
htmltmplStr += "\n		  <\/td>";
htmltmplStr += "\n        <\/tr>";
htmltmplStr += "\n					";
htmltmplStr += "\n        <tr style=\"display: table-row; vertical-align: inherit;\">";
htmltmplStr += "\n          <td style=\"display: table-cell; border-spacing: 2px; width: 50%; font-weight: normal; line-height: 42px; font-size: 22px; clear: left; color: rgb(0, 0, 0); padding: 0px 10px 7px 0px;\">\n";
htmltmplStr += formName;
htmltmplStr += "\n		  <\/td>";
htmltmplStr += "\n          <td style=\"display: table-cell; border-spacing: 2px;  width: 50%; padding: 0px 0px 7px;\">";
htmltmplStr += "\n          <\/td>";
htmltmplStr += "\n        <\/tr>";
htmltmplStr += "\n      <\/tbody>";
htmltmplStr += "\n    <\/table>";
htmltmplStr += "\n    <table style=\"margin: 0px; padding: 0px; display: table; border-collapse: separate; word-break: break-word; color: rgb(0, 0, 0); font-family: 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, sans-serif; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; width: 100%; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); font-size: 12px; line-height: 16.200000762939453px; background-color: rgb(255, 255, 255);\"";
htmltmplStr += "\n      cellpadding=\"0\" cellspacing=\"0\">";
htmltmplStr += "\n      <tbody style=\"width: 100%;\">";

var counter = 0;
for (key in params) 
{
    if (params.hasOwnProperty(key)) 
    {
        var aRecord = fieldsStore.findRecord('ID', key);
        var subFields;
        var curVal = params[key];
        
        if (!aRecord || (aRecord.get('Title') == "Entry Id") || (aRecord.get('Title') == "Last Updated") || (aRecord.get('Title') == "Updated By") )
        {
        	continue;
        }

        if(curVal == null)
        {
            if(aRecord.get('Type') == "checkbox")
            {
              curVal = "false";
            }
            else if(aRecord.get('Type') == "number")
            {
              curVal = "0";
            }
            else
            {
              curVal = "";
            }
        }

        if((aRecord.get('Type') == "time") || (aRecord.get('Type') == "date"))
        {
        	var tmpDate = new Date(curVal);
        	var format = 'l, F d, Y g:i:s A';
        	curVal = Ext.Date.format(tmpDate,format);
        }
        
        	
        if ((aRecord) && (aRecord._data) && (aRecord._data.SubFields) && (aRecord.get('ClassNames') === 'Table') || (aRecord.get('ClassNames') === 'NameTable'))
        {
        	htmltmplStr += "\n        <tr>";
        	htmltmplStr += "\n        <td colspan='2'>";
        	htmltmplStr += "\n        <div class='tableClass'>";
        	htmltmplStr += "\n        <fieldset>";
        	htmltmplStr += "\n        <legend style='color:black;font-weight:bold;'>\n";
        	htmltmplStr += aRecord.get('Title');
        	htmltmplStr += "\n        </legend>";
        	htmltmplStr += "\n    <table style=\"margin: 0px; padding: 0px; display: table; border-collapse: separate; word-break: break-word; color: rgb(0, 0, 0); font-family: 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, sans-serif; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; width: 100%; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); font-size: 12px; line-height: 16.200000762939453px; background-color: rgb(255, 255, 255);\"";
        	htmltmplStr += "\n      cellpadding=\"0\" cellspacing=\"0\">";
        	htmltmplStr += "\n      <tbody style=\"width: 100%;\">";
        	
            subFields = aRecord._data.SubFields;
            for (var i = 0; i < subFields.length; i++) 
            {
            	var field = subFields[i];
                if (field.ID)
                {
                	htmltmplStr += "\n        <tr style=\"display: table-row; vertical-align: inherit; background-color: rgb(255, 255, 255);\">";
            	   console.log('The field is : ' + field.Label + ' the value is : ' + params[field.ID]);
               	htmltmplStr += "\n          <th style=\"font-weight: 700; display: table-cell; vertical-align: top; padding: 7px 9px; width: 50%; color:  rgb(34, 34, 34); text-align: left; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(238, 238, 238);\">";
            	htmltmplStr += field.Label;
            	htmltmplStr += "\n		  <\/th>";
            	htmltmplStr += "\n          <td style=\"display: table-cell; border-spacing: 2px; vertical-align: top; width: 50%; color: rgb(51, 51, 51);  padding: 7px 9px 7px 0px; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(238, 238, 238);\">";
            	htmltmplStr += params[field.ID]; 
            	htmltmplStr += "\n		  <\/td>";
            	htmltmplStr += "\n		  <\/tr>";

                }
            }

        	htmltmplStr += "\n        </tbody>";
        	htmltmplStr += "\n        </table>";
        	htmltmplStr += "\n        </fieldset>";
        	htmltmplStr += "\n        </div>";
        	htmltmplStr += "\n        </td>";
        	htmltmplStr += "\n        </tr";
        	continue;
        }

var color = "rgb(255, 255, 255);";

if(counter++%2 == 0)color="rgb(245, 245, 245);";

htmltmplStr += "\n        <tr style=\"display: table-row; vertical-align: inherit; background-color:" + color + ";\">";
htmltmplStr += "\n          <th style=\"font-weight: 700; display: table-cell; vertical-align: top; padding: 7px 9px; color: width: 50%; rgb(34, 34, 34); text-align: left; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(238, 238, 238);\">\n";
htmltmplStr += aRecord.get('Title');
htmltmplStr += "\n		  <\/th>";
htmltmplStr += "\n          <td style=\"display: table-cell; border-spacing: 2px; vertical-align: top; color: rgb(51, 51, 51); width: 50%; padding: 7px 9px 7px 0px; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(238, 238, 238);\">";
htmltmplStr += "\n		   <span>\n";
htmltmplStr += curVal;
htmltmplStr += "\n		   <\/span>";
htmltmplStr += "\n		  <\/td>";
htmltmplStr += "\n        <\/tr>";
                console.log('The field is : ' + aRecord);
                console.log("The key is [" + key + "] value is [" + curVal + "] the type is [" +aRecord.get('Type') + "]");
            }
        }

htmltmplStr += "\n      <\/tbody>";
htmltmplStr += "\n    <\/table>";
htmltmplStr += "\n    <table style=\"margin: 0px; padding: 0px; display: table; border-collapse: separate; word-break: break-word; color: rgb(0, 0, 0); font-family: 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; width: 100%; border-top-width: 25px; border-top-style: solid; border-top-color: rgb(255, 255, 255); border-bottom-width: 25px; border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); background-color: rgb(255, 255, 255);\" cellspacing=\"0\">";
htmltmplStr += "\n      <tbody style=\"width: 100%;\">";
htmltmplStr += "\n        <tr style=\"display: table-row; vertical-align: inherit;\">";
htmltmplStr += "\n          <td style=\"display: table-cell; border-spacing: 2px; width: 50%; padding-right: 12px;\">";
htmltmplStr += "\n            <div style=\"border: 1px solid rgb(238, 238, 238); text-align: center; background: rgb(245, 245, 245);\">";
htmltmplStr += "\n			  <span style=\"display: block; font-size: 9px; padding: 10px 0px 0px;\">";
htmltmplStr += "\n			  Created";
htmltmplStr += "\n			  <\/span>";
htmltmplStr += "\n              <div style=\"font-size: 13px; font-style: normal; font-weight: bold; padding: 0px 0px 2px; color: rgb(34, 34, 34);\">\n";
htmltmplStr += Ext.Date.format(date,'d F Y'); 
htmltmplStr += "\n			  </div>";
htmltmplStr += "\n              <B><i style=\"display: block; font-style: normal; font-size: 9px; padding: 0px 0px 10px; color: rgb(34, 34, 34);\">\n";
htmltmplStr += Ext.Date.format(date, 'g:i:s A'); 
htmltmplStr += "\n			  </i></B>";
htmltmplStr += "\n			  <span style=\"display: block; font-size: 9px; padding: 10px 0px 0px;\">";
htmltmplStr += "\n			  Created By";
htmltmplStr += "\n			  <\/span>";
htmltmplStr += "\n              <div style=\"font-size: 13px; font-style: normal; font-weight: bold; padding: 0px 0px 2px; color: rgb(34, 34, 34);\">\n";
htmltmplStr += EnvPoolsForms.util.Config.getUserName();
htmltmplStr += "\n			  </div>";
htmltmplStr += "\n			  <cite style=\"font-style: normal; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(238, 238, 238); display: block; min-height: 17px; line-height: 17px; font-size: 9px; font-weight: bold; text-transform: uppercase; background: rgb(222, 222, 222);\">";
htmltmplStr += "\n			  PUBLIC";
htmltmplStr += "\n			  <\/cite>";
htmltmplStr += "\n			<\/div>";
htmltmplStr += "\n          <\/td>";
htmltmplStr += "\n          <td style=\"display: table-cell; border-spacing: 2px; width: 50%; border: 1px solid rgb(238, 238, 238); padding: 10px 0px 0px; text-align: center; background: rgb(245, 245, 245);\">";
htmltmplStr += "\n            <div style=\"font-size: 13px; font-style: normal; font-weight: bold; padding: 0px 0px 2px; color: rgb(34, 34, 34);\">";
htmltmplStr += "\n			Mobile";
htmltmplStr += "\n			<\/div>";
htmltmplStr += "\n            <i style=\"display: block; font-style: normal; font-size: 9px; padding: 0px 0px 10px; color: rgb(34, 34, 34);\">";
htmltmplStr += "\n			IP Address";
htmltmplStr += "\n			<\/i>";
htmltmplStr += "\n		  <\/td>";
htmltmplStr += "\n        <\/tr>";
htmltmplStr += "\n      <\/tbody>";
htmltmplStr += "\n    <\/table>";
htmltmplStr += "\n  <\/body>";
htmltmplStr += "\n<\/html>";
htmltmplStr += "";

	return htmltmplStr;
    }
});