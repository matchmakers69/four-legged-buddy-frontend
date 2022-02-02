import { VFC, useState, useEffect } from "react";
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
import { IMember } from "src/interface/members";
import { editMemberValidationSchema } from "src/lib/validation/editMemberValidation";
import * as S from "./EditMemberForm.styled";

type IMemberProps = {
  member: IMember;
  isCookieToken: boolean;
  userToken: string;
};

type IEditFormInputProps = {
  name: string;
  age: string;
  breed: string;
  location: string;
  intro: string;
};

type EditFormFields = {
  name: string;
  age: string;
  breed: string;
  location: string;
  intro: string;
  details: IEditFormInputProps;
};

const EditMemberForm: VFC<IMemberProps> = function ({ member, isCookieToken, userToken }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<EditFormFields>({
    mode: "onChange",
    resolver: yupResolver(editMemberValidationSchema),
  });

  useEffect(() => {
    if (member) {
      setValue("details", {
        name: member?.name,
        age: member?.age,
        breed: member?.breed,
        location: member?.location,
        intro: member?.intro,
      });
    }
  }, [member, setValue]);

  const onEditMemberFormSubmit = async (data: EditFormFields): Promise<void> => {
    if (!isCookieToken) {
      return;
    }
    const edidFormValues = data.details;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/members/${member.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(edidFormValues),
      });
      if (!res.ok) {
        if (res.status === 403 || res.status === 401) {
          toast.error("User unauthorized");
          return;
        }
        toast.error("Something went wrong");
      } else {
        const memberUser = await res.json();
        router.push(`/members/${memberUser.slug}`);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  if (member) {
    return (
      <S.EditMemberFormContainer>
        <form noValidate onSubmit={handleSubmit(onEditMemberFormSubmit)}>
          <FormGroup>
            <InputText
              id="name"
              type="text"
              label="What's your pet's name"
              register={register}
              placeholder="Pet's name"
              name="details.name"
              error={errors?.details?.name}
            />
          </FormGroup>

          <FormGroup>
            <InputText
              id="breed"
              type="text"
              label="What's your pet's breed"
              register={register}
              placeholder="Pet's breed"
              name="details.breed"
              error={errors?.details?.breed}
            />
          </FormGroup>

          <FormGroup>
            <InputText
              id="age"
              type="text"
              label="What's your pet's age"
              register={register}
              placeholder="Pet's age"
              name="details.age"
              error={errors?.details?.age}
            />
          </FormGroup>
          <FormGroup>
            <InputText
              id="location"
              type="text"
              label="What's your location"
              register={register}
              placeholder="e.g Cheshire"
              name="details.location"
              error={errors?.details?.location}
            />
          </FormGroup>

          <FormGroup>
            <TextArea<EditFormFields>
              id="intro"
              label="Short about your pet"
              register={register}
              placeholder="Enter your's pet description"
              name="details.intro"
              error={errors?.details?.intro}
            />
          </FormGroup>

          <FormGroup>
            <Button loading={loading} disable={!isValid} className="btn--submit" type="submit" variant="filled">
              Update details
            </Button>
          </FormGroup>
        </form>

        <ToastContainer />
      </S.EditMemberFormContainer>
    );
  }
  return <span>Sorry no member</span>;
};

export default EditMemberForm;
