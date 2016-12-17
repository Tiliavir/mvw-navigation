import { Navigation } from "../ts/index";
import { StructureSimple, StructureComplex, StructureComplexFileNames } from "./structures";
import { navAll, navBreadcrumbs, navFooter, navTop } from "./results";

describe("Navigation: test writeNavigation", () => {
    it("null init", () => {
        var obj: any;
        let navigation: Navigation = new Navigation(obj, null);

        let pug: string = navigation.writeNavigation("allplain");
        expect(pug).toEqual("ul");

        let html: string = navigation.writeNavigation("allplain", true);
        expect(html).toEqual("<ul></ul>");
    });

    it("Navigation: simple structure", () => {
        let navigation: Navigation = new Navigation(StructureSimple);

        let pug: string = navigation.writeNavigation("allplain");
        expect(pug.replace(/\r\n/g, "\n")).toEqual(`ul
  li(class=(referencedFile === 'foo' ? 'active' : undefined))
    a(href='foo.html') Foo
  li(class=(referencedFile === 'bar' ? 'active' : undefined))
    a(href='bar.html') Bar`);

        let html: string = navigation.writeNavigation("allplain", true);
        expect(html).toEqual(`<ul><li><a href="foo.html">Foo</a></li><li><a href="bar.html">Bar</a></li></ul>`);
    });

    it("complex structure", () => {
        let navigation: Navigation = new Navigation(StructureComplex);

        let all: string = navigation.writeNavigation("allplain");
        let top: string = navigation.writeNavigation("top");
        let footer: string = navigation.writeNavigation("footer");

        let filenames: string[] = StructureComplexFileNames;
        let breadcrumbs: string[] = [];
        for (let filename of filenames) {
            breadcrumbs.push(navigation.getBreadcrumb(filename, true));
        }

        expect(all.replace(/\r\n/g, "\n")).toEqual(navAll);
        expect(top.replace(/\r\n/g, "\n")).toEqual(navTop);
        expect(footer.replace(/\r\n/g, "\n")).toEqual(navFooter);

        expect(breadcrumbs).toEqual(navBreadcrumbs);
    });
});

describe("Navigation: test getBreadcrumb", () => {
    it("unavailable breadcrumbs are throwing", () => {
        let navigation: Navigation = new Navigation([]);

        expect(navigation.getBreadcrumb).toThrow();
        expect(() => navigation.getBreadcrumb("index")).toThrow();
        expect(() => navigation.getBreadcrumb("notAvailable")).toThrow();
    });
    it("available breadcrumbs are as expected", () => {
        let navigation: Navigation = new Navigation([]);

        expect(navigation.getBreadcrumb).toThrow();
        expect(() => navigation.getBreadcrumb("index")).toThrow();
        expect(() => navigation.getBreadcrumb("notAvailable")).toThrow();
    });
});