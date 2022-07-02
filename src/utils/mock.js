const fields = [
  "Rubber Body- Cuts",
  "Supports - Bent",
  "Supports - Cut",
  "Supports - Corroded",
  "Fender panel - Deformation",
  "Fender panel - Corrosion",
  "Resin pad - Abrasion/Wear",
  "Resin pad - Cuts",
  "Resin pad - Missing",
  "Resin pad - Burns",
  "Mooring parts - Bent",
  "Morring parts - Cut",
  "Morring parts - Corroded",
];

export const FenderTypes = [
  {
    fenderType: "Leg & V-type fender",
    avialableCalculationFields: [
      "Rubber Body - Drop",
      "Rubber Body - Tear",
      "Rubber Body - Permanent deformation",
      "Rubber Body - Missing Ruber",
      "Rubber Body - Cracks",
      "Rubber Body - Chipping",
      "Rubber Body - Separation",
      "Rubber Body - Wear",
      "Rubber Body - Ozone cracks",
      "Rubber Body - Burns",
      "Rubber Body - Bolt hole damage",
      "Fixing",
    ],
  },
  {
    fenderType: "Rubber fender with panel",
    avialableCalculationFields: [
      "Rubber Body - Tear",
      "Rubber Body - Permanent deformation",
      "Rubber Body - Cracks",
      "Rubber Body - Separation",
      "Rubber Body - Ozone cracks",
      "Rubber Body - Burns",
      "Rubber Body - Bolt hole damage",
      "Fixing",
      "Supports",
      "Fender panel",
      "Resin pad",
    ],
  },
  {
    fenderType: "Cylindrical",
    avialableCalculationFields: [
      "Rubber Body - Drop",
      "Rubber Body - Tear",
      "Rubber Body - Missing Ruber",
      "Rubber Body - Cracks",
      "Rubber Body - Chipping",
      "Rubber Body - Wear",
      "Rubber Body - Ozone cracks",
      "Rubber Body - Burns",
      "Supports",
    ],
  },
];

export const calculationSections = [
  {
    sectionId: "Rubber Body - Drop",
    fields: [
      {
        id: 0,
        label: "Total damaged Area",
        value: "",
      },
      {
        id: 1,
        label: "Area of fender contacting force",
        value: "",
      },
    ],
  },
  {
    sectionId: "Rubber Body - Tear",
    fields: [
      {
        id: 0,
        label: "Total damage length",
        value: "",
      },
      {
        id: 1,
        label: "Length of fender contacting force",
        value: "",
      },
    ],
  },
  {
    sectionId: "Rubber Body - Permanent deformation",
    fields: [
      {
        id: 0,
        label: "Total damage length",
        value: "",
      },
      {
        id: 1,
        label: "Length of fender contacting force",
        value: "",
      },
    ],
  },
  {
    sectionId: "Rubber Body - Missing Ruber",
    fields: [
      {
        id: 0,
        label: "Total damaged area",
        value: "",
      },
      {
        id: 1,
        label: "Length of fender contacting force",
        value: "",
      },
    ],
  },
  {
    sectionId: "Rubber Body - Cracks",
    fields: [
      {
        id: 0,
        label: "Total damage length",
        value: "",
      },
      {
        id: 1,
        label: "Length of fender contacting force",
        value: "",
      },
    ],
  },
  {
    sectionId: "Rubber Body - Chipping",
    fields: [
      {
        id: 0,
        label: "Total damaged area",
        value: "",
      },
      {
        id: 1,
        label: "Length of fender contacting force",
        value: "",
      },
    ],
  },
  {
    sectionId: "Rubber Body - Separation",
    fields: [
      {
        id: 0,
        label: "Total seperated length",
        value: "",
      },
      {
        id: 1,
        label: "Length of fixing flange",
        value: "",
      },
    ],
  },
  {
    sectionId: "Rubber Body - Wear",
    fields: [
      {
        id: 0,
        label: "Total Damage Area",
        value: "",
      },
      {
        id: 1,
        label: "Area of fender contacting force",
        value: "",
      },
    ],
  },
  {
    sectionId: "Rubber Body - Ozone cracks",
    fields: [
      {
        id: 0,
        type: "radio",
        label: "Age",
        data: [
          {
            name: "Age 20 years or more",
            value: "1",
          },
          {
            name: "Age less than 20 years",
            value: "0",
          },
        ],
      },
    ],
  },
  {
    sectionId: "Rubber Body - Burns",
    fields: [
      {
        id: 0,
        label: "Total damage length",
        value: "",
      },
      {
        id: 1,
        label: "Length of fender contacting force",
        value: "",
      },
    ],
  },
  {
    sectionId: "Rubber Body - Bolt hole damage",
    fields: [
      {
        id: 0,
        type: "radio",
        label: "Judgement",
        data: [
          { name: "Re-installation not recommended", value: "6" },
          { name: "Re-installable", value: "0" },
        ],
      },
    ],
  },
  {
    sectionId: "Fixing",
    fields: [
      {
        id: 0,
        type: "dropDown",
        label: "Loose",
        data: [
          { name: "Yes", value: "Yes" },
          { name: "No", value: "No" },
        ],
      },
      {
        id: 1,
        type: "dropDown",
        label: "Missing",
        data: [
          { name: "Yes", value: "Yes" },
          { name: "No", value: "No" },
        ],
      },
      {
        id: 2,
        label: "Bend",
        type: "dropDown",
        data: [
          {
            name: "Major",
            value: "Major",
          },
          {
            name: "Minor",
            value: "Minor",
          },
          {
            name: "N/A",
            value: "N/A",
          },
        ],
      },
      {
        id: 3,
        label: "Cuts",
        type: "dropDown",
        data: [
          {
            name: "Major",
            value: "Major",
          },
          {
            name: "Minor",
            value: "Minor",
          },
          {
            name: "N/A",
            value: "N/A",
          },
        ],
      },
      {
        id: 4,
        type: "dropDown",
        label: "Corroision Condition",
        data: [
          {
            name: "No corrosion",
            value: "No corrosion",
          },
          {
            name: "Discoloration",
            value: "Discoloration",
          },
          {
            name: "Discoloration of bolt and red rust on washer",
            value: "Discoloration of bolt and red rust on washer",
          },
          {
            name: "Red rust",
            value: "Red rust",
          },
          {
            name: "Red rust swell",
            value: "Red rust swell",
          },
        ],
      },
    ],
  },
  {
    sectionId: "Fender panel",
    fields: [
      {
        id: 0,
        label: "Deformation",
        type: "dropDown",
        data: [
          {
            name: "Major",
            value: "Major",
          },
          {
            name: "Minor",
            value: "Minor",
          },
          {
            name: "No Deformation",
            value: "No Deformation",
          },
        ],
      },
    ],
  },
  {
    sectionId: "Supports",
    fields: [
      {
        id: 0,
        label: "Bend",
        type: "dropDown",
        data: [
          {
            name: "Major",
            value: "Major",
          },
          {
            name: "Minor",
            value: "Minor",
          },
          {
            name: "N/A",
            value: "N/A",
          },
        ],
      },
      {
        id: 1,
        label: "Cuts",
        type: "dropDown",
        data: [
          {
            name: "Major",
            value: "Major",
          },
          {
            name: "Minor",
            value: "Minor",
          },
          {
            name: "N/A",
            value: "N/A",
          },
        ],
      },
      {
        id: 2,
        type: "dropDown",
        label: "Corroision Condition",
        data: [
          {
            name: "No corrosion",
            value: "No corrosion",
          },
          {
            name: "Discoloration",
            value: "Discoloration",
          },
          {
            name: "Discoloration of bolt and red rust on washer",
            value: "Discoloration of bolt and red rust on washer",
          },
          {
            name: "Red rust",
            value: "Red rust",
          },
          {
            name: "Red rust swell",
            value: "Red rust swell",
          },
        ],
      },
    ],
  },
  {
    sectionId: "Resin pad",
    fields: [
      {
        id: 0,
        label: "Cuts",
        type: "dropDown",
        data: [
          {
            name: "Major",
            value: "Major",
          },
          {
            name: "Minor",
            value: "Minor",
          },
          {
            name: "N/A",
            value: "N/A",
          },
        ],
      },
      {
        id: 1,
        label: "Missing",
        type: "dropDown",
        data: [
          {
            name: "Yes",
            value: "Yes",
          },
          {
            name: "No",
            value: "No",
          },
        ],
      },
      {
        id: 2,
        label: "Burns",
        type: "dropDown",
        data: [
          {
            name: "Yes",
            value: "Yes",
          },
          {
            name: "No",
            value: "No",
          },
        ],
      },
      {
        id: 2,
        label: "Abrasion/Wear",
        type: "dropDown",
        data: [
          {
            name: "Major",
            value: "Major",
          },
          {
            name: "Minor",
            value: "Minor",
          },
          {
            name: "N/A",
            value: "N/A",
          },
        ],
      },
    ],
  },
];
