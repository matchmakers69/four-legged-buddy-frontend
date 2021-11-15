import { FC, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "src/components/common/Button";
import FormGroup from "src/components/common/FormElement/FormGroup";
import InputText from "src/components/common/FormElement/InputText";
import { loginSchema } from "src/lib/validation/loginFormValidation";
import * as S from "styles/components/Form";

type LoginFormSubmit = {
  identifier: string;
  password: string;
};

const LoginForm: FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormSubmit>({
    mode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter();

  const onLoginSubmit = async (data: LoginFormSubmit): Promise<void> => {
    setTimeout(() => {
      reset({
        identifier: "",
        password: "",
      });
    }, 300);
    setLoading(true);
    const { identifier, password } = data;

    try {
      const res = await axios.post("/api/login", {
        identifier,
        password,
      });
      setLoading(false);
      if (res) {
        router.replace("/profile");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  if (loading) {
    return <span>Loading...</span>;
  }
  return (
    <div className="contact-form">
      <S.Form onSubmit={handleSubmit(onLoginSubmit)}>
        <FormGroup>
          <InputText
            id="identifier"
            type="text"
            label="What's your username"
            register={register}
            placeholder="Type your username"
            name="identifier"
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
          <Button className="btn--submit" type="submit" variant="danger">
            Send
          </Button>
        </FormGroup>
      </S.Form>
    </div>
  );
};

export default LoginForm;
