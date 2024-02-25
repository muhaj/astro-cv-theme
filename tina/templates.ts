import type { TinaField } from "tinacms";
export function cvFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "name",
      label: "Name",
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "function",
      label: "Function",
    },
    {
      type: "string",
      name: "address",
      label: "Address",
    },
    {
      type: "string",
      name: "email",
      label: "E-mail",
    },
    {
      type: "string",
      name: "telephone",
      label: "Telephone",
    },
    {
      type: "object",
      name: "skills",
      label: "Skills",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "number",
          name: "percentage",
          label: "Percentage",
        },
      ],
    },
    {
      type: "object",
      name: "languages",
      label: "Languages",
      list: true,
      fields: [
        {
          type: "string",
          name: "language",
          label: "Language",
        },
        {
          type: "number",
          name: "percentage",
          label: "Percentage",
        },
      ],
    },
    {
      type: "object",
      name: "experiences",
      label: "Work Experience",
      list: true,
      fields: [
        {
          type: "string",
          name: "experience",
          label: "Experience",
        },
        {
          type: "string",
          name: "period",
          label: "Period",
        },
        {
          type: "boolean",
          name: "current",
          label: "Current",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "educations",
      label: "Educations",
      list: true,
      fields: [
        {
          type: "string",
          name: "education",
          label: "Education",
        },
        {
          type: "string",
          name: "period",
          label: "Period",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "social",
      label: "Social",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "icon",
          label: "Icon",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
  ] as TinaField[];
}
