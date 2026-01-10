export const mainGoalForSite = [
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
