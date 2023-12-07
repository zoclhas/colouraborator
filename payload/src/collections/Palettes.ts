import { CollectionConfig } from "payload/types";

const Palettes: CollectionConfig = {
  slug: "palettes",
  admin: {
    useAsTitle: "palette_name",
  },
  fields: [
    {
      name: "owner",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      required: true,
    },
    {
      name: "palette_name",
      label: "Palette Name",
      type: "text",
      required: true,
    },
    {
      name: "palette_description",
      label: "Palette Description",
      type: "textarea",
      required: true,
    },
    {
      name: "palette",
      type: "group",
      fields: [
        {
          name: "p_25",
          type: "text",
          required: true,
        },
        {
          name: "p_50",
          type: "text",
          required: true,
        },
        {
          name: "p_100",
          type: "text",
          required: true,
        },
        {
          name: "p_200",
          type: "text",
          required: true,
        },
        {
          name: "p_300",
          type: "text",
          required: true,
        },
        {
          name: "p_400",
          type: "text",
          required: true,
        },
        {
          name: "p_500",
          type: "text",
          required: true,
        },
        {
          name: "p_600",
          type: "text",
          required: true,
        },
        {
          name: "p_700",
          type: "text",
          required: true,
        },
        {
          name: "p_800",
          type: "text",
          required: true,
        },
        {
          name: "p_900",
          type: "text",
          required: true,
        },
        {
          name: "p_950",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "visibility",
      label: "private",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "collaborators",
      type: "relationship",
      relationTo: "collaborators",
    },
  ],
};

export default Palettes;
