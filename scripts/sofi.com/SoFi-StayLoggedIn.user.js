// ==UserScript==
// @name         SoFi / Stay Logged In
// @version      0.1
// @description  Stay logged in to SoFi as long as the site is open
// @author       Jason R. Rokeach
// @supportURL   https://github.com/jrokeach/userscripts
// @match        https://*.sofi.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sofi.com
// @grant        none
// ==/UserScript==

function keepAlive() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', "/member-home");
    httpRequest.send(null);
}

setInterval(keepAlive, 280000);
