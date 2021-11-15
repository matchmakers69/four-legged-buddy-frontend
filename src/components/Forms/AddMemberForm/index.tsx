import { VFC, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useForm } from "react-hook-form";
import Button from "src/components/common/Button";
import FormGroup from "src/components/common/FormElement/FormGroup";
import InputText from "src/components/common/FormElement/InputText";
import TextArea from "src/components/common/FormElement/TextArea";
import { addMemberValidationSchema } from "src/lib/validation/addMemberValidation";
import * as S from "styles/components/Form";
import { AddMemberFormContainer } from "./AddMemberForm.styled";

type AddMemberFormType = {
  name: string;
  age: string;
  intro: string;
};

const AddMemberForm: VFC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<AddMemberFormType>({
    mode: "onSubmit",
    resolver: yupResolver(addMemberValidationSchema),
  });

  const onAddMemberSubmit = async (data: AddMemberFormType): Promise<void> => {
    setTimeout(() => {
      reset({
        name: "",
        age: "",
        intro: "",
      });
    }, 300);
    setLoading(true);

    // try {
    //   const res = await axios.post("/api/login", {
    //     identifier,
    //     password,
    //   });
    //   setLoading(false);
    //   if (res) {
    //     router.replace("/profile");
    //   }
    // } catch (err) {
    //   console.log(err);
    //   setLoading(false);
    // }
  };

  return (
    <AddMemberFormContainer>
      <S.Form onSubmit={handleSubmit(onAddMemberSubmit)}>
        <FormGroup>
          <InputText
            id="name"
            type="text"
            label="What's your pet name"
            register={register}
            placeholder="Pet's name"
            name="name"
            errors={errors}
          />
        </FormGroup>
        <FormGroup>
          <InputText
            id="age"
            type="text"
            label="What's your pet age"
            register={register}
            placeholder="Pet's age"
            name="age"
            errors={errors}
          />
        </FormGroup>
        <FormGroup>
          <TextArea
            id="intro"
            label="Short about your pet"
            register={register}
            placeholder="Pet's description"
            name="intro"
            errors={errors}
          />
        </FormGroup>
        <FormGroup>
          <Button className="btn--submit" type="submit" variant="danger">
            Submit member
          </Button>
        </FormGroup>
      </S.Form>
    </AddMemberFormContainer>
  );
};

export default AddMemberForm;
