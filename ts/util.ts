import { EOL } from "os";

export const isNullOrUndefined: (o: any) => boolean = (o: any): boolean => {
  return o == null && o == undefined;
};

export const isNullOrEmpty: (o: any) => boolean = (o: any): boolean => {
  return isNullOrUndefined(o) || o.length === 0;
};

export const indent: (indent: number, addNewline?: boolean) => string = (indent: number, addNewline: boolean = false): string => {
  return (addNewline ? EOL : "") + new Array(indent < 0 ? 0 : indent + 1).join(" ");
};
