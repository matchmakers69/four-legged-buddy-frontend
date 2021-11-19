import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "src/components/common/Button";
import ErrorSubmissionMessage from "src/components/common/ErrorSubmissionMessage";
import FormGroup from "src/components/common/FormElement/FormGroup";
import InputText from "src/components/common/FormElement/InputText";
import constants from "src/constants";
import { useAppSelector } from "src/HOOKS/useCustomReduxSelector";
import { loginSchema } from "src/lib/validation/loginFormValidation";
import { login } from "src/store/auth/actions";
import { useAppThunkDispatch } from "src/store/store";
import * as S from "styles/components/Form";

const { DASHBOARD } = constants.routes;

type LoginFormSubmit = {
  email: string;
  password: string;
};

const LoginForm: FC = function () {
  const { loading, error } = useAppSelector((state) => state.users);
  const dispatch = useAppThunkDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<LoginFormSubmit>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter();

  const onLoginSubmit = (data: LoginFormSubmit) => {
    setTimeout(() => {
      reset({
        email: "",
        password: "",
      });
    }, 300);

    const { email, password } = data;
    const loginData = { email, password };

    dispatch(login(loginData))
      .then(unwrapResult)
      .then(() => {
        return router.push(DASHBOARD);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="contact-form">
      <S.Form onSubmit={handleSubmit(onLoginSubmit)}>
        <FormGroup>
          <InputText
            id="email"
            type="text"
            label="What's your username"
            register={register}
            placeholder="Type your username"
            name="email"
            errors={errors}
          />
        </FormGroup>

        <FormGroup>
          <InputText
            id="password"
            type="password"
            label="What's your password?"
            register={register}
            placeholder="Type your password"
            name="password"
            errors={errors}
          />
        </FormGroup>

        <FormGroup>
          <Button disable={!isValid} className="btn--submit" type="submit" variant="filled">
            Send
          </Button>
        </FormGroup>
      </S.Form>
      {error && <ErrorSubmissionMessage>{error}</ErrorSubmissionMessage>}
    </div>
  );
};

export default LoginForm;
