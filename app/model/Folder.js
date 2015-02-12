Ext.define('EnvPoolsForms.model.Folder', {
    extend: 'Ext.data.Model',
    alias: 'model.folder',

    uses: [
        'EnvPoolsForms.model.File'
    ],

    config: {
        fields: [
            {
                name: 'name'
            }
        ],
        associations: [ {
            type: 'hasMany',
            model: 'EnvPoolsForms.model.File',
            associationKey: 'files'
        }]
    }
});