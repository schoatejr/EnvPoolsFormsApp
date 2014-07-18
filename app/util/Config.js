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
    generateHTMLDataRow:function()
    {
    },
    generateHTMReport:function(params)
    {
        var key;
        console.log("Now in generateHTMReport");
        
        var fieldsStore = Ext.getStore('Fields');
        if(!fieldsStore) fieldsStore = Ext.create('EnvPoolsForms.store.Fields');
        
var date = new Date();

var htmltmplStr="";
htmltmplStr += "<!DOCTYPE html>";
htmltmplStr += "<html>";
htmltmplStr += "  <head>";
htmltmplStr += "    <meta content=\"text\/html; charset=windows-1252\" http-equiv=\"content-type\">";
htmltmplStr += "    <title><\/title>";
htmltmplStr += "  <\/head>";
htmltmplStr += "  <body>";
htmltmplStr += "    <table  style=\"margin: 0px; padding: 0px; display: table; border-collapse: separate; word-break: break-word; color: rgb(0, 0, 0); font-family: 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; width: 100%; background-color: rgb(255, 255, 255);\"";
htmltmplStr += "";
htmltmplStr += "      cellspacing=\"0\">";
htmltmplStr += "      <tbody  style=\"width: 100%\">";
htmltmplStr += "        <tr style=\"display: table-row; vertical-align: inherit; background-color: #101B37\">";
htmltmplStr += "          <td colspan=\"2\" align=\"center\" style=\" display: table-cell; border-spacing: 2px; width: 100%; font-weight: normal; line-height: 42px; font-size: 22px; clear: left; color: rgb(0, 0, 0); padding: 0px 10px 7px 0px;\">";
htmltmplStr += "			<a id=\"logo\" href=\"http:\/\/www.environmentalpools.com\" >";
htmltmplStr += "			  <img id=\"default-logo\" alt=\"Environmental Pools\" src=\"http:\/\/192.185.99.175\/~environm\/ma\/wp-content\/uploads\/logo_env_pools1.png\" \/>";
htmltmplStr += "			<\/a>";
htmltmplStr += "		  <\/td>";
htmltmplStr += "        <\/tr>";
htmltmplStr += "					";
htmltmplStr += "        <tr style=\"display: table-row; vertical-align: inherit;\">";
htmltmplStr += "          <td style=\"display: table-cell; border-spacing: 2px; width: 50%; font-weight: normal; line-height: 42px; font-size: 22px; clear: left; color: rgb(0, 0, 0); padding: 0px 10px 7px 0px;\">";
htmltmplStr += "		  Plumbing Progress Report";
htmltmplStr += "		  <\/td>";
htmltmplStr += "          <td style=\"display: table-cell; border-spacing: 2px;  width: 50%; padding: 0px 0px 7px;\">";
htmltmplStr += "            <div style=\"display: block; float: right; font-style: normal; line-height: 42px; font-size: 22px; padding: 0px 0px 0px 10px; color: rgb(153, 153, 153);\">";
htmltmplStr += "			#";
htmltmplStr += "			<b style=\"color: rgb(51, 51, 51);\">";
htmltmplStr += "			2";
htmltmplStr += "			<\/b>";
htmltmplStr += "			<\/div>";
htmltmplStr += "          <\/td>";
htmltmplStr += "        <\/tr>";
htmltmplStr += "      <\/tbody>";
htmltmplStr += "    <\/table>";
htmltmplStr += "    <table style=\"margin: 0px; padding: 0px; display: table; border-collapse: separate; word-break: break-word; color: rgb(0, 0, 0); font-family: 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, sans-serif; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; width: 100%; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(238, 238, 238); font-size: 12px; line-height: 16.200000762939453px; background-color: rgb(255, 255, 255);\"";
htmltmplStr += "      cellpadding=\"0\" cellspacing=\"0\">";
htmltmplStr += "      <tbody style=\"width: 100%;\">";

var counter = 0;
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

var color = "rgb(255, 255, 255);";

if(counter++%2 == 0)color="rgb(245, 245, 245);";

htmltmplStr += "        <tr style=\"display: table-row; vertical-align: inherit; background-color:" + color + ";\">";
htmltmplStr += "          <th style=\"font-weight: 700; display: table-cell; vertical-align: top; padding: 7px 9px; color: width: 50%; rgb(34, 34, 34); text-align: left; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(238, 238, 238);\">";
htmltmplStr += aRecord.get('Title');
htmltmplStr += "		  <\/th>";
htmltmplStr += "          <td style=\"display: table-cell; border-spacing: 2px; vertical-align: top; color: rgb(51, 51, 51); width: 50%; padding: 7px 9px 7px 0px; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(238, 238, 238);\">";
htmltmplStr += "		   <span>";
htmltmplStr += params[key];
htmltmplStr += "		   <\/span>";
htmltmplStr += "		  <\/td>";
htmltmplStr += "        <\/tr>";
                console.log('The field is : ' + aRecord);
                console.log("The key is [" + key + "] value is [" + params[key] + "] the type is [" +aRecord.get('Type') + "]");
            }
        }

htmltmplStr += "        <tr style=\"display: table-row; vertical-align: inherit; background-color: rgb(255, 255, 255);\">";
htmltmplStr += "          <th style=\"font-weight: 700; display: table-cell; vertical-align: top; padding: 7px 9px; width: 50%; color:  rgb(34, 34, 34); text-align: left; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(238, 238, 238);\">";
htmltmplStr += "		  Date";
htmltmplStr += "		  <\/th>";
htmltmplStr += "          <td style=\"display: table-cell; border-spacing: 2px; vertical-align: top; width: 50%; color: rgb(51, 51, 51);  padding: 7px 9px 7px 0px; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(238, 238, 238);\">";
htmltmplStr += Ext.Date.format(date,'l,  F d,  Y'); 
htmltmplStr += "		  <\/td>";
htmltmplStr += "        <\/tr>";
htmltmplStr += "        <tr style=\"display: table-row; vertical-align: inherit; background-color: rgb(245, 245, 245);\">";
htmltmplStr += "          <th style=\"font-weight: 700; display: table-cell; vertical-align: top; padding: 7px 9px;  width: 50%;color: rgb(34, 34, 34); text-align: left; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(238, 238, 238);\">";
htmltmplStr += "		  Crew Members";
htmltmplStr += "		  <\/th>";
htmltmplStr += "          <td style=\"display: table-cell; border-spacing: 2px; vertical-align: top; width: 50%; color: rgb(51, 51, 51); padding: 7px 9px 7px 0px; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(238, 238, 238);\">";
htmltmplStr += "            <div>mem1<\/div>";
htmltmplStr += "          <\/td>";
htmltmplStr += "        <\/tr>";
htmltmplStr += "      <\/tbody>";
htmltmplStr += "    <\/table>";
htmltmplStr += "    <table style=\"margin: 0px; padding: 0px; display: table; border-collapse: separate; word-break: break-word; color: rgb(0, 0, 0); font-family: 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; width: 100%; border-top-width: 25px; border-top-style: solid; border-top-color: rgb(255, 255, 255); border-bottom-width: 25px; border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); background-color: rgb(255, 255, 255);\" cellspacing=\"0\">";
htmltmplStr += "      <tbody style=\"width: 100%;\">";
htmltmplStr += "        <tr style=\"display: table-row; vertical-align: inherit;\">";
htmltmplStr += "          <td style=\"display: table-cell; border-spacing: 2px; width: 50%; padding-right: 12px;\">";
htmltmplStr += "            <div style=\"border: 1px solid rgb(238, 238, 238); text-align: center; background: rgb(245, 245, 245);\">";
htmltmplStr += "			  <span style=\"display: block; font-size: 9px; padding: 10px 0px 0px;\">";
htmltmplStr += "			  Created";
htmltmplStr += "			  <\/span>";
htmltmplStr += "              <div style=\"font-size: 13px; font-style: normal; font-weight: bold; padding: 0px 0px 2px; color: rgb(34, 34, 34);\">";
htmltmplStr += Ext.Date.format(date,'d F Y'); 
htmltmplStr += "			  <\/div>";
htmltmplStr += "              <i style=\"display: block; font-style: normal; font-size: 9px; padding: 0px 0px 10px; color: rgb(34, 34, 34);\">";
htmltmplStr += Ext.Date.format(date, 'g:i:s A'); 
htmltmplStr += "			  <\/i>";
htmltmplStr += "			  <cite style=\"font-style: normal; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(238, 238, 238); display: block; min-height: 17px; line-height: 17px; font-size: 9px; font-weight: bold; text-transform: uppercase; background: rgb(222, 222, 222);\">";
htmltmplStr += "			  PUBLIC";
htmltmplStr += "			  <\/cite>";
htmltmplStr += "			<\/div>";
htmltmplStr += "          <\/td>";
htmltmplStr += "          <td style=\"display: table-cell; border-spacing: 2px; width: 50%; border: 1px solid rgb(238, 238, 238); padding: 10px 0px 0px; text-align: center; background: rgb(245, 245, 245);\">";
htmltmplStr += "            <div style=\"font-size: 13px; font-style: normal; font-weight: bold; padding: 0px 0px 2px; color: rgb(34, 34, 34);\">";
htmltmplStr += "			Mobile";
htmltmplStr += "			<\/div>";
htmltmplStr += "            <i style=\"display: block; font-style: normal; font-size: 9px; padding: 0px 0px 10px; color: rgb(34, 34, 34);\">";
htmltmplStr += "			IP Address";
htmltmplStr += "			<\/i>";
htmltmplStr += "		  <\/td>";
htmltmplStr += "        <\/tr>";
htmltmplStr += "      <\/tbody>";
htmltmplStr += "    <\/table>";
htmltmplStr += "  <\/body>";
htmltmplStr += "<\/html>";
htmltmplStr += "";

	return htmltmplStr;        
    }
});