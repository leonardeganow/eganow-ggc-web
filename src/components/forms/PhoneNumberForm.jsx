import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useForm } from "react-hook-form";
import { Button, InputLabel, TextField } from "@mui/material";
import useStore from "../../formstore/formStore";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import membersGRPC from "../../api/grpcapi/membersGRPC";
import customerGRPC from "../../api/grpcapi/customerGRPC";

function PhoneNumberForm({ setBtnOpen }) {
  const [condition, setCondition] = React.useState(false);
  const [showpin, setShowpin] = React.useState(false);
  const [showInput, setShowInput] = React.useState(true);
  // const { formData, onChange, updateFormData } = useStore();

  const { createMember } = membersGRPC();
  const { getUsers } = customerGRPC();
  const phoneRegExp =
    " /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/";

  const schema = yup
    .object()
    .shape({
      telephoneNo: yup
        .string()
        .required("Phone number is required")
        .matches(/^\d{10}$/, "Enter a valid 10-digit phone number"),
    })
    .required();
  const {
    register,
    watch,
    handleSubmit,
    setError,
    reset,
    getValues,

    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const defaultValues = {
    countryCode: 233,
    telephoneNo: "",
    otp: "",
    pin: "",
    confirmPin: "",
  };

  const onSubmit = async (data) => {
    // console.log(data);
    const newData = {
      ...data,
      role: 0,
    };

    console.log(newData);
    try {
      const response = await createMember(newData);
      console.log(response);
      // if (response) {
      //   setBtnOpen(true);
      // }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{showpin ? "Create new pin" : "Phone Number"}</h1>
      <p>
        {showpin
          ? "Create pin to protect the card you will acquire"
          : "Enter your phone number below to view your good governance card or register"}
      </p>
      {showInput && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex flex-start gap-3  align-content-center ">
            <select
              {...register("countryCode")}
              defaultValue={defaultValues.countryCode}
            >
              <option value={233}>+233</option>
            </select>
            <div style={{ border: errors.telephoneNo ? "1px red solid" : "" }}>
              <input
                sx={{ width: 1, border: "none" }}
                variant="filled"
                {...register("telephoneNo")}
                defaultValue={defaultValues.telephoneNo}
                placeholder="telephoneNo"
                className="form-control outline-none"
              />
            </div>
            {/* {errors.telephoneNo && <p>{errors.telephoneNo.message}</p>} */}
            <input type="submit" />
          </div>
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
            defaultValue={defaultValues.otp}
          />

          <button
            style={{
              color: "black",
              border: "none",
              padding: "1em",
            }}
            onClick={() => {
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
              defaultValue={defaultValues.pin}
              InputProps={{ pattern: "[0-9]*", maxLength: 4 }}
            />
          </FormControl>

          <FormControl variant="outlined" sx={{ minWidth: "60%", my: 3 }}>
            <TextField
              {...register("confirmPin")}
              label="confirm pin"
              variant="filled"
              type="number"
              defaultValue={defaultValues.confirmPin}
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
