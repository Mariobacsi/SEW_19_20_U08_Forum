"use strict";

app.filter("zeitDiff", function () {

    function zeitDiff(diffInMs) {
        let vorsilbe = diffInMs >= 0 ? "in" : "vor";
        let s = Math.round(Math.abs(diffInMs / 1000));

        if (s < 60) {
            return `${vorsilbe} ${s} s`;
        } else if (s < 3600) {
            return `${vorsilbe} ${Math.round(s / 60)}m`;
        } else if (s < 86400) {
            return `${vorsilbe} ${Math.round(s / 3600)}h`;
        } else {
            return `${vorsilbe} ${Math.round(s / 86400)}d`;
        }
    }

    return zeitDiff;
});
