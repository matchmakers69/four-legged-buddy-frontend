import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "src/components/common/Button";
import FormGroup from "src/components/common/Form/FormGroup";
import InputText from "src/components/common/Form/InputText";
import TextArea from "src/components/common/Form/TextArea";
import { contactFormValidationSchema } from "src/libs/validation/contactFormValidation";

type ContactFormSubmit = {
  fullName: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
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
    <div className="register-form">
      <form onSubmit={handleSubmit(onContactFormSubmit)}>
        <FormGroup>
          <InputText
            id="fullName"
            type="text"
            label="What's your name?"
            register={register}
            placeholder="Full name"
            name="fullName"
            errors={errors}
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
            errors={errors}
          />
        </FormGroup>

        <FormGroup>
          <TextArea
            id="message"
            label="What's your message?"
            register={register}
            placeholder="Your message"
            name="message"
            errors={errors}
          />
        </FormGroup>

        <FormGroup>
          <Button className="btn--submit" type="submit" variant="danger">
            Send
          </Button>

          <Button type="button" onClick={() => reset()} variant="secondary" className="btn--reset">
            Reset
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default ContactForm;
