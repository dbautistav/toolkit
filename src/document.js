"use strict";

// cf.: https://babeljs.io/docs/usage/polyfill
import "babel-polyfill";

export function onCompleteLoad() {
    return new Promise((resolve) => {
        document.addEventListener("DOMContentLoaded", () => { resolve(true); });
    });
}
