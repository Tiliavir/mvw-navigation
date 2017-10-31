export interface INavigationNode {
    referencedFile: string;
    title: string;
}
export declare type NavigationType = string | "allplain" | "top";
export declare class Navigation {
    private fileExtension;
    private breadcrumbStartNode;
    private structure;
    private breadcrumbs;
    constructor(s: any, fileExtension?: string, breadcrumbStartNode?: INavigationNode);
    private writeNavigationEntry(entry, n, type);
    private renderBreadcrumb(breadcrumb);
    private initBreadcrumbs(branch, path);
    writeNavigation(type: NavigationType, writeHtml?: boolean, excludedFromAllPlain?: string[]): string;
    getBreadcrumb(referencedFile: string, writeHtml?: boolean): string;
}
