"use strict";

// cf.: https://babeljs.io/docs/usage/polyfill
import "babel-polyfill";

export function onCompleteLoad(cb) {
    document.addEventListener("DOMContentLoaded", cb);
}
