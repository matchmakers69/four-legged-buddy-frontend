import { FC } from "react";
import { TextField } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const PersonalDetailsInput: FC = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name="firstName"
        control={control}
        defaultValue="Przemek"
        render={({ field }) => <TextField {...field} label="FirstName" variant="outlined" type="text" />}
      />

      <br />
      <br />
      <Controller
        name="lastName"
        control={control}
        defaultValue="Lewtak"
        render={({ field }) => <TextField {...field} label="LastName" variant="outlined" type="text" />}
      />
    </>
  );
};

export default PersonalDetailsInput;
