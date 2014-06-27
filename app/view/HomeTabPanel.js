Ext.define('EnvPoolsForms.view.HomeTabPanel', {
    extend: 'Ext.Panel',
    xtype: 'hometabpanel',

    requires: [
        'Ext.tab.Panel',
        'EnvPoolsForms.view.TimePickerField',
        'EnvPoolsForms.view.DateTimePicker',
        'EnvPoolsForms.view.DateTime'
    ],

    config: {
        layout: 'fit',
        items: [
{
                    xtype: 'datetimepickerfield',
                    name : '24hr',
                    label: '24 Hr Time',
                    value: new Date(),
                    dateTimeFormat : 'h:i:A',
                    picker: {
                        yearFrom: 1980,
                        minuteInterval : 1,
                        ampm : true,
                        slotOrder: ['hour','minute','ampm']
                    }
                }			
        ]
    }

});