import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import * as yup from "yup";
import CredentialsInput from "./CredentialsInput";
import PersonalDetailsInput from "./PersonalDetailsInput";

interface IFormInputs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const ReactHookForm: FC = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm<IFormInputs>({
  //   resolver: yupResolver(schema),
  // });

  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log(data, "data");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
        <div>
          <CredentialsInput />
        </div>
        <br />
        <div>
          <PersonalDetailsInput />
        </div>
        {/* <div>{errors.password && errors.password?.message && <span>{errors.password.message}</span>}</div> */}
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ReactHookForm;
