import { Validator, ValidatorResult } from "jsonschema";
import { render } from "pug";
import { SiteStructureSchema } from "./site-structure-schema";
import { isNullOrUndefined, isNullOrEmpty, indent } from "./util";

const NAV_CONST: {none: string, top: string, allplain: string} = {
  // dont show in navigation at all
  none: "none",
  // default top navigation
  top: "top",
  // e.g. for sitemaps
  allplain: "allplain"
};

export interface INavigationNode {
  referencedFile: string;
  title: string;
}

interface IBranch extends INavigationNode {
  children: IBranch[];
}

interface IStructureNode extends INavigationNode {
  navigation: NavigationType | "none";
  children: IStructureNode[];
}

export type NavigationType = string | "allplain" | "top";

export class Navigation {
  private structure: IStructureNode[];
  private breadcrumbs: { [referencedFile: string]: INavigationNode[] };

  public constructor(s: any,
                     private fileExtension: string = "html",
                     private breadcrumbStartNode: INavigationNode = { title: "Start", referencedFile: "index" }) {
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

  private writeNavigationEntry(entry: IStructureNode, n: number, type: NavigationType): string {
    let pug: string = "";
    if (!isNullOrUndefined(entry)
      && entry.children
      && (entry.children.filter((e): boolean => { return e.navigation !== NAV_CONST.none; }).length > 0
        || type === NAV_CONST.allplain)) {
      pug = indent(n, true)
        + "li"
        + (type !== NAV_CONST.allplain
          ? ".dropdown"
          : "")
        + indent(n + 2, true) + (type !== NAV_CONST.allplain
          ? "a(href=\"#\") "
          : (entry.referencedFile
            ? `a(href="${entry.referencedFile}${this.fileExtension}") `
            : "div "))
        + entry.title
        + indent(n + 2, true)
        + `ul`;
      for (let i: number = 0; i < entry.children.length; i++) {
        pug += this.writeNavigationEntry(entry.children[i], n + 4, type);
      }
    } else {
      if (type === NAV_CONST.allplain || entry.navigation !== NAV_CONST.none) {
        pug = indent(n, true) + `li(class=(referencedFile === "${entry.referencedFile}" ? "active" : undefined))`
            + indent(n + 2, true) + `a(href="${entry.referencedFile}${this.fileExtension}") `
            + entry.title;
      }
    }
    return pug;
  }

  private renderBreadcrumb(breadcrumb: INavigationNode[]): string {
    let pug: string = `ol.breadcrumb(itemprop="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList")`;
    for (let i: number = 0; i < breadcrumb.length; i++) {
      let bc: INavigationNode = breadcrumb[i];
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

  private initBreadcrumbs(branch: IBranch, path: INavigationNode[]): void {
    let fork: INavigationNode[] = [...path];

    if(branch.referencedFile != this.breadcrumbStartNode.referencedFile) {
      fork.push({
        title: branch.title,
        referencedFile: branch.referencedFile
      });
    }

    this.breadcrumbs[branch.referencedFile] = fork;

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
        if ((node.navigation || NAV_CONST.top) === type
          || (type === NAV_CONST.allplain
             && excludedFromAllPlain.indexOf(node.referencedFile) < 0)) {
          pug += this.writeNavigationEntry(node, 2, type);
        }
      }
    }

    return writeHtml ? render(pug) : pug;
  }

  public getBreadcrumb(referencedFile: string, writeHtml: boolean = false): string {
    let bc: INavigationNode[] = this.breadcrumbs[referencedFile];
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
