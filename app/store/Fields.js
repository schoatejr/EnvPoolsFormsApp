Ext.define("EnvPoolsForms.store.Fields", {	
    extend: "Ext.data.Store",
    requires: [
               'Ext.dataview.List',
               'Ext.data.reader.Json',
               'Ext.data.Store',
               'Ext.Map'
             ],
    config: {
        model: "EnvPoolsForms.model.Field",
        storeId : 'Fields',
        autoLoad: false,
        listeners : {
            load : function (store) 
            {
                console.log("The Fields store count is : " + store.getCount());
            }
        },

        proxy: {
            type: 'ajax',
            method : 'GET',
            withCredentials: true,
            useDefaultXhrHeader: false,       
            password: 'footastic',
            //url: 'https://environmentalpools.wufoo.com/api/v3/forms.json',
            reader: 
            {
                type: 'json',
                rootProperty : 'Fields'
            },
            listeners:{
                exception:function(proxy, response, orientation){
                    console.log('Failure Notification : ' + response.responseText);
                    Ext.Msg.alert('Loading failed', response.statusText);
                }
            }
        },

        sorters: [{ property: 'Title', direction: 'DESC'}],
        grouper: {
            sortProperty: "Title",
            direction: "DESC",
            groupFn: function (record) {

                if (record && record.data.Title) {
                    return record.data.Title;
                } else {
                    return '';
                }
            }
        }
    },
});
