import { ConfigNode } from "./ConfigNode";
import { INavigationNode } from "./INavigationNode";
export interface IBranch extends INavigationNode {
    children: ConfigNode[];
}
