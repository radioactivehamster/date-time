var assert = require('assert');
var dateTime = require('../lib');

function dateTimeTest(d) {
    var d = d || new Date();
    var dt = {
        year:   d.getUTCFullYear(),
        month:  d.getUTCMonth() + 1,
        day:    d.getUTCDate(),
        hour:   d.getUTCHours(),
        minute: d.getUTCMinutes(),
        second: d.getUTCSeconds()
    };

    if (dt.month < 10) {
        dt.month = `0${dt.month}`;
    }

    if (dt.day < 10) {
        dt.day = `0${dt.day}`;
    }

    if (dt.hour < 10) {
        dt.hour = `0${dt.hour}`;
    }

    if (dt.minute < 10) {
        dt.minute = `0${dt.minute}`;
    }

    if (dt.second < 10) {
        dt.second = `0${dt.second}`;
    }

    return `${dt.year}-${dt.month}-${dt.day}T${dt.hour}:${dt.minute}:${dt.second}Z`;
}

describe('dateTime', function() {
    it('should create a `{YYYY}-{MM}-{DD}T{HH}:{MM}:{SS}Z` timestamp', function () {
        var now = new Date();
        assert.equal(dateTime(now), dateTimeTest(now));
    })
});
