import type { Department } from "@/data/general";

export type EmployeesData = Array<{
  name: string;
  id: string;
  imgUrl: string;
  dept: Array<Department>;
  quote?: string;
}>;

export type QuoteFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  municipalName: string;
  durationForBuild: string;
  webstiteGoal: string;
  addedFeature: string;
  includeOnlinePayment: string;
  digitizeForms: string;
  includeFacilityBooking: string;
  requirementForUnlimitedSupport: string;
  yearExpected: null | number;
  quarterExpected: null | number;
};

export type SupportFormValues = {
  fullName: string;
  municipalityName: string;
  municipalityWebAddress: string;
  email: string;
  supportQuestion: string;
  uploadedFile: File | null;
  phoneNumber: string;
};

export type Testimonials = {
  summary: string;
  comment: string;
  jobTitle: string;
  name: string;
  location: string;
  logoUrl: string;
};
