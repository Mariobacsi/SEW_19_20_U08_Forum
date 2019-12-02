"use strict";

app.component("blog", {
    templateUrl: "components/blog.html",
    controller: "BlogController",
    bindings: {
        storage: "@",
        title: "@",
        text: "@"
    }
});


app.controller("BlogController", function ($log, Beitrag) {

    this.$onInit = function () {
        const data = JSON.parse(localStorage.getItem(this.storage));
        console.log(data);
        if (data != (null, undefined)) {
            console.log("loading from JSON");
            this.eintrag = this.loadLocal(data);
        } else {
            this.eintrag = new Beitrag(this.title, this.text);
        }
        console.log("Init Blog: \n");
        console.log(this.eintrag);
    };

    this.loadLocal = (data) => {
        let beitrag = new Beitrag(data.username, data.text);
        data.kommentare.forEach(e => beitrag.kommentierenObject(this.loadLocal(e)));
        return beitrag;
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
    };

    this.safeToLocal = () => {
        localStorage.setItem(this.storage, JSON.stringify(this.convertToSimple(this.eintrag)));
    };

    this.convertToSimple = (obj) => {
        let beitrag = {
            username: obj.username,
            text: obj.text,
            kommentare: []
        };
        obj.kommentare.forEach(e => beitrag.kommentare.push(this.convertToSimple(e)));
        return beitrag;
    }

    /*this.del = (obj) => {
        this.eintrag.kommentare.remove(obj);
    }*/
});
