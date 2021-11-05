import { FC, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "src/components/common/Button";
import FormGroup from "src/components/common/FormElement/FormGroup";
import InputText from "src/components/common/FormElement/InputText";
import { registerFormSchema } from "src/lib/validation/registerFormValidation";
import * as S from "styles/components/Form";

type RegisterFormSubmit = {
  username: string;
  email: string;
  password: string;
};

const RegisterForm: FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<RegisterFormSubmit>({
    mode: "onChange",
    resolver: yupResolver(registerFormSchema),
  });

  const router = useRouter();

  const onRegisterFormSubmit = async (data: RegisterFormSubmit): Promise<void> => {
    reset({
      username: "",
      email: "",
      password: "",
    });

    setLoading(true);
    const { username, email, password } = data;
    try {
      const res = await axios.post("/api/register", {
        username,
        email,
        password,
      });
      setLoading(false);
      if (res) {
        // TODO display modal confirmation here
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const isDisabled = !isValid || loading;
  if (loading) {
    return <span>Loading...</span>;
  }
  return (
    <div className="contact-form">
      <S.Form onSubmit={handleSubmit(onRegisterFormSubmit)}>
        <FormGroup>
          <InputText
            id="username"
            type="text"
            label="What's your username"
            register={register}
            placeholder="Type your username"
            name="username"
            errors={errors}
          />
        </FormGroup>

        <FormGroup>
          <InputText
            id="email"
            type="email"
            label="What's your email?"
            register={register}
            placeholder="Type your email"
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
          <Button disable={isDisabled} className="btn--submit" type="submit" variant="danger">
            Send
          </Button>
        </FormGroup>
      </S.Form>
    </div>
  );
};

export default RegisterForm;
