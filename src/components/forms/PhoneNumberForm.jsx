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

  const schema = yup
    .object()
    .shape({
      telephoneNo: yup
        .string()
        .required("Phone number is required")
        .matches(/^\d{10}$/, "Enter a valid 10-digit phone number"),
      otp: yup
        .string()
        .required("OTP is required")
        .matches(/^\d{4}$/, "Enter a valid 4-digit OTP"),
      pin: yup
        .string()
        .required("PIN is required")
        .matches(/^\d{4}$/, "Enter a valid 4-digit PIN"),
      confirmPin: yup
        .string()
        .required("Confirm PIN is required")
        .oneOf([yup.ref("pin"), null], "PIN and Confirm PIN must match"),
    })
    .required();
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, touchedFields },
  } = useForm({
    mode: "onChange",

    resolver: yupResolver(schema),
  });

  const defaultValues = {
    countryCode: 233,
    telephoneNo: "",
    otp: "",
    pin: "",
    confirmPin: "",
  };

  const onSubmit = (data) => {
    // setBtnOpen(true);
    setCondition(true);
    setShowInput(false);
    // console.log(data);
    // const newData = {
    //   ...data,
    //   role: 0,
    // };

    // console.log(newData);
    // try {
    //   const response = await createMember(newData);
    //   console.log(response);
    //   // if (response) {
    //   //   setBtnOpen(true);
    //   // }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div>
      <h1 className="text-center">
        {showpin ? "Create new pin" : "Phone Number"}
      </h1>
      <p className="text-center">
        {showpin
          ? "Create pin to protect the card you will acquire"
          : "Enter your phone number below to view your good governance card or register"}
      </p>
      {showInput && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center ">
            <div
              style={{ width: "80%" }}
              className=" mx-auto d-flex justify-content-between "
            >
              <select
                style={{ height: "55px", width: "30%" }}
                className="form-select h-7"
                {...register("countryCode")}
                defaultValue={defaultValues.countryCode}
              >
                <option value={233}>+233</option>
              </select>
              <div style={{ width: "60%" }} className=" ">
                <input
                  style={{ width: "100%" }}
                  {...register("telephoneNo")}
                  defaultValue={defaultValues.telephoneNo}
                  placeholder="telephoneNo"
                  className={`form-control ${
                    errors.telephoneNo ? "is-invalid" : "is-valid"
                  }  outline-none p-3`}
                />

                {errors.telephoneNo && (
                  <div className="invalid-feedback">
                    {errors.telephoneNo.message}
                  </div>
                )}
                {!errors.telephoneNo && (
                  <div className="valid-feedback">Looks good!</div>
                )}
              </div>
            </div>

            {/* {errors.telephoneNo && <p>{errors.telephoneNo.message}</p>} */}
            <button className="btn btn-success mt-4"> continue</button>
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

          <input
            className={`form-control ${
              errors.otp ? "is-invalid" : "is-valid"
            }  outline-none p-3`}
            sx={{ width: 1 }}
            {...register("otp")}
            variant="filled"
            type="number"
            placeholder="enter OTP"
            defaultValue={defaultValues.otp}
          />
          {errors.otp && (
            <p className="invalid-feedback">{errors.otp.message}</p>
          )}

          <button
            onClick={() => {
              setCondition(false);
              setShowpin(true);
              setShowInput(false);
            }}
            className="btn btn-success mt-4"
          >
            submit
          </button>
        </form>
      )}

      {showpin && (
        <div className="mt-4 ">
          <form className="">
            <input
              className={`form-control p-3 w-25 mx-auto ${
                errors.pin ? "is-invalid" : "is-valid"
              }`}
              {...register("pin")}
              type="password"
              placeholder="enter pin"
              defaultValue={defaultValues.pin}
            />

            {errors.pin && (
              <p className="invalid-feedback text-center">
                {errors.pin.message}
              </p>
            )}

            <input
              className={`form-control p-3 w-25 mx-auto mt-4 ${
                errors.confirmPin ? "is-invalid" : "is-valid"
              }`}
              {...register("confirmPin")}
              placeholder="confirm pin"
              type="password"
              defaultValue={defaultValues.confirmPin}
            />

            {errors.confirmPin && (
              <p className="invalid-feedback text-center">
                {errors.confirmPin.message}
              </p>
            )}

            <div className="d-flex justify-content-center mt-4">
              <button
                className="btn btn-success mx-auto text-center w-25 flex justify-content-center"
                sx={{ display: "block", backgroundColor: "lightgray" }}
                onClick={() => {
                  // navigate("ggcreg");
                }}
              >
                continue
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default PhoneNumberForm;
