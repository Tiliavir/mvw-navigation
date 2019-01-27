import { EOL } from "os";

export const isNullOrUndefined: (o: any) => boolean = (o: any): boolean => {
  return o === null || o === undefined;
};

export const isNullOrEmpty: (o: any) => boolean = (o: any): boolean => {
  return isNullOrUndefined(o) || o.length === 0;
};

export const indent: (level: number, addNewline?: boolean) => string = (
  level: number,
  addNewline: boolean = false,
): string => {
  return (
    (addNewline ? EOL : "") + new Array(level < 0 ? 0 : level + 1).join(" ")
  );
};
