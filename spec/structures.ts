export let StructureComplexFileNames: string[] = ["index", "dolor", "neo", "amet", "sadipsicng", "sed", "nonumy", "tempor", "invidunt", "aliquyam", "erat", "voluptua", "eos-et-accusamus", "iusto dignissimos", "corrupti-quos-dolores", "voluptatibus", "denounce", "molestias-excepturi", "quibusdam", "rerum", "sapiente", "foo_1-recusandae", "bar_2-impedit-quo-minus-id", "baz_3-rerum-hic", "404", "401"];

export const StructureSimple: any = [
    {
        title: "Foo",
        reference: "foo"
    },
    {
        title: "Bar",
        reference: "bar"
    }
];

export const StructureWithExternal: any = [
  {
      title: "Foo",
      reference: "foo"
  },
  {
      title: "Bar",
      reference: "http://www.google.com/",
      isExternal: true
  }
];

export const StructureComplex: any = [
  {
    "reference": "index",
    "navigation": "none",
    "title": "Lorem Impsum"
  },
  {
    "reference": "dolor",
    "title": "Dolor Sit"
  },
  {
    "reference": "neo",
    "title": "Neo"
  },
  {
    "children": [
      {
        "reference": "amet",
        "title": "Amet Consetetur"
      },
      {
        "reference": "sadipsicng",
        "title": "Sadipscing Elitr"
      },
      {
        "reference": "sed",
        "title": "Sed Diam"
      },
      {
        "reference": "nonumy",
        "title": "Nonumy Eirmod"
      },
      {
        "reference": "tempor",
        "title": "Tempor"
      },
      {
        "reference": "invidunt",
        "title": "Invidunt ut Labore"
      }
    ],
    "title": "Dolore Magna"
  },
  {
    "children": [
      {
        "reference": "aliquyam",
        "title": "Aliquyam"
      },
      {
        "reference": "erat",
        "title": "Erat Set Diam"
      },
      {
        "reference": "voluptua",
        "title": "Voluptua"
      }
    ],
    "title": "At vero"
  },
  {
    "reference": "eos-et-accusamus",
    "title": "Eos et Accusamus"
  },
  {
    "reference": "iusto dignissimos",
    "title": "Iusto Dignissimos"
  },
  {
    "reference": "corrupti-quos-dolores",
    "title": "Corrupti quos Dolores"
  },
  {
    "children": [
      {
        "reference": "voluptatibus",
        "navigation": "none",
        "title": "Voluptatibus"
      },
      {
        "reference": "denounce",
        "navigation": "none",
        "title": "Denounce"
      },
      {
        "reference": "molestias-excepturi",
        "navigation": "none",
        "title": "Molestias Excepturi"
      }
    ],
    "reference": "quibusdam",
    "navigation": "footer",
    "title": "Quibusdam"
  },
  {
    "title": "Rerum",
    "reference": "rerum",
    "navigation": "footer"
  },
  {
    "title": "Sapiente",
    "reference": "sapiente",
    "navigation": "footer"
  },
  {
    "children": [
      {
        "reference": "foo_1-recusandae",
        "navigation": "none",
        "title": "Recusandae"
      },
      {
        "reference": "bar_2-impedit-quo-minus-id",
        "navigation": "none",
        "title": "Impedit quo minus id"
      },
      {
        "reference": "baz_3-rerum-hic",
        "navigation": "none",
        "title": "Rerum Hic"
      }
    ],
    "navigation": "none",
    "title": "Earum"
  },
  {
    "reference": "404",
    "navigation": "none",
    "title": "Page not found!"
  },
  {
    "reference": "401",
    "navigation": "none",
    "title": "Unauthorized!"
  }
]
