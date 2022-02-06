import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "src/components/common/Button";
import FormGroup from "src/components/common/FormElement/FormGroup";
import InputText from "src/components/common/FormElement/InputText";
import TextArea from "src/components/common/FormElement/TextArea";
import { API_URL } from "src/config";
import { addMemberValidationSchema } from "src/lib/validation/addMemberValidation";
import * as S from "src/styles/components/Form.styled";
import { AddMemberFormContainer } from "./AddMemberForm.styled";

type AddMemberFormType = {
  name: string;
  age: string;
  breed: string;
  location: string;
  intro: string;
};

type IAddMemberFormProps = {
  isCookieToken: boolean;
  userToken: string;
};

const AddMemberForm = function ({ isCookieToken, userToken }: IAddMemberFormProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<AddMemberFormType>({
    mode: "onChange",
    resolver: yupResolver(addMemberValidationSchema),
  });

  const onAddMemberSubmit = async (data: AddMemberFormType): Promise<void> => {
    if (!isCookieToken) {
      return;
    }
    setTimeout(() => {
      reset({
        name: "",
        breed: "",
        age: "",
        location: "",
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
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        if (res.status === 403 || res.status === 401) {
          toast.error("No token included");
          return;
        }
        toast.error("Something went wrong");
      } else {
        const member = await res.json();
        router.push(`/members/${member.slug}`);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
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
            label="What's your pet's name"
            register={register}
            placeholder="Pet's name"
            name="name"
            error={errors?.name}
          />
        </FormGroup>
        <FormGroup>
          <InputText
            id="breed"
            type="text"
            label="What's your pet's breed"
            register={register}
            placeholder="Pet's breed"
            name="breed"
            error={errors?.breed}
          />
        </FormGroup>
        <FormGroup>
          <InputText
            id="age"
            type="text"
            label="What's your pet's age"
            register={register}
            placeholder="Pet's age"
            name="age"
            error={errors?.age}
          />
        </FormGroup>
        <FormGroup>
          <InputText
            id="location"
            type="text"
            label="What's your location"
            register={register}
            placeholder="e.g Cheshire"
            name="location"
            error={errors?.location}
          />
        </FormGroup>
        <FormGroup>
          <TextArea
            id="intro"
            label="Short about your pet"
            register={register}
            placeholder="Pet's description"
            name="intro"
            error={errors?.intro}
          />
        </FormGroup>
        <FormGroup>
          <Button loading={loading} disable={!isValid} className="btn--submit" type="submit" variant="filled">
            Add member
          </Button>
        </FormGroup>
      </S.Form>
      <ToastContainer />
    </AddMemberFormContainer>
  );
};

export default AddMemberForm;
