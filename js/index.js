"use strict";
var jsonschema_1 = require("jsonschema");
var pug_1 = require("pug");
var site_structure_schema_1 = require("./site-structure-schema");
var util_1 = require("./util");
var NAV_CONST = {
    // dont show in navigation at all
    none: "none",
    // default top navigation
    top: "top",
    // e.g. for sitemaps
    allplain: "allplain"
};
var Navigation = (function () {
    function Navigation(s, fileExtension, breadcrumbStartNode) {
        if (fileExtension === void 0) { fileExtension = "html"; }
        if (breadcrumbStartNode === void 0) { breadcrumbStartNode = { title: "Start", referencedFile: "index" }; }
        this.fileExtension = fileExtension;
        this.breadcrumbStartNode = breadcrumbStartNode;
        if (util_1.isNullOrEmpty(s)) {
            console.warn("Empty structure provided!");
            s = [];
        }
        if (!util_1.isNullOrEmpty(fileExtension)) {
            this.fileExtension = "." + fileExtension;
        }
        var validationResult = new jsonschema_1.Validator().validate(s, site_structure_schema_1.SiteStructureSchema);
        if (!validationResult.valid) {
            console.error(validationResult);
            throw {
                name: "InvalidArgument",
                message: "Invalid structure provided!"
            };
        }
        this.structure = s;
        this.breadcrumbs = {};
        for (var i = 0; i < this.structure.length; i++) {
            this.initBreadcrumbs(this.structure[i], [breadcrumbStartNode]);
        }
    }
    Navigation.prototype.writeNavigationEntry = function (entry, n, type) {
        var pug = "";
        if (!util_1.isNullOrUndefined(entry)
            && entry.children
            && (entry.children.filter(function (e) { return e.navigation !== NAV_CONST.none; }).length > 0
                || type === NAV_CONST.allplain)) {
            pug = util_1.indent(n, true)
                + "li"
                + (type !== NAV_CONST.allplain
                    ? ".dropdown"
                    : "")
                + util_1.indent(n + 2, true) + (type !== NAV_CONST.allplain
                ? "a(href='#') "
                : (entry.referencedFile
                    ? "a(href=\"" + entry.referencedFile + this.fileExtension + "\") "
                    : "div "))
                + entry.title
                + util_1.indent(n + 2, true)
                + "ul";
            for (var i = 0; i < entry.children.length; i++) {
                pug += this.writeNavigationEntry(entry.children[i], n + 4, type);
            }
        }
        else {
            if (type === NAV_CONST.allplain || entry.navigation !== NAV_CONST.none) {
                pug = util_1.indent(n, true) + ("li(class=(referencedFile === '" + entry.referencedFile + "' ? 'active' : undefined))")
                    + util_1.indent(n + 2, true) + ("a(href='" + entry.referencedFile + this.fileExtension + "') ")
                    + entry.title;
            }
        }
        return pug;
    };
    Navigation.prototype.renderBreadcrumb = function (breadcrumb) {
        var pug = "ol.breadcrumb(itemprop='breadcrumb' itemscope itemtype='http://schema.org/BreadcrumbList')";
        for (var i = 0; i < breadcrumb.length; i++) {
            var bc = breadcrumb[i];
            if (util_1.isNullOrEmpty(bc.referencedFile) || i === breadcrumb.length - 1) {
                pug += util_1.indent(2, true) + ("li" + ((i === breadcrumb.length - 1) ? ".active" : "") + "(itemprop='itemListElement' itemscope itemtype='http://schema.org/ListItem')")
                    + util_1.indent(4, true) + ("span(itemprop='name') " + bc.title)
                    + util_1.indent(4, true) + ("meta(itemprop='position' content='" + (i + 1) + "')");
            }
            else {
                pug += util_1.indent(2, true) + "li(itemprop='itemListElement' itemscope itemtype='http://schema.org/ListItem')"
                    + util_1.indent(4, true) + ("a(itemprop='item' href='" + bc.referencedFile + this.fileExtension + "')")
                    + util_1.indent(6, true) + ("span(itemprop='name') " + bc.title)
                    + util_1.indent(6, true) + ("meta(itemprop='position' content='" + (i + 1) + "')");
            }
        }
        return pug;
    };
    Navigation.prototype.initBreadcrumbs = function (branch, path) {
        var fork = path.slice();
        if (branch.referencedFile != this.breadcrumbStartNode.referencedFile) {
            fork.push({
                title: branch.title,
                referencedFile: branch.referencedFile
            });
        }
        this.breadcrumbs[branch.referencedFile] = fork;
        if (branch.children) {
            for (var _i = 0, _a = branch.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.initBreadcrumbs(child, fork);
            }
        }
    };
    Navigation.prototype.writeNavigation = function (type, writeHtml, excludedFromAllPlain) {
        if (writeHtml === void 0) { writeHtml = false; }
        if (excludedFromAllPlain === void 0) { excludedFromAllPlain = ["401", "404"]; }
        var pug = "ul";
        if (!util_1.isNullOrUndefined(this.structure) && this.structure.length > 0) {
            for (var _i = 0, _a = this.structure; _i < _a.length; _i++) {
                var node = _a[_i];
                if ((node.navigation || NAV_CONST.top) === type
                    || (type === NAV_CONST.allplain
                        && excludedFromAllPlain.indexOf(node.referencedFile) < 0)) {
                    pug += this.writeNavigationEntry(node, 2, type);
                }
            }
        }
        return writeHtml ? pug_1.render(pug) : pug;
    };
    Navigation.prototype.getBreadcrumb = function (referencedFile, writeHtml) {
        if (writeHtml === void 0) { writeHtml = false; }
        var bc = this.breadcrumbs[referencedFile];
        if (!bc) {
            throw {
                name: "ElementNotFound",
                message: "Missing in site-structure: " + referencedFile
            };
        }
        var pug = this.renderBreadcrumb(bc);
        return writeHtml ? pug_1.render(pug) : pug;
    };
    return Navigation;
}());
exports.Navigation = Navigation;
//# sourceMappingURL=index.js.map