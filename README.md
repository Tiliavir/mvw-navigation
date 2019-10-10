# MVW Navigation

[![Build Status](https://travis-ci.com/Tiliavir/mvw-navigation.svg?branch=master)](https://travis-ci.com/tiliavir/mvw-navigation)
[![NPM version](https://img.shields.io/npm/v/mvw-navigation.svg?style=flat)](https://www.npmjs.com/package/mvw-navigation)

## Description
This small module can be used to create an HTML navigation from a given JSON file
containing the structure of the site. It also supports the generation of
multiple independent navigation structures, like e.g. a left navigation, a
main navigation and a footer navigation.

The output can either be plain HTML or pug.

## Example
### Sample structure json

```json
[
  {
    "referencedFile": "index",
    "navigation": "none",
    "title": "Welcome"
  },
  {
    "referencedFile": "about",
    "title": "About us"
  },
  {
    "referencedFile": "news",
    "title": "News"
  },
  {
    "title": "Our Products",
    "children": [
      {
        "referencedFile": "amet",
        "title": "Amet Consetetur"
      },
      {
        "referencedFile": "sadipsicng",
        "title": "Sadipscing Elitr"
      },
      {
        "referencedFile": "sed",
        "title": "Sed Diam"
      },
      {
        "referencedFile": "nonumy",
        "title": "Nonumy Eirmod"
      },
      {
        "referencedFile": "tempor",
        "title": "Tempor"
      },
      {
        "referencedFile": "invidunt",
        "title": "Invidunt ut Labore"
      }
    ]
  },
  {
    "referencedFile": "site-notice",
    "navigation": "footer",
    "title": "Site Notice",
    "children": [
      {
        "referencedFile": "legal",
        "navigation": "none",
        "title": "Legal"
      },
      {
        "referencedFile": "privacy",
        "navigation": "none",
        "title": "Privacy"
      },
      {
        "referencedFile": "sitemap",
        "navigation": "none",
        "title": "Sitemap"
      }
    ]
  },
  {
    "title": "Contact us",
    "referencedFile": "contact",
    "navigation": "footer"
  },
  {
    "title": "Search",
    "referencedFile": "search",
    "navigation": "footer"
  },
  {
    "referencedFile": "404",
    "navigation": "none",
    "title": "Page not found!"
  },
  {
    "referencedFile": "401",
    "navigation": "none",
    "title": "Unauthorized!"
  }
]
```

### Node Sample
```typescript
import { Navigation } from "mvw-navigation";

let navigation: Navigation = new Navigation(structure);

let all: string = navigation.writeNavigation("allplain");
let top: string = navigation.writeNavigation("top");
let footer: string = navigation.writeNavigation("footer");

navigation.getBreadcrumb("<filename>", true /* true for html, false for pug*/);
```

## Releases
- **3.0.0**: added `isExternal` and renamed `referencedFile` to `reference`
- **2.1.0**: Changed generation of schema json
- **2.0.2** - **2.0.13**: dependency update
- **2.0.1**: dependency update, new test
- **2.0.0**: bootstrap independent

- **1.0.4**: dependency update
- **1.0.3**: fixed breadcrumbs - last one now has class 'active', dependency update
- **1.0.2**: added .npmignore
