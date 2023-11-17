import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function PhoneNumberForm() {
  const [condition, setCondition] = React.useState(false);
  const [showpin, setShowpin] = React.useState(false);
  const { control, handleSubmit, register, getValues } = useForm();
  const nextButton = () => {};
  const onSubmit = () => {
    const formData = getValues();
    console.log("Form data:", formData);
    // Add your form submission logic here
  };

  return (
    <div>
      <h1>Phone Number</h1>
      <p>
        Enter your phone number below to view your good governance card or
        register
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex gap-3  align-content-center ">
          <FormControl sx={{ maxWidth: 120 }} fullWidth>
            <InputLabel id="demo-simple-select-label">+233</InputLabel>
            <Controller
              name="countryCode"
              control={control}
              defaultValue={233}
              render={({ field }) => (
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  {...field}
                >
                  <MenuItem value={233}>+233</MenuItem>
                </Select>
              )}
            />
          </FormControl>

          <FormControl variant="outlined" sx={{ minWidth: "60%" }}>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  type="number"
                  inputProps={{ pattern: "[0-9]*" }}
                />
              )}
            />
          </FormControl>

          <button
            onClick={() => {
              setCondition(true);
            }}
          >
            verify
          </button>
        </div>
        {/* <button type="submit">Submit</button> */}

        {condition && (
          <form action="">
            {/* <h1>Enter OTP</h1>
          <p>
            We have sent you a text message to confirm your number. Enter it
            below.
          </p> */}

            <div className="d-flex gap-3  align-content-center ">
              <FormControl variant="outlined" sx={{ minWidth: "60%", mt: 5 }}>
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
            </div>
            <button
              onClick={() => {
                setCondition(false);
                setShowpin(true);
              }}
              className="mt-2"
            >
              submit
            </button>
          </form>
        )}

        {showpin && (
          <div className="mt-4">
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
          </div>
        )}
      </form>
    </div>
  );
}

export default PhoneNumberForm;
