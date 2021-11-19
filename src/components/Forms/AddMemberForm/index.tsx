import { VFC, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "src/components/common/Button";
import FormGroup from "src/components/common/FormElement/FormGroup";
import InputText from "src/components/common/FormElement/InputText";
import TextArea from "src/components/common/FormElement/TextArea";
import { API_URL } from "src/config";
import { addMemberValidationSchema } from "src/lib/validation/addMemberValidation";
import * as S from "styles/components/Form";
import { AddMemberFormContainer } from "./AddMemberForm.styled";

type AddMemberFormType = {
  name: string;
  age: string;
  intro: string;
};

const AddMemberForm: VFC = function () {
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
    try {
      const res = await fetch(`${API_URL}/members`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
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
          <Button disable={!isValid} className="btn--submit" type="submit" variant="filled">
            Create member
          </Button>
        </FormGroup>
      </S.Form>
    </AddMemberFormContainer>
  );
};

export default AddMemberForm;
