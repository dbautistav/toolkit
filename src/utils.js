"use strict";

//// cf.: https://babeljs.io/docs/usage/polyfill
//import "babel-polyfill";

//import Q from "q";


export const LOGGER_LEVEL = {
    ERROR: "error",
    INFO: "info",
    LOG: "log",
    WARN: "warn"
};

//export const errorHandler = logger4PromiseProvider("ERROR!", LOGGER_LEVEL.ERROR);

export function identity(_) { return _; }

export function loggerProvider(method) {
    const level = method ? method : LOGGER_LEVEL.LOG;
    return (msg, title) => {
        const label = title ? title : "";
        console[level](label, msg);
    };
}

//export function logger4PromiseProvider(msg, method) {
//    const level = method ? method : LOGGER_LEVEL.LOG;
//
//    return (response) => {
//        return Q().then(() => {
//            console[level](msg, response);
//            return response;
//        });
//    };
//}

//export function responseLoggerProvider(caller, method) {
//    const label = caller ? `@${caller}` : "";
//    return logger4PromiseProvider(`response ${label}`, method);
//}
