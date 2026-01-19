export const addedFormSelectOptions = [
  {
    id: "webstiteGoal",
    title:
      "What would be the main goal of your website? Do you intend for the website to only have the essential information or do you envision it growing with the municipality? *",
    content: [
      {
        id: "essentialMunicipalBusiness",
        value: "essentialMunicipalBusiness",
        label: "We will have essential municipal business only",
      },
      {
        id: "communityInformation",
        value: "communityInformation",
        label: "We will have a lot of community information on it",
      },
      {
        id: "touristInformation",
        value: "touristInformation",
        label:
          "We have a lot of tourists, and want to provide all the information to residents and tourists so they have a comfortable stay",
      },
      {
        id: "municipalGrowth",
        value: "municipalGrowth",
        label:
          "We are expecting municipal growth in the near future, and want our website to grow with us!",
      },
      {
        id: "departmentInformation",
        value: "departmentInformation",
        label:
          "We would like to continue having various department information, and optionally add more",
      },
      { id: "other", value: "other", label: "Other" },
    ],
  },

  {
    id: "addedFeature",
    title:
      "  If you have an existing website: are there technical programs or features it's lacking that you want in a new website? If yes, let us know in the third option. *",
    content: [
      {
        id: "noWebsite",
        value: "noWebsite",
        label: "We don't have a website",
      },
      {
        id: "noFeatureNedded",
        value: "noFeatureNedded",
        label: "No, this one has all the features we need",
      },
      {
        id: "other",
        value: "other",
        label: "Other",
      },
    ],
  },

  {
    id: "includeOnlinePayment",
    title:
      "We get asked about processing online payments the most, so naturally we developed a module for it! Are you looking to implement online payments? *",
    content: [
      {
        id: "includePayment",
        value: "includePayment",
        label: "Yes, absolutely, that would be great",
      },
      {
        id: "copyPayment",
        value: "copyPayment",
        label: "Yes, but we already have a solution for that",
      },
      {
        id: "noPayment",
        value: "noPayment",
        label: "No, we prefer handling in-person payments",
      },
    ],
  },

  {
    id: "digitizeForms",
    title: `Another frequent request we get is: "Can you digitize our forms and enable residents to fill them and submit them online?" Are you looking for that digital ability for your local government? *`,
    content: [
      {
        id: "usePDF",
        value: "usePDF",
        label:
          "No, if we can just put PDFs on our website, that is more than enough",
      },
      {
        id: "copyPayment",
        value: "copyPayment",
        label:
          "Yes, we'd like to digitize our forms/licenses/permits",
      },
    ],
  },

  {
    id: "includeFacilityBooking",
    title: `Do you rent any facilities (parks, municipal buildings, etc.) - and would you like your residents to book them online? *`,
    content: [
      {
        id: "includeBooking",
        value: "includeBooking",
        label: "Yes, that sounds awesome!",
      },
      {
        id: "satisfiedWithBookingService",
        value: "satisfiedWithBookingService",
        label: "We do, but we prefer to keeping it the way it is",
      },
      {
        id: "noFacilityAvailableToBook",
        value: "noFacilityAvailableToBook",
        label: "No, we do not rent any facilities out",
      },
    ],
  },

  {
    id: "requirementForUnlimitedSupport",
    title: `Maintaining and managing Town Web website is rather easy but there is a slight learning curve. What would you require from our unlimited support? *
`,
    content: [
      {
        id: "manageContentButTechAssistanceRequired",
        value: "manageContentButTechAssistanceRequired",
        label:
          "We are pretty tech-savvy - we can handle managing the website content on our own, but would require your training and help with techy stuff!",
      },
      {
        id: "assistanceRequired",
        value: "assistanceRequired",
        label:
          "We get very busy sometimes and would appreciate it if you could handle our tasks every once in a while",
      },
      {
        id: "publicInformationOfficer",
        value: "publicInformationOfficer",
        label:
          "We'd like you to be our Public Information Officer - available whenever we email or call",
      },
    ],
  },
];

export type MunicipalitiesData = {
  id: string;
  option: string;
  value: string;
};
export const municipalitiesData: MunicipalitiesData[] = [
  {
    id: "municipality1",
    option: "Municipality 1",
    value: "Alias 1",
  },
  {
    id: "municipality2",
    option: "Municipality 2",
    value: "Alias 2",
  },
  {
    id: "municipality3",
    option: "Municipality 3",
    value: "Alias 3",
  },
];
