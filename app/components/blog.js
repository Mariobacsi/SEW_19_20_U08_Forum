"use strict";

app.component("blog", {
    templateUrl: "components/blog.html",
    controller: "BlogController",
    bindings: {
        title: "@",
        text: "@"
    },
    transclude: true
});


app.controller("BlogController", function ($log, Beitrag) {

    this.$onInit = function () {
        this.eintrag = new Beitrag(this.title, this.text);
    };

    this.addkomm = false;

    this.valAddKomm = (u, t) => {
        if ((u, t) == undefined || (u, t) == "") {
            $log.debug("Eintrag war leer");
        } else {
            let e = new Beitrag(u, t);
            this.eintrag.kommentare.push(e);
            $log.debug(this.eintrag);
            this.safeToLocal();
        }
        this.setAddKomm();
    }

    this.safeToLocal = () => {
        localStorage.setItem('Data', JSON.stringify(this.eintrag));
    }

    this.setAddKomm = () => {
        this.addkomm = !this.addkomm;
    }
});
