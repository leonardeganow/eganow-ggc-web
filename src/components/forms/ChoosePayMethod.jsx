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
  const [showMomo, setShowMomo] = React.useState(false);
  const [showCard, setShowCard] = React.useState(false);
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
      <div className="border d-flex justify-content-center my-3">
        <a
          onClick={() => {
            setShowMomo(false);
            setShowCard(true);
          }}
          className=" w-25 bg-success text-white text-center p-2"
        >
          credit card
        </a>
        <a
          onClick={() => {
            setShowMomo(true);
            setShowCard(false);
          }}
          className=" w-25 text-white bg-success text-center p-2 mx-2"
        >
          momo
        </a>
      </div>
      {showMomo && (
        <form action="">
          <div className="d-flex border justify-content-between ">
            <div style={{ width: "40%" }} className="">
              <FormControl variant="outlined" sx={{ minWidth: "100%" }}>
                <Controller
                  name="ggcidnumber"
                  control={control}
                  defaultValue={12345566}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-basic"
                      label="ggcidnumber"
                      variant="filled"
                      size="small"
                      type="number"
                      inputProps={{ pattern: "[0-9]*" }}
                    />
                  )}
                />
              </FormControl>
            </div>
            <div style={{ width: "50%" }}>
              <FormControl
                variant="filled"
                sx={{ mt: 0, minWidth: "100%" }}
                size="small"
              >
                <InputLabel id="country-label">select network</InputLabel>
                <Controller
                  name="select network"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      labelId="country-label"
                      id="country"
                      label="select-network"
                      {...field}
                    >
                      <MenuItem value="Ghana">mtn</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              <div
                style={{ width: "100%", marginTop: 20 }}
                className="d-flex border  justify-content-between "
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

              <FormControl variant="outlined" sx={{ minWidth: "100%", my: 2 }}>
                <Controller
                  name="Registered-name"
                  control={control}
                  defaultValue={12345566}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-basic"
                      label="registered name"
                      variant="filled"
                      size="small"
                      type="text"
                      inputProps={{ pattern: "[0-9]*" }}
                    />
                  )}
                />
              </FormControl>
            </div>
          </div>
        </form>
      )}
      {showCard && (
        <form action="">
          <div className="d-flex border justify-content-between ">
            <div style={{ width: "40%" }} className="">
              <FormControl variant="outlined" sx={{ minWidth: "100%" }}>
                <Controller
                  name="ggcidnumber"
                  control={control}
                  defaultValue={12345566}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-basic"
                      label="ggcidnumber"
                      variant="filled"
                      size="small"
                      type="number"
                      inputProps={{ pattern: "[0-9]*" }}
                    />
                  )}
                />
              </FormControl>
            </div>
            <div style={{ width: "50%" }}>
              <FormControl variant="outlined" sx={{ minWidth: "100%" }}>
                <Controller
                  name="card-number"
                  control={control}
                  defaultValue={12345566}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-basic"
                      label="card number"
                      variant="filled"
                      size="small"
                      type="text"
                      inputProps={{ pattern: "[0-9]*" }}
                    />
                  )}
                />
              </FormControl>

              <FormControl variant="outlined" sx={{ minWidth: "100%", my: 2 }}>
                <Controller
                  name="name-on-card"
                  control={control}
                  defaultValue={12345566}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-basic"
                      label="name on card"
                      variant="filled"
                      size="small"
                      type="text"
                      inputProps={{ pattern: "[0-9]*" }}
                    />
                  )}
                />
              </FormControl>

              <div className="d-flex justify-content-between  border">
                <FormControl variant="outlined" sx={{ width: "40%" }}>
                  <Controller
                    name="Registered-name"
                    control={control}
                    defaultValue={12345566}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="outlined-basic"
                        label="registered name"
                        variant="filled"
                        size="small"
                        type="text"
                        inputProps={{ pattern: "[0-9]*" }}
                      />
                    )}
                  />
                </FormControl>

                <FormControl variant="outlined" sx={{ width: "30%" }}>
                  <Controller
                    name="Registered-name"
                    control={control}
                    defaultValue={12345566}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="outlined-basic"
                        label="registered name"
                        variant="filled"
                        size="small"
                        type="text"
                        inputProps={{ pattern: "[0-9]*" }}
                      />
                    )}
                  />
                </FormControl>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default ChoosePayMethod;
