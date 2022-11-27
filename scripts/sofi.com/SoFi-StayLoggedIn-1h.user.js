// ==UserScript==
// @name         SoFi / Stay Logged In / 1 hour
// @version      0.1
// @description  Stay logged in to SoFi for 1 hour
// @author       Jason R. Rokeach
// @supportURL   https://github.com/jrokeach/userscripts
// @match        https://*.sofi.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sofi.com
// @grant        none
// ==/UserScript==

// Set this to the number of minutes you would like the script to run.
// Session timeout will proceed as normal after this time.
const LOGIN_MINUTES = 60

// DO NOT EDIT BELOW THIS LINE

const INT_MS = 280000

var login_ms_remaining = LOGIN_MINUTES*60*1000

function keepAlive() {
    if (login_ms_remaining < INT_MS) {
        clearInterval(interval)
        setTimeout(login_ms_remaining)
    }
    else {
        login_ms_remaining -= INT_MS
    }
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', "/member-home");
    httpRequest.send(null);
}

var interval = setInterval(keepAlive, INT_MS);
