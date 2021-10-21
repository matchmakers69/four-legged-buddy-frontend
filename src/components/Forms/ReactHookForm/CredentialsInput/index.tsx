import { FC } from "react";
import { TextField } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const CredentialsInput: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        name="email"
        control={control}
        defaultValue="przemek.lewtak@gmail.com"
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            type="email"
            error={!!errors.email}
            helperText={errors.email ? errors.email?.message : ""}
          />
        )}
      />
      <br />
      <br />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            variant="outlined"
            type="password"
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : ""}
          />
        )}
      />
    </>
  );
};

export default CredentialsInput;
