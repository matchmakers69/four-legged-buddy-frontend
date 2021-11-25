import * as yup from "yup";
import { errorMessages } from "src/utils/errors/errorMessages";

const PASSWORD_PATTERN = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
const MIN_USERNAME_LENGTH = 5;
const USERNAME_NO_SPACES_PATTERN = /^\S{2,}$/;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required(errorMessages.username.required)
    .min(MIN_USERNAME_LENGTH, errorMessages.username.pattern)
    .matches(USERNAME_NO_SPACES_PATTERN, errorMessages.username.spaces_error),
  password: yup
    .string()
    .required(errorMessages.password.required)
    .matches(PASSWORD_PATTERN, errorMessages.password.pattern),
});
