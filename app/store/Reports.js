Ext.define("EnvPoolsForms.store.Reports", {	
    extend: "Ext.data.Store",
    requires: [
               'Ext.dataview.List',
               'Ext.data.proxy.JsonP',
               'Ext.data.reader.Xml',
               'Ext.data.reader.Json',
               'Ext.data.Store',
               'EnvPoolsForms.util.JsonpX',
               'Ext.Map'
             ],
    config: {
        model: "EnvPoolsForms.model.Form",
        autoLoad: true,
        listeners : {
            load : function (store) 
            {
                console.log("Hello World 3!!!"); //Blam!

                console.log("The name is : " + store.totalCount()); //Blam!

                console.log("Hello World 4!!!"); //Blam!
            }
        },
        proxy: {
            type: 'ajax',
            //url: 'https://environmentalpools.wufoo.com/api/v3/forms.json',
            url: 'http://localhost/EnvPoolsForms/data/testForms.json',
            id: 'envpoolsforms-app-store2',
            reader: 
            {
                type: 'json',
                rootProperty : 'Forms'
            }
        },
        sorters: [{ property: 'DateCreated', direction: 'DESC'}],
        grouper: {
            sortProperty: "DateCreated",
            direction: "DESC",
            groupFn: function (record) {

                if (record && record.data.DateCreated) {
                    return record.data.DateCreated.toDateString();
                } else {
                    return '';
                }
            }
        }
    },
});
