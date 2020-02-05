import { Validator, ValidatorResult } from "jsonschema";
import { render } from "pug";

import { NavigationType } from "./NavigationType";
import { ConfigNode } from "./structure/ConfigNode";
import { IBranch } from "./structure/IBranch";
import { IBreadcrumbNode } from "./structure/IBreadcrumbNode";
import { INavigationNode } from "./structure/INavigationNode";
import { IStructureNode } from "./structure/IStructureNode";
import { StructureConfig } from "./StructureConfig";
import { indent, isNullOrEmpty, isNullOrUndefined } from "./util";

const SiteStructureSchema: any = require("./site-structure-schema");

const NAV_CONST: { none: string; top: string; allplain: string } = {
  // e.g. for sitemaps
  allplain: "allplain",
  // dont show in navigation at all
  none: "none",
  // default top navigation
  top: "top",
};

export class Navigation {
  private structure: StructureConfig;
  private breadcrumbs: { [reference: string]: IBreadcrumbNode[] };

  public constructor(
    s: any,
    private fileExtension: string = "html",
    private breadcrumbStartNode: IBreadcrumbNode = {
      reference: "index",
      title: "Start",
    },
  ) {
    if (isNullOrEmpty(s)) {
      console.warn("Empty structure provided!");
      s = [];
    }

    if (!isNullOrEmpty(fileExtension)) {
      this.fileExtension = `.${fileExtension}`;
    }

    const validationResult: ValidatorResult = new Validator().validate(
      s,
      SiteStructureSchema,
    );
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

  public writeNavigation(
    type: NavigationType,
    writeHtml: boolean = false,
    excludedFromAllPlain: string[] = ["401", "404"],
  ): string {
    let pug: string = "ul";

    if (!isNullOrUndefined(this.structure) && this.structure.length > 0) {
      for (const node of this.structure) {
        if (
          ((node as IStructureNode).navigation || NAV_CONST.top) === type ||
          (type === NAV_CONST.allplain &&
            excludedFromAllPlain.indexOf((node as IStructureNode).reference) <
              0)
        ) {
          pug += this.writeNavigationEntry(node, 2, type);
        }
      }
    }

    return writeHtml ? render(pug) : pug;
  }

  public getBreadcrumb(reference: string, writeHtml: boolean = false): string {
    const bc: IBreadcrumbNode[] = this.breadcrumbs[reference];
    if (!bc) {
      throw {
        message: "Missing in site-structure: " + reference,
        name: "ElementNotFound",
      };
    }

    const pug: string = this.renderBreadcrumb(bc);
    return writeHtml ? render(pug) : pug;
  }

  private writeNavigationEntry(
    entry: ConfigNode,
    n: number,
    type: NavigationType,
  ): string {
    let pug: string = "";
    if (
      !isNullOrUndefined(entry) &&
      entry.children &&
      (entry.children.filter((e): boolean => e.navigation !== NAV_CONST.none)
        .length > 0 ||
        type === NAV_CONST.allplain)
    ) {
      pug =
        indent(n, true) +
        "li" +
        (type !== NAV_CONST.allplain ? ".dropdown" : "") +
        indent(n + 2, true) +
        this.getParentAnchor(entry as IStructureNode, type) +
        indent(n + 2, true) +
        `ul`;
      for (const child of entry.children) {
        pug += this.writeNavigationEntry(child, n + 4, type);
      }
    } else {
      if (type === NAV_CONST.allplain || entry.navigation !== NAV_CONST.none) {
        const sn = entry as IStructureNode;
        pug =
          indent(n, true) + (sn.isExternal
            ? "li"
            : `li(class=(reference === "${
                sn.reference
              }" ? "active" : undefined))`) +
              indent(n + 2, true) +
              `a(href="${sn.reference}${
                sn.isExternal ? "" : this.fileExtension
              }") ` +
              entry.title;
      }
    }
    return pug;
  }

  private getParentAnchor(entry: IStructureNode, type: string): any {
    let container: string;
    if (type !== NAV_CONST.allplain) {
      container = 'a(href="#") ';
    } else if (entry.reference) {
      const link = entry.reference + (entry.isExternal ? "" : this.fileExtension);
      container = `a(href="${link}") `;
    } else {
      container = "div ";
    }

    return container + entry.title;
  }

  private renderBreadcrumb(breadcrumb: IBreadcrumbNode[]): string {
    let pug: string = `ol.breadcrumb(itemprop="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList")`;
    for (let i: number = 0; i < breadcrumb.length; i++) {
      const bc: IBreadcrumbNode = breadcrumb[i];
      if (i === breadcrumb.length - 1) {
        pug += indent(2, true) + `li${i === breadcrumb.length - 1 ? ".active" : ""}(itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem")`
            + indent(4, true) + `span(itemprop="name") ${bc.title}`
            + indent(4, true) + `meta(itemprop="position" content="${i + 1}")`;
      } else {
        const reference = isNullOrEmpty(bc.reference) ? "#" : bc.reference + this.fileExtension;
        pug += indent(2, true) + `li(itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem")`
            + indent(4, true) + `a(itemprop="item" href="${reference}")`
            + indent(6, true) + `span(itemprop="name") ${bc.title}`
            + indent(6, true) + `meta(itemprop="position" content="${i + 1}")`;
      }
    }
    return pug;
  }

  private initBreadcrumbs(
    node: INavigationNode,
    path: IBreadcrumbNode[],
  ): void {
    const fork: IBreadcrumbNode[] = [...path];
    const sn: IStructureNode = node as IStructureNode;

    if (sn.reference !== this.breadcrumbStartNode.reference) {
      fork.push({
        reference: sn.isExternal ? null : sn.reference,
        title: node.title,
      });
    }

    this.breadcrumbs[sn.reference] = fork;

    const branch: IBranch = node as IBranch;
    if (branch.children) {
      for (const child of branch.children) {
        this.initBreadcrumbs(child, fork);
      }
    }
  }
}
