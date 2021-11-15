import * as yup from "yup";
import { alphabetRegExp } from "src/utils/regex";

export const addMemberValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(alphabetRegExp, "Only alphabets are allowed for this field")
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name is too long"),
  age: yup.string().required("Age is required"),
  intro: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(400, "Message is too long, max 400 characters"),
});
