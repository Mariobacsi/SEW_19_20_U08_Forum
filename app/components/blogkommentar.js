"use strict";

app.component("blogkommentar", {
    templateUrl: "components/blogkommentar.html",
    controller: "BlogkommentarController",
    bindings: {
        eintrag: "<",
        onChange: "&",
        deleteSelf: "&"
    },
    transclude: true
});


app.controller("BlogkommentarController", function ($log, Beitrag) {

    this.valAddKomm = (u, t) => {
        if ((u, t) == undefined || (u, t) == "") {
            $log.debug("Eintrag war leer");
        } else {
            this.eintrag.kommentieren(u, t, new Date());
            $log.debug(this.eintrag);
            this.safeToLocal();
        }
        this.eintrag.setAddKomm();
    };

    this.safeToLocal = () => {
        this.onChange();
    };

    this.zeitDiff = () => {
        return Date.now() - this.eintrag.date;
    };

});
