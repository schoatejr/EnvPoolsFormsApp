Ext.define("EnvPoolsForms.store.Forms", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    config: {
        model: "EnvPoolsForms.model.Form",
        data:
        	  [
        	    {
        	        "Name" : "Excavation Progress Report",
        	        "Description" : "Please fill out the form below and submit for processing. Thank you!",
        	        "RedirectMessage" : "Thank you for submitting your progress report.",
        	        "Url" : "excavation-progress-report",
        	        "Email" : "andrew.everleigh@environmentalpools.com",
        	        "IsPublic" : "1",
        	        "Language" : "english",
        	        "StartDate" : "2000-01-01 12:00:00",
        	        "EndDate" : "2030-01-01 12:00:00",
        	        "EntryLimit" : "0",
        	        "DateCreated" : "2014-02-13 06:59:16",
        	        "DateUpdated" : "2014-04-10 04:06:19",
        	        "Hash" : "qe0ob6v05fvf2s",
        	        "LinkFields" : "https://environmentalpools.wufoo.com/api/v3/forms/qe0ob6v05fvf2s/fields.json?pretty=true&includeTodayCount=false",
        	        "LinkEntries" : "https://environmentalpools.wufoo.com/api/v3/forms/qe0ob6v05fvf2s/entries.json?pretty=true&includeTodayCount=false",
        	        "LinkEntriesCount" : "https://environmentalpools.wufoo.com/api/v3/forms/qe0ob6v05fvf2s/entries/count.json?pretty=true&includeTodayCount=false",
        	        "EntryCountToday" : 0
        	      },
        	      {
        	        "Name" : "Plumbing Progress Report",
        	        "Description" : "Please fill out the form below and submit for processing. Thank you!",
        	        "RedirectMessage" : "Thank you for submitting your progress report.",
        	        "Url" : "plumbing-progress-report",
        	        "Email" : "andrew.everleigh@environmentalpools.com",
        	        "IsPublic" : "1",
        	        "Language" : "english",
        	        "StartDate" : "2000-01-01 12:00:00",
        	        "EndDate" : "2030-01-01 12:00:00",
        	        "EntryLimit" : "0",
        	        "DateCreated" : "2014-02-13 06:59:16",
        	        "DateUpdated" : "2014-03-05 14:28:23",
        	        "Hash" : "rb66a8t1mkl1d2",
        	        "LinkFields" : "https://environmentalpools.wufoo.com/api/v3/forms/rb66a8t1mkl1d2/fields.json?pretty=true&includeTodayCount=false",
        	        "LinkEntries" : "https://environmentalpools.wufoo.com/api/v3/forms/rb66a8t1mkl1d2/entries.json?pretty=true&includeTodayCount=false",
        	        "LinkEntriesCount" : "https://environmentalpools.wufoo.com/api/v3/forms/rb66a8t1mkl1d2/entries/count.json?pretty=true&includeTodayCount=false",
        	        "EntryCountToday" : 0
        	      },
        	      {
        	        "Name" : "Rebar Installation Progress Report",
        	        "Description" : "Please fill out the form below and submit for processing. Thank you!",
        	        "RedirectMessage" : "Thank you for submitting your progress report.",
        	        "Url" : "rebar-installation-progress-report",
        	        "Email" : "andrew.everleigh@environmentalpools.com",
        	        "IsPublic" : "1",
        	        "Language" : "english",
        	        "StartDate" : "2000-01-01 12:00:00",
        	        "EndDate" : "2030-01-01 12:00:00",
        	        "EntryLimit" : "0",
        	        "DateCreated" : "2014-02-13 06:59:16",
        	        "DateUpdated" : "2014-02-14 06:50:42",
        	        "Hash" : "z4asne08y1pgc",
        	        "LinkFields" : "https://environmentalpools.wufoo.com/api/v3/forms/z4asne08y1pgc/fields.json?pretty=true&includeTodayCount=false",
        	        "LinkEntries" : "https://environmentalpools.wufoo.com/api/v3/forms/z4asne08y1pgc/entries.json?pretty=true&includeTodayCount=false",
        	        "LinkEntriesCount" : "https://environmentalpools.wufoo.com/api/v3/forms/z4asne08y1pgc/entries/count.json?pretty=true&includeTodayCount=false",
        	        "EntryCountToday" : 0
        	      }
        	  ],
        proxy: {
            type: 'localstorage',
            id: 'envpoolsforms-app-store'
        },
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
