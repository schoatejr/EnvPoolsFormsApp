Ext.define("EnvPoolsForms.store.Users", {
    extend: "Ext.data.Store",
    config: {
        model: "EnvPoolsForms.model.User",
        storeId : 'Users',
        autoLoad: true,
        listeners : {
            load : function (store)
            {
                if (store.getCount() > 0)
                {
                    console.log("There was a record in the Users Store for the email and password");

                    var newRecord = store.getAt(0).getData();
                    //console.log("The email address is [" + newRecord.email + "] the password is [" + newRecord.password + "]");
                }
            }
        }
    }
});
