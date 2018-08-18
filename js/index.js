"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonschema_1 = require("jsonschema");
const pug_1 = require("pug");
const util_1 = require("./util");
const SiteStructureSchema = require("./site-structure-schema");
const NAV_CONST = {
    // dont show in navigation at all
    none: "none",
    // default top navigation
    top: "top",
    // e.g. for sitemaps
    allplain: "allplain"
};
class Navigation {
    constructor(s, fileExtension = "html", breadcrumbStartNode = { title: "Start", referencedFile: "index" }) {
        this.fileExtension = fileExtension;
        this.breadcrumbStartNode = breadcrumbStartNode;
        if (util_1.isNullOrEmpty(s)) {
            console.warn("Empty structure provided!");
            s = [];
        }
        if (!util_1.isNullOrEmpty(fileExtension)) {
            this.fileExtension = `.${fileExtension}`;
        }
        let validationResult = new jsonschema_1.Validator().validate(s, SiteStructureSchema);
        if (!validationResult.valid) {
            console.error(validationResult);
            throw {
                name: "InvalidArgument",
                message: "Invalid structure provided!"
            };
        }
        this.structure = s;
        this.breadcrumbs = {};
        for (let i = 0; i < this.structure.length; i++) {
            this.initBreadcrumbs(this.structure[i], [breadcrumbStartNode]);
        }
    }
    writeNavigationEntry(entry, n, type) {
        let pug = "";
        if (!util_1.isNullOrUndefined(entry)
            && entry.children
            && (entry.children.filter((e) => e.navigation !== NAV_CONST.none).length > 0
                || type === NAV_CONST.allplain)) {
            pug = util_1.indent(n, true)
                + "li"
                + (type !== NAV_CONST.allplain
                    ? ".dropdown"
                    : "")
                + util_1.indent(n + 2, true) + (type !== NAV_CONST.allplain
                ? "a(href=\"#\") "
                : (entry.referencedFile
                    ? `a(href="${entry.referencedFile}${this.fileExtension}") `
                    : "div "))
                + entry.title
                + util_1.indent(n + 2, true)
                + `ul`;
            for (let i = 0; i < entry.children.length; i++) {
                pug += this.writeNavigationEntry(entry.children[i], n + 4, type);
            }
        }
        else {
            if (type === NAV_CONST.allplain || entry.navigation !== NAV_CONST.none) {
                pug = util_1.indent(n, true) + `li(class=(referencedFile === "${entry.referencedFile}" ? "active" : undefined))`
                    + util_1.indent(n + 2, true) + `a(href="${entry.referencedFile}${this.fileExtension}") `
                    + entry.title;
            }
        }
        return pug;
    }
    renderBreadcrumb(breadcrumb) {
        let pug = `ol.breadcrumb(itemprop="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList")`;
        for (let i = 0; i < breadcrumb.length; i++) {
            let bc = breadcrumb[i];
            if (util_1.isNullOrEmpty(bc.referencedFile) || i === breadcrumb.length - 1) {
                pug += util_1.indent(2, true) + `li${((i === breadcrumb.length - 1) ? ".active" : "")}(itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem")`
                    + util_1.indent(4, true) + `span(itemprop="name") ${bc.title}`
                    + util_1.indent(4, true) + `meta(itemprop="position" content="${i + 1}")`;
            }
            else {
                pug += util_1.indent(2, true) + `li(itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem")`
                    + util_1.indent(4, true) + `a(itemprop="item" href="${bc.referencedFile}${this.fileExtension}")`
                    + util_1.indent(6, true) + `span(itemprop="name") ${bc.title}`
                    + util_1.indent(6, true) + `meta(itemprop="position" content="${i + 1}")`;
            }
        }
        return pug;
    }
    initBreadcrumbs(node, path) {
        let fork = [...path];
        if (node.referencedFile != this.breadcrumbStartNode.referencedFile) {
            fork.push({
                title: node.title,
                referencedFile: node.referencedFile
            });
        }
        this.breadcrumbs[node.referencedFile] = fork;
        let branch = node;
        if (branch.children) {
            for (let child of branch.children) {
                this.initBreadcrumbs(child, fork);
            }
        }
    }
    writeNavigation(type, writeHtml = false, excludedFromAllPlain = ["401", "404"]) {
        let pug = "ul";
        if (!util_1.isNullOrUndefined(this.structure) && this.structure.length > 0) {
            for (let node of this.structure) {
                if ((node.navigation || NAV_CONST.top) === type
                    || (type === NAV_CONST.allplain
                        && excludedFromAllPlain.indexOf(node.referencedFile) < 0)) {
                    pug += this.writeNavigationEntry(node, 2, type);
                }
            }
        }
        return writeHtml ? pug_1.render(pug) : pug;
    }
    getBreadcrumb(referencedFile, writeHtml = false) {
        let bc = this.breadcrumbs[referencedFile];
        if (!bc) {
            throw {
                name: "ElementNotFound",
                message: "Missing in site-structure: " + referencedFile
            };
        }
        let pug = this.renderBreadcrumb(bc);
        return writeHtml ? pug_1.render(pug) : pug;
    }
}
exports.Navigation = Navigation;
//# sourceMappingURL=index.js.map