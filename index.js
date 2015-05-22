'use strict';

function dateTime() {
    var now = new Date();
    var dt = {
        year:   now.getUTCFullYear(),
        month:  now.getUTCMonth() + 1,
        day:    now.getUTCDate(),
        hour:   now.getUTCHours(),
        minute: now.getUTCMinutes(),
        second: now.getUTCSeconds()
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

if (module.exports) {
    module.exports = dateTime;
}
