import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "src/components/common/Button";
import ErrorSubmissionMessage from "src/components/common/ErrorSubmissionMessage";
import FormGroup from "src/components/common/FormElement/FormGroup";
import InputText from "src/components/common/FormElement/InputText";
import constants from "src/constants";
import { login } from "src/features/auth/actions";
import { useAppThunkDispatch } from "src/features/store";
import { useAppSelector } from "src/HOOKS/useCustomReduxSelector";
import { loginSchema } from "src/lib/validation/loginFormValidation";
import * as S from "src/styles/components/Form.styled";
import { Row, Col } from "styles/grid";

const { DASHBOARD, REGISTER, FORGOT_PASSWORD } = constants.routes;

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm: FC = function () {
  const { userLoading, userError } = useAppSelector((state) => state.auth);
  const dispatch = useAppThunkDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter();

  const onLoginSubmit = (data: LoginFormValues) => {
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
        console.log(err, "Error from login");
      });
  };

  return (
    <S.FormWrapperSkew>
      <S.HeaderForm>
        <Row className="row">
          <Col xs={12} sm={5}>
            <S.HeaderColLeft>
              <span className="formHeaderTitle">Sign in to continue</span>
            </S.HeaderColLeft>
          </Col>
          <Col xs={12} sm={7}>
            <S.HeaderColRight>
              <S.FormHeaderSubtitle>Not a member yet?</S.FormHeaderSubtitle>
              <Link href={REGISTER}>
                <a className="formHeaderLink">Register now</a>
              </Link>
            </S.HeaderColRight>
          </Col>
        </Row>
      </S.HeaderForm>
      <S.Form onSubmit={handleSubmit(onLoginSubmit)}>
        <FormGroup>
          <InputText
            id="email"
            type="text"
            label="What's your username (email address)"
            register={register}
            placeholder="Username or email"
            name="email"
            error={errors?.email}
          />
        </FormGroup>

        <FormGroup>
          <InputText
            id="password"
            type="password"
            label="What's your password?"
            register={register}
            placeholder="Password"
            name="password"
            error={errors?.password}
          />
        </FormGroup>

        <FormGroup>
          <Button loading={userLoading} disable={!isValid} className="btn--submit" type="submit" variant="filled">
            Send
          </Button>
        </FormGroup>
      </S.Form>
      {userError && <ErrorSubmissionMessage>{userError?.message}</ErrorSubmissionMessage>}
      <S.FormFooter>
        <Link href={FORGOT_PASSWORD}>
          <a className="footerLink">Forgot password</a>
        </Link>
      </S.FormFooter>
    </S.FormWrapperSkew>
  );
};

export default LoginForm;
