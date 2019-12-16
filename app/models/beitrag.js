"use strict";

app.factory("Beitrag", function () {

    function Beitrag(username, text, date) {
        this.username = username;
        this.text = text;
        this.addkomm = false;
        this.kommentare = [];
        this.date = date;

        this.kommentieren = (username, text, date) => {
            let neuerBeitrag = new Beitrag(username, text, date);
            this.kommentare.push(neuerBeitrag);
            return neuerBeitrag;
        };

        this.kommentierenObject = (beitrag) => {
            this.kommentare.push(beitrag);
            return beitrag;
        };

        this.setAddKomm = () => {
            this.addkomm = !this.addkomm;
        };
    }

    return Beitrag;
});
