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


app.controller("BlogController", function ($log, Beitrag, LocaldataService, DialogService) {

    this.$onInit = function () {
        const data = JSON.parse(localStorage.getItem(this.storage));
        console.log(data);
        if (data != (null, undefined)) {
            console.log("loading from JSON");
            this.eintrag = LocaldataService.loadLocal(data);
        } else {
            this.eintrag = new Beitrag(this.title, this.text, new Date());
            LocaldataService.safeToLocal(this.storage, this.convertToSimple(this.eintrag))
        }
        console.log("Init Blog: \n");
        console.log(this.eintrag);
    };

    this.convertToSimple = (obj) => {
        let beitrag = {
            username: obj.username,
            text: obj.text,
            date: obj.date.toString(),
            kommentare: []
        };
        obj.kommentare.forEach(e => beitrag.kommentare.push(this.convertToSimple(e)));
        return beitrag;
    };

    this.valAddKomm = (u, t) => {
        if ((u, t) === undefined || (u, t) === "") {
            $log.debug("Eintrag war leer");
        } else {
            this.eintrag.kommentieren(u, t, new Date());
            $log.debug(this.eintrag);
            this.safeToLocal();
        }
        this.eintrag.setAddKomm();
    };

    this.safeToLocal = () =>{
        LocaldataService.safeToLocal(this.storage, this.convertToSimple(this.eintrag));
    };

    this.deleteBlog = () =>{
        this.eintrag.kommentare = [];
        LocaldataService.deleteLocal(this.storage);
    };

    /*function aktualisieren() {
        $timeout(aktualisieren, 1000);
    }

    aktualisieren();*/

});
