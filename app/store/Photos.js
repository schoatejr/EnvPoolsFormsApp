Ext.define("EnvPoolsForms.store.Photos", {
    extend: "Ext.data.Store",
    requires: [
               'Ext.data.reader.Xml',
               'Ext.data.Store',
               'Ext.Map'
             ],
    config: {
        model: "EnvPoolsForms.model.File",
        storeId : 'Photos',
        autoLoad: false,
        listeners : {
            load : function (store)
            {
                console.log("The Photos store count is : " + store.getCount());
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
