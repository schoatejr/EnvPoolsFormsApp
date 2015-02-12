Ext.define('EnvPoolsForms.model.User', {
    extend: 'Ext.data.Model',
    alias: 'model.user',

    config: {
        idProperty: 'id',
        fields: [
            { name: 'email', type: 'string' },
            { name: 'password', type: 'string' },
        ],
        identifier: {
            type: 'uuid'
        },
        proxy: {
            type: 'localstorage',
            id  : 'userNames'
        }
    }
});