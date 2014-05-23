Ext.define("EnvPoolsForms.store.Reports", {	
    extend: "Ext.data.Store",
    requires: [
               'Ext.dataview.List',
               'Ext.data.reader.Json',
               'Ext.data.Store',
               'Ext.Map'
             ],
    config: {
        model: "EnvPoolsForms.model.Form",
        storeId : 'Reports',
        autoLoad: false,
        listeners : {
            load : function (store) 
            {
                console.log("The name is : " + store.getCount());
            }
        },
        proxy: {
            type: 'ajax',
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
