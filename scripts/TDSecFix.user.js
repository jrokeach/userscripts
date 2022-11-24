// ==UserScript==
// @name         TreasuryDirect Security Fix
// @version      0.1
// @description  Enable password managers to interact with the password field on the insecure TreasuryDirect website
// @author       Jason R. Rokeach
// @supportURL   https://github.com/jrokeach/TDSecFix
// @match        https://*.treasurydirect.gov/RS/PW-Display.do
// @icon         https://www.google.com/s2/favicons?sz=64&domain=treasurydirect.gov
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Allow use of the password field.
    document.querySelector("#Login > table > tbody > tr > td:nth-child(3) > input").removeAttribute("readonly")
    document.querySelector("#Login > table > tbody > tr > td:nth-child(3) > input").removeAttribute("autocomplete")
    // Remove the virtual keyboard.
    var vkeyboard = document.querySelector("#virtual_keyboard")
    vkeyboard.parentNode.removeChild(vkeyboard)
    document.querySelector("#Login > p.dividerline").innerHTML = "<p class=\"dividerline\"><br>Your security posture has been upgraded with <a href=\"https://github.com/jrokeach/userscripts\">jrokeach/userscripts TDSecFix.</a></p>"
})();