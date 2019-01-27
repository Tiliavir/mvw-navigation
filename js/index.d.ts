import { NavigationType } from "./NavigationType";
import { IBreadcrumbNode } from "./structure/IBreadcrumbNode";
export declare class Navigation {
    private fileExtension;
    private breadcrumbStartNode;
    private structure;
    private breadcrumbs;
    constructor(s: any, fileExtension?: string, breadcrumbStartNode?: IBreadcrumbNode);
    writeNavigation(type: NavigationType, writeHtml?: boolean, excludedFromAllPlain?: string[]): string;
    getBreadcrumb(reference: string, writeHtml?: boolean): string;
    private writeNavigationEntry;
    private getParentAnchor;
    private renderBreadcrumb;
    private initBreadcrumbs;
}
