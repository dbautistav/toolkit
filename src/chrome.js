"use strict";

// cf.: https://babeljs.io/docs/usage/polyfill
import "babel-polyfill";

export function eventPageOnClickListener(cb) {
    chrome.browserAction.onClicked.addListener(cb);
}

export function contentScriptDoIt() {
    //chrome.runtime.sendMessage("Allo' Allo' World!");
    chrome.runtime.sendMessage(document.getElementsByTagName("title")[0].innerText);
}

export function backgroundDoIt() {
    chrome.runtime.onMessage.addListener((response, sender, sendResponse) => {
        alert(response);
    });
}
