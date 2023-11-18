import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useForm } from "react-hook-form";
import { Button, InputLabel, TextField } from "@mui/material";
import useStore from "../../formstore/formStore";
import * as yup from "yup";

function PhoneNumberForm() {
  const [condition, setCondition] = React.useState(false);
  const [showpin, setShowpin] = React.useState(false);
  const [showInput, setShowInput] = React.useState(true);
  const { formData, onChange, updateFormData } = useStore();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  const phoneSchema = yup.object().shape({
    telephoneNo: yup
      .string()
      .required("Telephone number is required")
      .matches(/^\d{10}$/, "Enter a valid 10-digit phone number"),
    otp: yup
      .string()
      .required("OTP is required")
      .matches(/^\d{6}$/, "Enter a valid 6-digit OTP"),
    pin: yup
      .string()
      .required("PIN is required")
      .matches(/^\d{4}$/, "Enter a valid 4-digit PIN"),
    confirmPin: yup
      .string()
      .oneOf([yup.ref("pin"), null], "PIN and Confirm PIN must match")
      .required("Confirm PIN is required"),
  });
  const onSubmit = (data) => {
    console.log(data);
    onChange(data);
  };
  const handleOtpUpdate = () => {
    const otp = getValues("otp");
    console.log(otp);
    updateFormData("otp", otp);
  };

  const handlePinUpdate = () => {
    const pin = getValues("pin");

    updateFormData("pin", pin);
  };

  const handleConfirmPinUpdate = () => {
    const confirmPin = getValues("confirmPin");
    updateFormData("confirmPin", confirmPin);
  };

  return (
    <div>
      <h1>{formData.telephoneNo}</h1>
      <h1>{formData.countryCode}</h1>
      <h1>{formData.otp}</h1>
      <h1>{showpin ? "Create new pin" : "Phone Number"}</h1>
      <p>
        {showpin
          ? "Create pin to protect the card you will acquire"
          : "Enter your phone number below to view your good governance card or register"}
      </p>
      {showInput && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex gap-3  align-content-center ">
            <select {...register("countryCode")} defaultValue={233}>
              <option value={233}>+233</option>
            </select>

            <TextField
              sx={{ width: 1 }}
              variant="filled"
              {...register("telephoneNo")}
              placeholder="telephoneNo"
            />
            {errors.fullName && <span>This field is required</span>}
          </div>

          <button
            style={{
              color: "black",
              border: "none",
              padding: "1em",
              margin: "2em 0",
            }}
            type="submit"
            onClick={() => {
              setCondition(true);
            }}
          >
            Continue
          </button>
        </form>
      )}

      {/* <button type="submit">Submit</button> */}

      {condition && (
        <form action="">
          {/* <h1>Enter OTP</h1>
          <p>
            We have sent you a text message to confirm your number. Enter it
            below.
          </p> */}

          <TextField
            sx={{ width: 1 }}
            {...register("otp")}
            variant="filled"
            type="number"
            placeholder="enter OTP"
          />

          <button
            style={{
              color: "black",
              border: "none",
              padding: "1em",
            }}
            onClick={() => {
              handleOtpUpdate();
              setCondition(false);
              setShowpin(true);
              setShowInput(false);
            }}
            className="mt-2"
          >
            submit
          </button>
        </form>
      )}

      {showpin && (
        <form className="mt-4">
          <FormControl variant="outlined" sx={{ minWidth: "60%" }}>
            <TextField
              variant="filled"
              {...register("pin")}
              type="number"
              label="enter pin"
              InputProps={{ pattern: "[0-9]*", maxLength: 4 }}
            />
          </FormControl>

          <FormControl variant="outlined" sx={{ minWidth: "60%", my: 3 }}>
            <TextField
              {...register("confirmPin")}
              label="confirm pin"
              variant="filled"
              type="number"
              InputProps={{ pattern: "[0-9]*", maxLength: 4 }}
            />
          </FormControl>

          <Button
            sx={{ display: "block", backgroundColor: "lightgray" }}
            style={{
              color: "black",
              border: "none",
              padding: "1em",
            }}
            onClick={() => {
              handlePinUpdate();
              handleConfirmPinUpdate();
              // navigate("ggcreg");
            }}
          >
            continue
          </Button>
        </form>
      )}
    </div>
  );
}

export default PhoneNumberForm;
