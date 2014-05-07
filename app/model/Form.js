Ext.define("EnvPoolsForms.model.Form", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'Hash',
        fields: [
            { name: 'Name', type: 'string' },
            { name: 'Description', type: 'string' },
            { name: 'RedirectMessage', type: 'string' },
            { name: 'Url', type: 'string' },
            { name: 'Email', type: 'string' },
            { name: 'IsPublic', type: 'int' },
            { name: 'Language', type: 'string' },
            { name: 'StartDate', type: 'date', dateFormat: 'c'  },
            { name: 'EndDate', type: 'date', dateFormat: 'c'  },
            { name: 'EntryLimit', type: 'int' },
            { name: 'DateCreated', type: 'date', dateFormat: 'c'  },
            { name: 'DateUpdated', type: 'date', dateFormat: 'c'  },
            { name: 'Hash', type: 'string' },
            { name: 'LinkFields', type: 'string' },
            { name: 'LinkEntries', type: 'string' },
            { name: 'LinkEntriesCount', type: 'string' },
            { name: 'EntryCountToday', type: 'int' }
        ],
        validations: [
            { type: 'presence', field: 'name' , message: 'Please enter a namee for this form.' },
            { type: 'presence', field: 'DateCreated' },
            { type: 'presence', field: 'Hash'}
        ]
    }
});