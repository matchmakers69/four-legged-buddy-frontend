import * as yup from "yup";
import { alphabetRegExp } from "src/utils/regex";

export const contactFormValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .matches(alphabetRegExp, "Only alphabets are allowed for this field")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name too long"),
  email: yup.string().email("Sorry invalid email").required("Email is a required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(400, "Message is too long, max 400 characters"),
});
