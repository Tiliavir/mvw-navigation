"use strict";
var os_1 = require("os");
exports.isNullOrUndefined = function (o) {
    return o == null && o == undefined;
};
exports.isNullOrEmpty = function (o) {
    return exports.isNullOrUndefined(o) || o.length === 0;
};
exports.indent = function (indent, addNewline) {
    if (addNewline === void 0) { addNewline = false; }
    return (addNewline ? os_1.EOL : "") + new Array(indent < 0 ? 0 : indent + 1).join(" ");
};
//# sourceMappingURL=util.js.map