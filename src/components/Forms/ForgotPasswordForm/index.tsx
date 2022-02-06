import { FC, useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { TailSpin } from "react-loader-spinner";
import * as Yup from "yup";
import Button from "src/components/common/Button";
import FormGroup from "src/components/common/FormElement/FormGroup";
import InputText from "src/components/common/FormElement/InputText";
import { API_URL } from "src/config";
import constants from "src/constants";
import { resetPasswordFormSchema } from "src/lib/validation/resetPasswordValidation";
import * as S from "src/styles/components/Form.styled";

const { CONNECTION_API_ERROR } = constants.routes;

type RegisterUserType = Pick<Yup.InferType<typeof resetPasswordFormSchema>, "username" | "email" | "password">;

const ForgotPasswordForm: FC = function () {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<RegisterUserType>({
    mode: "onChange",
    resolver: yupResolver(resetPasswordFormSchema),
  });

  useEffect(() => {
    if (error) {
      router.push(CONNECTION_API_ERROR);
    }
  }, [error, router]);

  const handleForgotPasswordSubmit = async (data: RegisterUserType) => {
    setTimeout(() => {
      reset({
        email: "",
      });
    }, 300);

    const { email } = data;
    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/auth/forgot-password`, { email });

      if (res && res.status === 200) {
        console.log(res);
        // TODO display modal confirmation here
      }
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <TailSpin color="#da6f0c" height={100} width={100} />;
  }
  return (
    <S.FormWrapperSkew>
      <S.HeaderForm>dwcdw</S.HeaderForm>
      <S.Form onSubmit={handleSubmit(handleForgotPasswordSubmit)}>
        <FormGroup>
          <InputText<RegisterUserType>
            id="email"
            type="email"
            label="What's your email?"
            register={register}
            placeholder="Type your email"
            name="email"
            error={errors?.email}
          />
        </FormGroup>

        <FormGroup>
          <Button loading={loading} disable={!isValid} className="btn--submit" type="submit" variant="filled">
            Send
          </Button>
        </FormGroup>
      </S.Form>
    </S.FormWrapperSkew>
  );
};

export default ForgotPasswordForm;
