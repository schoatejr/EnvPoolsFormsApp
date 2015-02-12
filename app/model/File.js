Ext.define('EnvPoolsForms.model.File', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name : 'id', mapping :'@id'},
            { name: 'name', type: 'string' },
            { name: 'type', type: 'string' },
            {name: 'file', mapping:  function (node) {
                return (node.firstChild ? node.firstChild.nodeValue : null);
            }}
        ],
        proxy : {
            reader: {type: 'xml', record: 'file'}
        },
        belongsTo: 'EnvPoolsForms.model.folder'
    }
});