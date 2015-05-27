'use strict';

/**
 * Creates an ISO 8601 extended format UTC timestamp (YYYY-MM-DDThh:mm:ssZ)
 *
 * @see    ISO 8601:2004(E) - Date and time; 4.3.2 Complete representations (extended format)
 *         International Organization for Standardization, "Data elements and
 *         interchange formats -- Information interchange -- Representation of
 *         dates and times", ISO 8601, December 2004.
 * @param  {Date} d Optional seed date
 * @return {String} ISO 8601 extended format UTC timestamp
 */
function dateTime(d) {
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

if (module.exports) {
    module.exports = dateTime;
}
