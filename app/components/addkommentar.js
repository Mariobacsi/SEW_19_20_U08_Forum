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
        if (this.text == null || this.text == undefined || this.text == "") this.text = this.username
        this.onAddKommtentar({
            user: this.username,
            text: this.text
        });
        delete this.username;
        delete this.text
        this.formular.$setUntouched()
    };

    this.cancel = () => {
        delete this.username;
        delete this.text
        this.formular.$setUntouched()
        this.onAddKommtentar();
    };

});
