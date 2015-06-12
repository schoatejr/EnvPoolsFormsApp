Ext.define("EnvPoolsForms.store.Plans", {
    extend: "Ext.data.Store",
    requires: [
               'Ext.data.reader.Xml',
               'Ext.data.Store',
               'Ext.Map'
             ],
    config: {
        model: "EnvPoolsForms.model.File",
        storeId : 'Plans',
        autoLoad: false,
        listeners : {
            load : function (store)
            {
                console.log("The Plans store count is : " + store.getCount());
            }
        },
        grouper: {
            sortProperty: "name",
            sorters: [{ property: 'name', direction: 'ASC'}],
            direction: "ASC",
            groupFn: function (record) {

                if (record && record.data.name) {
                    return record.data.name;
                } else {
                    return '';
                }
            }
        }

    }
});
