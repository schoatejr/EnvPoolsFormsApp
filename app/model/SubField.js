Ext.define("EnvPoolsForms.model.SubField", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'ID',
        fields: [
            { name: 'ID', type: 'string' },
            { name: 'Label', type: 'string' },
            { name: 'DefaultVal', type: 'String' }
        ],
        validations: [
            { type: 'presence', field: 'ID' }
        ]
    }
});
