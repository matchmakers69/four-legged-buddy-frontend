import { VFC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "src/components/common/Button";
import FormGroup from "src/components/common/FormElement/FormGroup";
import InputText from "src/components/common/FormElement/InputText";
import TextArea from "src/components/common/FormElement/TextArea";
import { contactFormValidationSchema } from "src/lib/validation/contactFormValidation";
import * as S from "src/styles/components/Form.styled";

type ContactFormSubmit = {
  fullName: string;
  email: string;
  message: string;
};

const ContactForm: VFC = function () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSubmit>({
    mode: "onSubmit",
    resolver: yupResolver(contactFormValidationSchema),
  });

  const onContactFormSubmit = (data: ContactFormSubmit) => {
    console.log(data);
  };

  return (
    <div className="contact-form">
      <S.Form onSubmit={handleSubmit(onContactFormSubmit)}>
        <FormGroup>
          <InputText
            id="fullName"
            type="text"
            label="What's your name?"
            register={register}
            placeholder="Full name"
            name="fullName"
            error={errors?.fullName}
          />
        </FormGroup>

        <FormGroup>
          <InputText
            id="email"
            type="email"
            label="What's your email?"
            register={register}
            placeholder="Your email"
            name="email"
            error={errors?.email}
          />
        </FormGroup>

        <FormGroup>
          <TextArea
            id="message"
            label="What's your message?"
            register={register}
            placeholder="Your message"
            name="message"
            error={errors?.message}
          />
        </FormGroup>

        <FormGroup>
          <Button type="submit" variant="submit">
            Send
          </Button>

          <Button type="button" onClick={() => reset()} variant="primary">
            Reset
          </Button>
        </FormGroup>
      </S.Form>
    </div>
  );
};

export default ContactForm;
