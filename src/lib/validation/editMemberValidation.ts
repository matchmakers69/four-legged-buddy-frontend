/* eslint-disable react/forbid-prop-types */
import * as yup from "yup";
import { alphabetRegExp } from "src/utils/regex";

export const editMemberValidationSchema = yup.object().shape({
  details: yup.object({
    name: yup
      .string()
      .required("Name is required")
      .matches(alphabetRegExp, "Only alphabets are allowed for this field")
      .min(2, "Name must be at least 2 characters")
      .max(30, "Name is too long"),
    breed: yup
      .string()
      .required("Breed is required")
      .matches(alphabetRegExp, "Only alphabets are allowed for this field")
      .min(2, "Breed must be at least 2 characters")
      .max(40, "Breed is too long"),
    location: yup
      .string()
      .required("Location is required")
      .matches(alphabetRegExp, "Only alphabets are allowed for this field")
      .min(2, "Location must be at least 3 characters")
      .max(40, "Location is too long"),
    age: yup.string().required("Age is required"),
    intro: yup
      .string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters")
      .max(400, "Message is too long, max 400 characters"),
  }),
});
