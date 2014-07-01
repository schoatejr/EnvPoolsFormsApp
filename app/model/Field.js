Ext.define("EnvPoolsForms.model.Field", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'ID',
        fields: [
            { name: 'ID', type: 'string' },
            { name: 'Title', type: 'string' },
            { name: 'Type', type: 'string' },
            { name: 'Instructions', type: 'string' },
            { name: 'IsRequired', type: 'int' },
            { name: 'ClassNames', type: 'string' },
            { name: 'DefaultVal', type: 'String' },
            { name: 'Page', type: 'int' },
        ],
        // we can use the hasOne shortcut on the model to create a hasOne association
        hasMany: {model: 'SubField', name: 'SubFields'},
        validations: [
            { type: 'presence', field: 'Title' },
            { type: 'presence', field: 'ID' },
            { type: 'presence', field: 'Type' }
        ]
    }
});