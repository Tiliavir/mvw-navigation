import { NavigationType } from "../NavigationType";

export interface INavigationNode {
  title: string;
  /**
   * Values can be any string. Special treatment for:
   * - "none" : excluded from all navigations except "allplain"
   * - "top" : default top navigation
   */
  navigation?: NavigationType | "none";
}
