import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

function CreatePinForm() {
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
        <h1>Create new pin</h1>
        <p>Create pin to protect the card you will acquire</p>

        <FormControl variant="outlined" sx={{ minWidth: "60%" }}>
          <Controller
            name="create-pin"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="outlined-basic"
                label="create pin"
                variant="outlined"
                type="number"
                InputProps={{ pattern: "[0-9]*", maxLength: 4 }}
              />
            )}
          />
        </FormControl>

        <FormControl variant="outlined" sx={{ minWidth: "60%", my: 3 }}>
          <Controller
            name="create-pin"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="outlined-basic"
                label="confirm pin"
                variant="outlined"
                type="number"
                InputProps={{ pattern: "[0-9]*", maxLength: 4 }}
              />
            )}
          />
        </FormControl>
      </form>
    </div>
  );
}

export default CreatePinForm;
