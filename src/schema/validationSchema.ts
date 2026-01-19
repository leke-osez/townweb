import { isValidPhoneNumber } from "react-phone-number-input";
import * as Yup from "yup";

export const QuoteValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),

  phoneNumber: Yup.string()
    .required("Phone number is required")
    .test(
      "is-valid-phone",
      "Enter a valid US phone number",
      (value) => (value ? isValidPhoneNumber(value, "US") : false)
    ),
  municipalName: Yup.string().required("Enter Name of Municipality"),
});

export const SupportValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  municipalityName: Yup.string().required("Required"),
  municipalityWebAddress: Yup.string().required("Required"),
  municipalName: Yup.string().required(
    "Include Name of Municipality"
  ),
  supportQuestion: Yup.string().required("Include Support Question"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),

  // phoneNumber: Yup.string()
  //   .required("Phone number is required")
  //   .test(
  //     "is-valid-phone",
  //     "Enter a valid US phone number",
  //     (value) => (value ? isValidPhoneNumber(value, "US") : false)
  //   ),
});
