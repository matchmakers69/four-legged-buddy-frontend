import { FC, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "src/components/common/Button";
import ErrorSubmissionMessage from "src/components/common/ErrorSubmissionMessage";
import FormGroup from "src/components/common/FormElement/FormGroup";
import InputText from "src/components/common/FormElement/InputText";
import { useAppSelector } from "src/HOOKS/useCustomReduxSelector";
import { loginSchema } from "src/lib/validation/loginFormValidation";
import { getUser } from "src/store/auth/slice";
import * as S from "styles/components/Form";

type LoginFormSubmit = {
  email: string;
  password: string;
};

const LoginForm: FC = function () {
  const { loading, error } = useAppSelector((state) => state.users);
  const dispatch = useDispatch();

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

  const onLoginSubmit = async (data: LoginFormSubmit): Promise<void> => {
    setTimeout(() => {
      reset({
        email: "",
        password: "",
      });
    }, 300);

    const { email, password } = data;
    // Toolkit action here
    await dispatch(
      getUser({
        email,
        password,
      })
    );
    router.push("/dashboard");
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
