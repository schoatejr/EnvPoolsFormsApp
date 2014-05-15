Ext.define('EnvPoolsForms.util.JsonpX', {
    extend: 'Ext.data.reader.Xml',

    // Set the proxy alias
    alias: 'reader.jsonpx',

    parseXmlString: function (sXml) {
    	 Ext.Msg.alert("Hello1");
        // If the specified XML document content is a string...
        if (typeof sXml == "string") {

            // Create a reference to the XML document parser.
            var oParser = new DOMParser();

            // Return the reference to the XML document.
            return oParser.parseFromString(sXml, "text/xml");
        }
        else { // XML document content is NOT a string...
            // Return the specified XML document since it has already been parsed.
            return sXml;
        }
    },

    /*
   * override
   * @param {string} response the response to parse
   * @return {xml} the XML data that has been parsed
   */
    getResponseData: function(response){
   	 Ext.Msg.alert("Hello2");
        response = this.parseXmlString(response);
        return response;
    }
});