"use strict";

app.component("blogkommentar", {
    templateUrl: "components/blogkommentar.html",
    controller: "BlogkommentarController",
    bindings: {
        username: "@",
        text: "@",
        eintragData: "<",
        onChange: "&"
    },
    transclude: true
});


app.controller("BlogkommentarController", function ($log, Beitrag) {

    this.$onInit = function () {
        if ((this.username, this.text) != undefined || (this.username, this.text) != "") {
            this.eintrag = new Beitrag(this.username, this.text);
        }else {
            this.eintrag = this.eintragData;
        }
        console.log(this.eintrag);
    };

    this.addkomm = false;

    this.valAddKomm = (u, t) => {
        if ((u, t) == undefined || (u, t) == "") {
            $log.debug("Eintrag war leer");
        } else {
            console.log(this.eintrag);
            this.eintrag.kommentieren(u, t);
            $log.debug(this.eintrag);
            this.safeToLocal()
        }
        this.setAddKomm();
    }

    this.safeToLocal = () => {
        this.onChange();
    }

    this.setAddKomm = () => {
        this.addkomm = !this.addkomm;
    }
});
