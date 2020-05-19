"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indent = exports.isNullOrEmpty = exports.isNullOrUndefined = void 0;
const os_1 = require("os");
exports.isNullOrUndefined = (o) => {
    return o === null || o === undefined;
};
exports.isNullOrEmpty = (o) => {
    return exports.isNullOrUndefined(o) || o.length === 0;
};
exports.indent = (level, addNewline = false) => {
    return ((addNewline ? os_1.EOL : "") + new Array(level < 0 ? 0 : level + 1).join(" "));
};
//# sourceMappingURL=util.js.map