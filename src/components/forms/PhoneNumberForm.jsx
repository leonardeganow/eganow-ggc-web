import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import membersGRPC from "../../api/grpcapi/membersGRPC";
import otpGRPC from "../../api/grpcapi/otpGRPC";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStore from "../../formstore/formStore";

function PhoneNumberForm(props) {
  const { info } = useStore();

  const [condition, setCondition] = React.useState(false);
  const [showpin, setShowpin] = React.useState(false);
  const [showInput, setShowInput] = React.useState(true);
  const [showEnterPin,setShowEnterPin] = React.useState(false)
  const [mobileNumber, setMobileNumber] = React.useState("");

  const { createMember } = membersGRPC();
  const { sendOtp, verifyOtp } = otpGRPC();

  console.log(info);
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

  // console.log(props.formHandler);

  //check if user exist funnction
  const onSubmit = async (data) => {
    console.log(props.formHandler.getValues());
    const newData = {
      ...data,
      role: info.role,
    };
    try {
      const response = await createMember(newData);
      props.formHandler.reset(data);
      console.log(response);
      if (response.status === false) {
        handleOtp(data.telephoneNo);
        setShowInput(false);
        setCondition(true);
      }
      else {
        setShowInput(false)
        setShowEnterPin(true)

      }
    } catch (error) {
      props.formHandler.reset(data);
      if (error.message) {
        toast.error("Please try again later");
      }
      console.error(error);
    }
  };

  //  console.log(props);

  //function to send otp
  const handleOtp = async (data) => {
    try {
      const a = data.slice(0);
      console.log(a);
      const newData = {
        mobileNo: `${233}${a}`,
      };
      const response = await sendOtp(newData);

      props.formHandler.reset();

      if (response.status === true) {
        toast.success(response.message);
      } else {
        toast.warning(response.message);
      }
    } catch (error) {
      props.formHandler.reset(data);
      console.error(error);
    }
  };

  //verify otp function
  const handleOtpVerify = async (data) => {
    const num = props.formHandler.getValues("telephoneNo");
    condition;
    const updatedData = {
      ...data,
      mobileNo: `${233}${num}`,
    };
    try {
      const response = await verifyOtp(updatedData);
      props.formHandler.reset();
      if (response.status === false) {
        toast.warning(response.message);
      } else {
        setShowpin(true);
        setCondition(false);
        toast(response.message);
      }
      console.log(response);
    } catch (error) {}
  };

  //login user function
  const handleLogin =(data) =>{
    try {
      
    } catch (error) {
      
    }
  }
 

  return (
    <div>
      {showInput && (
        <form onSubmit={props.formHandler.handleSubmit(onSubmit)}>
          <h1 className="text-center">
            {/* "Create new pin" :  */}
            Phone Number
          </h1>
          <p className="text-center">
            {/* "Create pin to protect the card you will acquire" */}
            Enter your phone number below to view your good governance card or
            register
          </p>
          <div className="text-center ">
            <div
              style={{ width: "100%" }}
              className=" mx-auto d-flex justify-content-center gap-4 "
            >
              <select
                style={{ height: "55px", width: "90px" }}
                className="form-select h-7 "
                {...props.formHandler.register("countryCode")}
              >
                <option value={233}>+233</option>
              </select>
              <div className=" ">
                <input
                  style={{ width: "100%" }}
                  {...props.formHandler.register("telephoneNo")}
                  placeholder="Telephone Number"
                  className={`form-control ${
                    props.formHandler.formState.errors.telephoneNo
                      ? "is-invalid"
                      : props.formHandler.formState.isDirty
                      ? "is-valid"
                      : ""
                  }  outline-none p-3`}
                />

                {props.formHandler.formState.errors.telephoneNo && (
                  <div className="invalid-feedback">
                    {props.formHandler.formState.errors.telephoneNo.message}
                  </div>
                )}
                {!props.formHandler.formState.errors.telephoneNo && (
                  <div className="valid-feedback">Looks good!</div>
                )}
              </div>
            </div>

            {/* {displayError && <p>{displayError}</p>} */}
            {/* <input type="submit" value="" /> */}
            <button
              disabled={props.formHandler.formState.isSubmitting}
              type="submit"
              style={{ width: "160px" }}
              className="btn btn-success mt-4 "
            >
              {" "}
              {props.formHandler.formState.isSubmitting ? (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              ) : (
                "continue"
              )}
              {/* <div class="spinner-border text-light " role="status">
              </div> */}
            </button>
          </div>
        </form>
      )}

      {/* <button type="submit">Submit</button> */}

      {condition && (
        <form
          onSubmit={props.formHandler.handleSubmit(handleOtpVerify)}
          action=""
          className="text-center"
        >
          <h1>Enter OTP</h1>
          <p>
            We have sent you a text message to confirm your number. Enter it
            below.
          </p>

          <input
            className={`form-control ${
              props.formHandler.formState.errors.otp
                ? "is-invalid"
                : props.formHandler.getValues("otp")
                ? "is-valid"
                : ""
            }  outline-none p-3`}
            sx={{ width: 1 }}
            {...props.formHandler.register("otp")}
            variant="filled"
            type="number"
            placeholder="enter OTP"
          />
          {/* {displayError && <p className="invalid-feedback">{displayError}</p>} */}

          <button
            // disabled={errors.otp || !getValues("otp")}
            // onClick={() => {
            //   setCondition(false);
            //   setShowpin(true);
            //   setShowInput(false);
            // }}
            className="btn btn-success mt-4"
          >
            {props.formHandler.formState.isSubmitting ? (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            ) : (
              "submit"
            )}
          </button>
        </form>
      )}

      {showpin && (
        <div className="mt-4 ">
          <h1 className="text-center">Create new pin</h1>
          <p className="text-center">
            Create pin to protect the card you will acquire
          </p>
          <div className="">
            <input
              className={`form-control p-3 w-50 mx-auto ${
                props.formHandler.formState.errors.pin
                  ? "is-invalid"
                  : props.formHandler.getValues("pin")
                  ? "is-valid"
                  : ""
              }`}
              {...props.formHandler.register("pin")}
              type="password"
              placeholder="enter pin"
            />

            {props.formHandler.formState.errors.pin && (
              <p className="invalid-feedback text-center">
                {props.formHandler.formState.errors.pin.message}
              </p>
            )}

            <input
              className={`form-control p-3 w-50 mx-auto mt-4 ${
                props.formHandler.formState.errors.confirmPin
                  ? "is-invalid"
                  : props.formHandler.getValues("confirmPin")
                  ? "is-valid"
                  : ""
              }`}
              {...props.formHandler.register("confirmPin")}
              placeholder="confirm pin"
              type="password"
            />

            {props.formHandler.formState.errors.confirmPin && (
              <p className="invalid-feedback text-center">
                {props.formHandler.formState.errors.confirmPin.message}
              </p>
            )}

            <div className="d-flex justify-content-center mt-4">
              <button
                // disabled={
                //   props.formHandler.formState.errors.pin ||
                //   props.formHandler.formState.errors.confirmPin ||
                //   !props.formHandler.getValues("pin") ||
                //   !props.formHandler.getValues("confirmPin")
                // }
                className="btn btn-success mx-auto text-center "
                onClick={() => {
                  props.handleNext();
                }}
              >
                continue
              </button>
            </div>

          </div>
        </div>
      )}


      {showEnterPin && <div className="mt-4 ">
          <h1 className="text-center">Looks like you have an existing card</h1>
          <p className="text-center">
            Enter your pin below to access your card
          </p>
          <form onSubmit={props.formHandler.handleSubmit(handleLogin)} className="">
            <input
              className={`form-control p-3 w-50 mx-auto ${
                props.formHandler.formState.errors.pin
                  ? "is-invalid"
                  : props.formHandler.getValues("pin")
                  ? "is-valid"
                  : ""
              }`}
              {...props.formHandler.register("pin")}
              type="password"
              placeholder="enter pin"
            />

            {props.formHandler.formState.errors.pin && (
              <p className="invalid-feedback text-center">
                {props.formHandler.formState.errors.pin.message}
              </p>
            )}

          

            {props.formHandler.formState.errors.confirmPin && (
              <p className="invalid-feedback text-center">
                {props.formHandler.formState.errors.confirmPin.message}
              </p>
            )}

            <div className="d-flex justify-content-center mt-4">
              <button type="submit"
                // disabled={
                //   props.formHandler.formState.errors.pin ||
                //   props.formHandler.formState.errors.confirmPin ||
                //   !props.formHandler.getValues("pin") ||
                //   !props.formHandler.getValues("confirmPin")
                // }
                className="btn btn-success mx-auto text-center "
                onClick={() => {
                  props.handleNext();
                }}
              >
                continue
              </button>
            </div>

          
          </form>
        </div>}
    </div>
  );
}

export default PhoneNumberForm;
