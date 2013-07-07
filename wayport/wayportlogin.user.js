// vim:expandtab:shiftwidth=4:tabstop=4
// ==UserScript==
// @name Wayport autologin
// @namespace lucas.fisher@gmail.com
// @description Login to a Wayport access point automatically
// @grant none
// @include http://nmd.hil-abqhwhw.abq.wayport.net/*
// ==/UserScript==

var RoomNumber = "";
var LastName = "";

if (document.documentURI.contains("index.adp")) {
    console.log("Got index.adp"); 
    var loginForm = document.forms["HiltonLoginForm"];
    if (loginForm) {
        loginForm["folio_button"].checked = true;
        loginForm["aupAgree"].checked = true;
        loginForm.submit();
    }
}

if (document.documentURI.contains("use_connect.adp")) {
    console.log("Got use_connect.adp");
    var form = document.forms["HiltonLoginForm"];
    if (form) {
        form["RoomNumber"].value = RoomNumber;
        form["LastName"].value = LastName;
        form.submit();
    }
}

