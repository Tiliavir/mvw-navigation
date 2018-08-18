import { Validator, ValidatorResult } from "jsonschema";
import { render } from "pug";
import { isNullOrUndefined, isNullOrEmpty, indent } from "./util";

const SiteStructureSchema: any = require("./site-structure-schema");

const NAV_CONST: {none: string, top: string, allplain: string} = {
  // dont show in navigation at all
  none: "none",
  // default top navigation
  top: "top",
  // e.g. for sitemaps
  allplain: "allplain"
};

export interface IBreadcrumbNode {
  referencedFile: string;
  title: string;
}

interface INavigationNode {
  title: string;
  /**
   * Values can be any string. Special treatment for:
   * - "none" : excluded from all navigations except "allplain"
   * - "top" : default top navigation
   */
  navigation?: NavigationType | "none";
}

export interface IBranch extends INavigationNode {
  children: ConfigNode[];
}

export interface IStructureNode extends INavigationNode {
  children?: ConfigNode[];
  referencedFile: string;
}

type ConfigNode = IStructureNode | IBranch;

/**
 * Array of (child) elements in the site structure tree.
 */
export type StructureConfig = ConfigNode[];

export type NavigationType = string | "allplain" | "top";

export class Navigation {
  private structure: StructureConfig;
  private breadcrumbs: { [referencedFile: string]: IBreadcrumbNode[] };

  public constructor(s: any,
                     private fileExtension: string = "html",
                     private breadcrumbStartNode: IBreadcrumbNode = { title: "Start", referencedFile: "index" }) {
    if (isNullOrEmpty(s)) {
      console.warn("Empty structure provided!");
      s = [];
    }

    if (!isNullOrEmpty(fileExtension)) {
      this.fileExtension = `.${fileExtension}`;
    }

    let validationResult: ValidatorResult = new Validator().validate(s, SiteStructureSchema);
    if (!validationResult.valid) {
      console.error(validationResult);
      throw {
        name: "InvalidArgument",
        message: "Invalid structure provided!"
      };
    }

    this.structure = s;
    this.breadcrumbs = {};
    for (let i: number = 0; i < this.structure.length; i++) {
      this.initBreadcrumbs(this.structure[i], [breadcrumbStartNode]);
    }
  }

  private writeNavigationEntry(entry: ConfigNode, n: number, type: NavigationType): string {
    let pug: string = "";
    if (!isNullOrUndefined(entry)
      && entry.children
      && (entry.children.filter((e): boolean => e.navigation !== NAV_CONST.none).length > 0
        || type === NAV_CONST.allplain)) {
      pug = indent(n, true)
        + "li"
        + (type !== NAV_CONST.allplain
          ? ".dropdown"
          : "")
        + indent(n + 2, true) + (type !== NAV_CONST.allplain
          ? "a(href=\"#\") "
          : ((entry as IStructureNode).referencedFile
            ? `a(href="${(entry as IStructureNode).referencedFile}${this.fileExtension}") `
            : "div "))
        + entry.title
        + indent(n + 2, true)
        + `ul`;
      for (let i: number = 0; i < entry.children.length; i++) {
        pug += this.writeNavigationEntry(entry.children[i], n + 4, type);
      }
    } else {
      if (type === NAV_CONST.allplain || entry.navigation !== NAV_CONST.none) {
        pug = indent(n, true) + `li(class=(referencedFile === "${(entry as IStructureNode).referencedFile}" ? "active" : undefined))`
            + indent(n + 2, true) + `a(href="${(entry as IStructureNode).referencedFile}${this.fileExtension}") `
            + entry.title;
      }
    }
    return pug;
  }

  private renderBreadcrumb(breadcrumb: IBreadcrumbNode[]): string {
    let pug: string = `ol.breadcrumb(itemprop="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList")`;
    for (let i: number = 0; i < breadcrumb.length; i++) {
      let bc: IBreadcrumbNode = breadcrumb[i];
      if (isNullOrEmpty(bc.referencedFile) || i === breadcrumb.length - 1) {
        pug += indent(2, true) + `li${((i === breadcrumb.length - 1) ? ".active" : "")}(itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem")`
            + indent(4, true) + `span(itemprop="name") ${bc.title}`
            + indent(4, true) + `meta(itemprop="position" content="${i + 1}")`;
      } else {
        pug += indent(2, true) + `li(itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem")`
            + indent(4, true) + `a(itemprop="item" href="${bc.referencedFile}${this.fileExtension}")`
            + indent(6, true) + `span(itemprop="name") ${bc.title}`
            + indent(6, true) + `meta(itemprop="position" content="${i + 1}")`;
      }
    }
    return pug;
  }

  private initBreadcrumbs(node: INavigationNode, path: IBreadcrumbNode[]): void {
    let fork: IBreadcrumbNode[] = [...path];

    if((node as IStructureNode).referencedFile != this.breadcrumbStartNode.referencedFile) {
      fork.push({
        title: node.title,
        referencedFile: (node as IStructureNode).referencedFile
      });
    }

    this.breadcrumbs[(node as IStructureNode).referencedFile] = fork;

    let branch: IBranch = node as IBranch;
    if (branch.children) {
      for (let child of branch.children) {
        this.initBreadcrumbs(child, fork);
      }
    }
  }

  public writeNavigation(type: NavigationType,
                         writeHtml: boolean = false,
                         excludedFromAllPlain: string[] = ["401", "404"]): string {
    let pug: string = "ul";

    if (!isNullOrUndefined(this.structure) && this.structure.length > 0) {
      for (let node of this.structure) {
        if (((node as IStructureNode).navigation || NAV_CONST.top) === type
          || (type === NAV_CONST.allplain
             && excludedFromAllPlain.indexOf((node as IStructureNode).referencedFile) < 0)) {
          pug += this.writeNavigationEntry(node, 2, type);
        }
      }
    }

    return writeHtml ? render(pug) : pug;
  }

  public getBreadcrumb(referencedFile: string, writeHtml: boolean = false): string {
    let bc: IBreadcrumbNode[] = this.breadcrumbs[referencedFile];
    if (!bc) {
      throw {
        name: "ElementNotFound",
        message: "Missing in site-structure: " + referencedFile
      };
    }

    let pug: string = this.renderBreadcrumb(bc);
    return writeHtml ? render(pug) : pug;
  }
}
