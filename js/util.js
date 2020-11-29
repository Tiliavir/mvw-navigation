"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indent = exports.isNullOrEmpty = exports.isNullOrUndefined = void 0;
const os_1 = require("os");
const isNullOrUndefined = (o) => {
    return o === null || o === undefined;
};
exports.isNullOrUndefined = isNullOrUndefined;
const isNullOrEmpty = (o) => {
    return exports.isNullOrUndefined(o) || o.length === 0;
};
exports.isNullOrEmpty = isNullOrEmpty;
const indent = (level, addNewline = false) => {
    return ((addNewline ? os_1.EOL : "") + new Array(level < 0 ? 0 : level + 1).join(" "));
};
exports.indent = indent;
//# sourceMappingURL=util.js.map