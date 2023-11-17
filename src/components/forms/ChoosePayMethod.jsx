import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import MultiStep from "react-multistep";
import { TextField } from "@mui/material";

function ChoosePayMethod() {
  const { control, handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Add your form submission logic here
  };
  return (
    <div>
      {" "}
      <h1>Choose payment method</h1>
      <p>Pick the payment option that suits you bests</p>
      <div className="border d-flex justify-content-center">
        <a className=" w-25 bg-success text-white text-center p-2">
          credit card
        </a>
        <a className=" w-25 text-white bg-success text-center p-2 mx-2">momo</a>
      </div>
      <form action="">
        <div className="d-flex border justify-content-between ">
          <div style={{ width: "40%" }} className="">
            <FormControl variant="outlined" sx={{ minWidth: "100%" }}>
              <Controller
                name="ggcidnumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-basic"
                    label="2342637842374"
                    variant="filled"
                    size="small"
                    type="number"
                    inputProps={{ pattern: "[0-9]*" }}
                  />
                )}
              />
            </FormControl>
          </div>
          <div>
            <div
              style={{ width: "50%" }}
              className="d-flex  justify-content-between "
            >
              <FormControl sx={{ maxWidth: 80 }} fullWidth>
                {/* <InputLabel id="demo-simple-select-label">+233</InputLabel> */}
                <Controller
                  name="countryCode"
                  control={control}
                  defaultValue={233}
                  render={({ field }) => (
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      variant="filled"
                      size="small"
                      {...field}
                    >
                      <MenuItem value={233}>+233</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>

              <FormControl variant="filled" sx={{ minWidth: "40%" }}>
                {/* <InputLabel htmlFor="full-name">Full Name</InputLabel> */}
                <TextField
                  id="filled-basic"
                  label="Phone number"
                  variant="filled"
                  size="small"
                  type="number"
                />
                {/* <Input
                id="full-name"
                {...register("fullName", {
                  required: "This field is required",
                })}
              /> */}
              </FormControl>
            </div>

            <FormControl
              variant="filled"
              sx={{ mt: 2, minWidth: "100%" }}
              size="small"
            >
              <InputLabel id="country-label">Country</InputLabel>
              <Controller
                name="country"
                control={control}
                defaultValue="Ghana"
                render={({ field }) => (
                  <Select
                    labelId="country-label"
                    id="country"
                    label="Country"
                    {...field}
                  >
                    <MenuItem value="Ghana">Ghana</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChoosePayMethod;
