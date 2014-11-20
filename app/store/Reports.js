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
                console.log("The Reports store count is : " + store.getCount());
            }
        },
      
        proxy: {
            type: 'ajax',
            method : 'GET',
            withCredentials: true,
            useDefaultXhrHeader: false,       
            password: 'footastic',
            url: 'https://environmentalpools.wufoo.com/api/v3/forms.json',
            reader: 
            {
                type: 'json',
                rootProperty : 'Forms'
            },
            listeners:{
                exception:function(proxy, response, orientation){
                    console.log('Failure Notification : ' + response.responseText);
                    Ext.Msg.alert('Loading failed', response.statusText);
                }
            }
        },
        filters: [{
            property: 'IsPublic',
            value: '1'
        }],
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
