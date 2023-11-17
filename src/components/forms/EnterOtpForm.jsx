import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

function EnterOtpForm() {
  const { control, handleSubmit, register, getValues } = useForm();
  const nextButton = () => {};
  const onSubmit = () => {
    const formData = getValues();
    console.log("Form data:", formData);
    // Add your form submission logic here
  };
  return (
    <div>
      <form action="">
        <h1>Enter OTP</h1>
        <p>
          We have sent you a text message to confirm your number. Enter it
          below.
        </p>

        <FormControl variant="outlined" sx={{ minWidth: "60%" }}>
          <Controller
            name="otp"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="outlined-basic"
                label="enter Otp"
                variant="outlined"
                type="text"
                InputProps={{ pattern: "[0-9]*", maxLength: 4 }}
              />
            )}
          />
        </FormControl>
      </form>
    </div>
  );
}

export default EnterOtpForm;
