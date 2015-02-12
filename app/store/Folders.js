Ext.define("EnvPoolsForms.store.Folders", {
    extend: "Ext.data.Store",
    requires: [
               'Ext.data.reader.Xml',
               'Ext.data.Store',
               'Ext.Map'
             ],
    config: {
        model: "EnvPoolsForms.model.Folder",
        storeId : 'Folders',
        autoLoad: true,
        listeners : {
            load : function (store)
            {
                console.log("The Folders store count is : " + store.getCount());
            }
        },

        proxy : {
            type   : 'ajax',
            url    : 'http://www.choateinc.com/fileScanner.php',
            reader : {
                type         : 'xml',
                rootProperty : 'folders',
                record       : 'folder'
            }
        },
        sorters: [{ property: 'name', direction: 'DESC'}],
        grouper: {
            sortProperty: "name",
            direction: "DESC",
            groupFn: function (record) {

                if (record && record.data.name) {
                    return record.name;
                } else {
                    return '';
                }
            }
        }
    }
});
