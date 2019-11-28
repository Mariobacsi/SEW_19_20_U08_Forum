"use strict";

app.component("blog", {
    templateUrl: "components/blog.html",
    controller: "BlogController",
    bindings: {
        title: "@",
        text: "@"
    }
});


app.controller("BlogController", function ($log, Beitrag) {

    this.$onInit = function () {
        this.eintrag = new Beitrag(this.title, this.text);
        console.log("Init Blog: \n");
        console.log(this.eintrag)
    };

    this.valAddKomm = (u, t) => {
        if ((u, t) == undefined || (u, t) == "") {
            $log.debug("Eintrag war leer");
        } else {
            this.eintrag.kommentieren(u, t);
            $log.debug(this.eintrag);
            this.safeToLocal();
        }
        this.eintrag.setAddKomm();
    }

    this.safeToLocal = () => {
        localStorage.setItem('Blog', JSON.stringify(this.eintrag));
    }
});
