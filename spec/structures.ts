export let StructureComplexFileNames: string[] = ["index", "dolor", "neo", "amet", "sadipsicng", "sed", "nonumy", "tempor", "invidunt", "aliquyam", "erat", "voluptua", "eos-et-accusamus", "iusto dignissimos", "corrupti-quos-dolores", "voluptatibus", "denounce", "molestias-excepturi", "quibusdam", "rerum", "sapiente", "foo_1-recusandae", "bar_2-impedit-quo-minus-id", "baz_3-rerum-hic", "404", "401"];

export const StructureSimple: any = [
    {
        title: "Foo",
        referencedFile: "foo"
    },
    {
        title: "Bar",
        referencedFile: "bar"
    }
];

export const StructureComplex: any =[
  {
    "referencedFile": "index",
    "navigation": "none",
    "title": "Lorem Impsum"
  },
  {
    "referencedFile": "dolor",
    "title": "Dolor Sit"
  },
  {
    "referencedFile": "neo",
    "title": "Neo"
  },
  {
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
    ],
    "title": "Dolore Magna"
  },
  {
    "children": [
      {
        "referencedFile": "aliquyam",
        "title": "Aliquyam"
      },
      {
        "referencedFile": "erat",
        "title": "Erat Set Diam"
      },
      {
        "referencedFile": "voluptua",
        "title": "Voluptua"
      }
    ],
    "title": "At vero"
  },
  {
    "referencedFile": "eos-et-accusamus",
    "title": "Eos et Accusamus"
  },
  {
    "referencedFile": "iusto dignissimos",
    "title": "Iusto Dignissimos"
  },
  {
    "referencedFile": "corrupti-quos-dolores",
    "title": "Corrupti quos Dolores"
  },
  {
    "children": [
      {
        "referencedFile": "voluptatibus",
        "navigation": "none",
        "title": "Voluptatibus"
      },
      {
        "referencedFile": "denounce",
        "navigation": "none",
        "title": "Denounce"
      },
      {
        "referencedFile": "molestias-excepturi",
        "navigation": "none",
        "title": "Molestias Excepturi"
      }
    ],
    "referencedFile": "quibusdam",
    "navigation": "footer",
    "title": "Quibusdam"
  },
  {
    "title": "Rerum",
    "referencedFile": "rerum",
    "navigation": "footer"
  },
  {
    "title": "Sapiente",
    "referencedFile": "sapiente",
    "navigation": "footer"
  },
  {
    "children": [
      {
        "referencedFile": "foo_1-recusandae",
        "navigation": "none",
        "title": "Recusandae"
      },
      {
        "referencedFile": "bar_2-impedit-quo-minus-id",
        "navigation": "none",
        "title": "Impedit quo minus id"
      },
      {
        "referencedFile": "baz_3-rerum-hic",
        "navigation": "none",
        "title": "Rerum Hic"
      }
    ],
    "navigation": "none",
    "title": "Earum"
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
