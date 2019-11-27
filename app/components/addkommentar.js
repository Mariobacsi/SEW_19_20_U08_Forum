"use strict";

app.component("addkommentar", {
    templateUrl: "components/addkommentar.html",
    controller: "AddkommentarController",
    bindings: {
        onAddKommtentar: "&"
    }
});


app.controller("AddkommentarController", function ($log) {

    $log.debug("AddkommentarController()");

    this.send = () => {
        $log.debug(this.username + ", " + this.text);
        this.onAddKommtentar({
            user: this.username,
            text: this.text
        });
        delete this.username;
        delete this.text
    };

    this.cancel = () => {
        delete this.username;
        delete this.text
        this.onAddKommtentar();
    };

});
