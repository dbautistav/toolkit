"use strict";

// cf.: https://babeljs.io/docs/usage/polyfill
import "babel-polyfill";

// TODO: consider using RxJS!

// TODO: encapsulate this into 'setupMessenger()'-ish function (cf.: getResponseByRuntimeOnMessageListener)
export function getTabsByBrowserActionOnClickListener() {
    return new Promise((resolve) => {
        chrome.browserAction.onClicked.addListener((tabs) => {
            console.log("tabs @BrowserAction", tabs);
            resolve(tabs);
        });
    });
}
export const browserActionOnClickedAddListener = getTabsByBrowserActionOnClickListener;


export function sendRuntimeMessage(message) {
    return new Promise((resolve) => {
        console.log("message", message);
        chrome.runtime.sendMessage(undefined, message, undefined, () => { resolve(true); });
    });
}
export const runtimeSendMessage = sendRuntimeMessage;

// TODO: encapsulate this into 'setupMessenger()'-ish function (cf.: getTabsByBrowserActionOnClickListener)
export function getResponseByRuntimeOnMessageListener() {
    return new Promise((resolve) => {
        chrome.runtime.onMessage.addListener((response) => {
            console.log("response", response);
            resolve(response);
            console.log("response (after 'resolve(response);')", response, resolve);

            chrome.tabs.query({
                currentWindow: true
            }, (_tabs) => {
                console.log("_tabs", _tabs);
            });

            // chrome.runtime.getBackgroundPage((_win) => {
            //     _win.alert(response);
            // });
        });
        //(response, sender, sendResponse) => {
        //    alert(response);
        //}
    });
}
export const runtimeOnMessageAddListener = getResponseByRuntimeOnMessageListener;
