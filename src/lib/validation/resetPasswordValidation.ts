import * as yup from "yup";

export const resetPasswordFormSchema = yup.object().shape({
  email: yup.string().email().required("Email is a required field"),
});
