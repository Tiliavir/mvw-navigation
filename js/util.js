"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
exports.isNullOrUndefined = (o) => {
    return o === null || o === undefined;
};
exports.isNullOrEmpty = (o) => {
    return exports.isNullOrUndefined(o) || o.length === 0;
};
exports.indent = (indent, addNewline = false) => {
    return (addNewline ? os_1.EOL : "") + new Array(indent < 0 ? 0 : indent + 1).join(" ");
};
//# sourceMappingURL=util.js.map