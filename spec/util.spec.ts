import { isNullOrUndefined, isNullOrEmpty, indent } from "../ts/util";
import { EOL } from "os";

describe("util: test isNullOrUndefined(o: any): boolean", () => {
    it("isNullOrUndefined(undefined) returns true", () => {
        let undefinedVariable: undefined;
        expect(isNullOrUndefined(undefinedVariable)).toBeTruthy();
    });
    it("isNullOrUndefined(null) returns true", () => expect(isNullOrUndefined(null)).toBeTruthy());
    it("isNullOrUndefined('') returns false", () => expect(isNullOrUndefined("")).toBeFalsy());
    it("isNullOrUndefined([]) returns false", () => expect(isNullOrUndefined([])).toBeFalsy());
    it("isNullOrUndefined({}) returns false", () => expect(isNullOrUndefined({})).toBeFalsy());
    it("isNullOrUndefined(['x']) returns false", () => expect(isNullOrUndefined(["x"])).toBeFalsy());
    it("isNullOrUndefined([0]) returns false", () => expect(isNullOrUndefined([0])).toBeFalsy());
    it("isNullOrUndefined([{}, {}]) returns false", () => expect(isNullOrUndefined([{}, {}])).toBeFalsy());
    it("isNullOrUndefined(false) returns false", () => expect(isNullOrUndefined(false)).toBeFalsy());
    it("isNullOrUndefined(true) returns false", () => expect(isNullOrUndefined(true)).toBeFalsy());
});

describe("util: test isNullOrEmpty(o: any): boolean", () => {
    it("isNullOrEmpty(undefined) returns true", () => {
        let undefinedVariable: undefined;
        expect(isNullOrEmpty(undefinedVariable)).toBeTruthy();
    });
    it("isNullOrEmpty(null) returns true", () => expect(isNullOrEmpty(null)).toBeTruthy());
    it("isNullOrEmpty('') returns true", () => expect(isNullOrEmpty("")).toBeTruthy());
    it("isNullOrEmpty([]) returns true", () => expect(isNullOrEmpty([])).toBeTruthy());
    it("isNullOrEmpty(['x']) returns false", () => expect(isNullOrEmpty(["x"])).toBeFalsy());
    it("isNullOrEmpty([0]) returns false", () => expect(isNullOrEmpty([0])).toBeFalsy());
    it("isNullOrEmpty([{}, {}]) returns false", () => expect(isNullOrEmpty([{}, {}])).toBeFalsy());
});

describe("util: test indent(indent, newLine): boolean", () => {
    it("indent(0) returns ''", () => expect(indent(0)).toBe(""));
    it("indent(-1) returns ''", () => expect(indent(-1)).toBe(""));
    it("indent(1) returns ' '", () => expect(indent(1)).toBe(" "));

    it("indent(0, true) returns EOL", () => expect(indent(0, true)).toBe(EOL));
    it("indent(-1, true) returns EOL", () => expect(indent(-1, true)).toBe(EOL));
    it("indent(1, true) returns 'EOL '", () => expect(indent(1, true)).toBe(`${EOL} `));

    it("indent(0, false) returns ''", () => expect(indent(0, false)).toBe(""));
    it("indent(-1, false) returns ''", () => expect(indent(-1, false)).toBe(""));
    it("indent(1, false) returns ' '", () => expect(indent(1, false)).toBe(" "));
});
