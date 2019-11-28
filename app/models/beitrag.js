"use strict";

app.factory("Beitrag", function () {

    function Beitrag(username, text) {
        this.username = username;
        this.text = text;
        this.addkomm = false;
        this.kommentare = [];

        this.kommentieren = (username, text) => {
            let neuerBeitrag = new Beitrag(username, text);
            this.kommentare.push(neuerBeitrag);
            return neuerBeitrag;
        }

        this.setAddKomm = () => {
            this.addkomm = !this.addkomm;
        }
    }

    return Beitrag;
});
