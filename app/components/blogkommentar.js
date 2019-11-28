"use strict";

app.component("blogkommentar", {
    templateUrl: "components/blogkommentar.html",
    controller: "BlogkommentarController",
    bindings: {
        eintrag: "<",
        onChange: "&"
    },
    transclude: true
});


app.controller("BlogkommentarController", function ($log, Beitrag) {

    this.$onInit = function () {
        console.log(this.eintrag);
    };

    this.valAddKomm = (u, t) => {
        if ((u, t) == undefined || (u, t) == "") {
            $log.debug("Eintrag war leer");
        } else {
            this.eintrag.kommentieren(u, t);
            $log.debug(this.eintrag);
            this.onChange();
        }
        this.eintrag.setAddKomm();
    }

});
