﻿export const SiteStructureSchema: any = {
  "$schema": "http://json-schema.org/draft-04/schema",
  "title": "JSON Schema for the site structure file",
  "description": "Array of (child) elements in the site structure tree.",

  "type": "array",
  "items": {
    "oneOf": [
      {
        "$ref": "#/definitions/group"
      },
      {
        "$ref": "#/definitions/entry"
      }
    ]
  },
  "definitions": {
    "group": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "title": {
          "type": "string",
          "description": "The title of the menu entry and url path."
        },
        "navigation": {
          "$ref": "#/definitions/navigationType"
        },
        "children": {
          "$ref": "#"
        }
      },
      "required": [
        "title",
        "children"
      ]
    },
    "entry": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "title": {
          "type": "string",
          "description": "The title of the menu entry and url path."
        },
        "navigation": {
          "$ref": "#/definitions/navigationType"
        },
        "referencedFile": {
          "type": "string",
          "description": "Name of the partial file."
        },
        "children": {
          "$ref": "#"
        }
      },
      "required": [
        "title",
        "referencedFile"
      ]
    },
    "navigationType": {
      "enum": [
        "top",
        "footer",
        "none"
      ],
      "description": "Whether the entry is visible in the navigation."
    }
  }
};
