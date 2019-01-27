"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonschema_1 = require("jsonschema");
const pug_1 = require("pug");
const util_1 = require("./util");
const SiteStructureSchema = require("./site-structure-schema");
const NAV_CONST = {
    // e.g. for sitemaps
    allplain: "allplain",
    // dont show in navigation at all
    none: "none",
    // default top navigation
    top: "top",
};
class Navigation {
    constructor(s, fileExtension = "html", breadcrumbStartNode = {
        reference: "index",
        title: "Start",
    }) {
        this.fileExtension = fileExtension;
        this.breadcrumbStartNode = breadcrumbStartNode;
        if (util_1.isNullOrEmpty(s)) {
            console.warn("Empty structure provided!");
            s = [];
        }
        if (!util_1.isNullOrEmpty(fileExtension)) {
            this.fileExtension = `.${fileExtension}`;
        }
        const validationResult = new jsonschema_1.Validator().validate(s, SiteStructureSchema);
        if (!validationResult.valid) {
            console.error(validationResult);
            throw {
                message: "Invalid structure provided!",
                name: "InvalidArgument",
            };
        }
        this.structure = s;
        this.breadcrumbs = {};
        for (const node of this.structure) {
            this.initBreadcrumbs(node, [breadcrumbStartNode]);
        }
    }
    writeNavigation(type, writeHtml = false, excludedFromAllPlain = ["401", "404"]) {
        let pug = "ul";
        if (!util_1.isNullOrUndefined(this.structure) && this.structure.length > 0) {
            for (const node of this.structure) {
                if ((node.navigation || NAV_CONST.top) === type ||
                    (type === NAV_CONST.allplain &&
                        excludedFromAllPlain.indexOf(node.reference) <
                            0)) {
                    pug += this.writeNavigationEntry(node, 2, type);
                }
            }
        }
        return writeHtml ? pug_1.render(pug) : pug;
    }
    getBreadcrumb(reference, writeHtml = false) {
        const bc = this.breadcrumbs[reference];
        if (!bc) {
            throw {
                message: "Missing in site-structure: " + reference,
                name: "ElementNotFound",
            };
        }
        const pug = this.renderBreadcrumb(bc);
        return writeHtml ? pug_1.render(pug) : pug;
    }
    writeNavigationEntry(entry, n, type) {
        let pug = "";
        if (!util_1.isNullOrUndefined(entry) &&
            entry.children &&
            (entry.children.filter((e) => e.navigation !== NAV_CONST.none)
                .length > 0 ||
                type === NAV_CONST.allplain)) {
            pug =
                util_1.indent(n, true) +
                    "li" +
                    (type !== NAV_CONST.allplain ? ".dropdown" : "") +
                    util_1.indent(n + 2, true) +
                    this.getParentAnchor(entry, type) +
                    util_1.indent(n + 2, true) +
                    `ul`;
            for (const child of entry.children) {
                pug += this.writeNavigationEntry(child, n + 4, type);
            }
        }
        else {
            if (type === NAV_CONST.allplain || entry.navigation !== NAV_CONST.none) {
                const sn = entry;
                pug =
                    util_1.indent(n, true) + (sn.isExternal
                        ? "li"
                        : `li(class=(reference === "${sn.reference}" ? "active" : undefined))`) +
                        util_1.indent(n + 2, true) +
                        `a(href="${sn.reference}${sn.isExternal ? "" : this.fileExtension}") ` +
                        entry.title;
            }
        }
        return pug;
    }
    getParentAnchor(entry, type) {
        let container;
        if (type !== NAV_CONST.allplain) {
            container = 'a(href="#") ';
        }
        else if (entry.reference) {
            const link = entry.reference + (entry.isExternal ? "" : this.fileExtension);
            container = `a(href="${link}") `;
        }
        else {
            container = "div ";
        }
        return container + entry.title;
    }
    renderBreadcrumb(breadcrumb) {
        let pug = `ol.breadcrumb(itemprop="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList")`;
        for (let i = 0; i < breadcrumb.length; i++) {
            const bc = breadcrumb[i];
            if (util_1.isNullOrEmpty(bc.reference) || i === breadcrumb.length - 1) {
                pug +=
                    util_1.indent(2, true) +
                        `li${i === breadcrumb.length - 1 ? ".active" : ""}(itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem")` +
                        util_1.indent(4, true) +
                        `span(itemprop="name") ${bc.title}` +
                        util_1.indent(4, true) +
                        `meta(itemprop="position" content="${i + 1}")`;
            }
            else {
                pug +=
                    util_1.indent(2, true) +
                        `li(itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem")` +
                        util_1.indent(4, true) +
                        `a(itemprop="item" href="${bc.reference}${this.fileExtension}")` +
                        util_1.indent(6, true) +
                        `span(itemprop="name") ${bc.title}` +
                        util_1.indent(6, true) +
                        `meta(itemprop="position" content="${i + 1}")`;
            }
        }
        return pug;
    }
    initBreadcrumbs(node, path) {
        const fork = [...path];
        const sn = node;
        if (sn.reference !== this.breadcrumbStartNode.reference) {
            fork.push({
                reference: sn.isExternal ? null : sn.reference,
                title: node.title,
            });
        }
        this.breadcrumbs[sn.reference] = fork;
        const branch = node;
        if (branch.children) {
            for (const child of branch.children) {
                this.initBreadcrumbs(child, fork);
            }
        }
    }
}
exports.Navigation = Navigation;
//# sourceMappingURL=index.js.map