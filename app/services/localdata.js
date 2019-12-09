"use strict";

app.service("LocaldataService", function ($log, Beitrag) {

    $log.debug("LocaldataService()");

    this.loadLocal = (data) => {
        let beitrag = new Beitrag(data.username, data.text, new Date(data.date));
        data.kommentare.forEach(e => beitrag.kommentierenObject(this.loadLocal(e)));
        return beitrag;
    };

    this.safeToLocal = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    this.deleteLocal = (key) => {
        localStorage.removeItem(key);
    };

});
