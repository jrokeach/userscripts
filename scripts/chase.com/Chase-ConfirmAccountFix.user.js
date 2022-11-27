// ==UserScript==
// @name         Chase Confirm Account Number Fix
// @version      0.2
// @description  Enable pasting of confirmed account number into Chase's website.
// @author       Jason R. Rokeach
// @supportURL   https://github.com/jrokeach/userscripts
// @match        https://*.chase.com/web/auth/dashboard*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chase.com
// @grant        none
// ==/UserScript==

// Thanks goweon for this answer:
// https://stackoverflow.com/a/47406751
(new MutationObserver(check)).observe(document, {childList: true, subtree: true});

function check(changes, observer) {
    if(document.querySelector('#confirmedAccountNumber')) {
        observer.disconnect();
        var confirm_input = document.querySelector("#confirmedAccountNumber").shadowRoot.querySelector("#confirmedAccountNumber-input")
        confirm_input.removeAttribute("onpaste")
        confirm_input.removeAttribute("autocomplete")
    }
}
