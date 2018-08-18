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
declare type ConfigNode = IStructureNode | IBranch;
/**
 * Array of (child) elements in the site structure tree.
 */
export declare type StructureConfig = ConfigNode[];
export declare type NavigationType = string | "allplain" | "top";
export declare class Navigation {
    private fileExtension;
    private breadcrumbStartNode;
    private structure;
    private breadcrumbs;
    constructor(s: any, fileExtension?: string, breadcrumbStartNode?: IBreadcrumbNode);
    private writeNavigationEntry;
    private renderBreadcrumb;
    private initBreadcrumbs;
    writeNavigation(type: NavigationType, writeHtml?: boolean, excludedFromAllPlain?: string[]): string;
    getBreadcrumb(referencedFile: string, writeHtml?: boolean): string;
}
export {};
