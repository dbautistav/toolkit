"use strict";

// cf.: https://babeljs.io/docs/usage/polyfill
import "babel-polyfill";

export function getTabsByBrowserActionOnClickListener() {
    return new Promise((resolve) => {
        chrome.browserAction.onClicked.addListener((tabs) => { resolve(tabs); });
    });
}
export const browserActionOnClickedAddListener = getTabsByBrowserActionOnClickListener;


export function sendRuntimeMessage(message) {
    return new Promise((resolve) => {
        chrome.runtime.sendMessage(undefined, message, undefined, () => { resolve(true); });
    });
}
export const runtimeSendMessage = sendRuntimeMessage;


export function getResponseByRuntimeOnMessageListener() {
    return new Promise((resolve) => {
        chrome.runtime.onMessage.addListener((response) => { resolve(response); });
        //(response, sender, sendResponse) => {
        //    alert(response);
        //}
    });
}
export const runtimeOnMessageAddListener = getResponseByRuntimeOnMessageListener;
