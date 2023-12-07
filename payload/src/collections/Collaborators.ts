import { CollectionConfig } from "payload/types";

const Collaborators: CollectionConfig = {
  slug: "collaborators",
  fields: [
    {
      name: "palette",
      type: "relationship",
      relationTo: "palettes",
      hasMany: false,
      required: true,
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      required: true,
    },
    {
      name: "access",
      type: "select",
      options: [
        {
          label: "View",
          value: "view",
        },
        {
          label: "Edit",
          value: "edit",
        },
      ],
      defaultValue: "view",
      hasMany: false,
    },
  ],
};

export default Collaborators;
