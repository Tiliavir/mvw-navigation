import { ConfigNode } from "./ConfigNode";
import { INavigationNode } from "./INavigationNode";

export interface IStructureNode extends INavigationNode {
  children?: ConfigNode[];
  reference: string;
  isExternal?: boolean;
}
