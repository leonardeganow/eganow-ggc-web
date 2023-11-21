import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import membersGRPC from "../../api/grpcapi/membersGRPC";
import customerGRPC from "../../api/grpcapi/customerGRPC";

function PhoneNumberForm({ setBtnOpen, handleNext }) {
  const [condition, setCondition] = React.useState(false);
  const [showpin, setShowpin] = React.useState(false);
  const [showInput, setShowInput] = React.useState(true);
  // const { formData, onChange, updateFormData } = useStore();

  const { createMember,registerMember } = membersGRPC();
  const { getUsers } = customerGRPC();

  async function newMemeber(){
    console.log()
    const setdata = await registerMember(
      {
        Fullname : "Dekin",
        Mobilenumber : "test123455",
        Emailaddress : "test123455@gmail.com",
        Gender : "male",
        Age: 20,
        Countryofresidence :  "Ghana",
        Regionid : "2",
        Constituencyid : "5",
        Industry : "",
        Occupation : "Tester",
        Ndcmemberidno : "12345",
        Agentid : 10,
        Pin : "0980",
        Mobilewebussd : "2699",
        Agerageid : "5",
        Displaynameoncard : "Dekin Faisal",
        Cardpickuplocation : "Accra",
        Cardtype : "loyalty",
        Accountcreationstatus : "success"

      }
    )
    return setdata
  }

  React.useEffect(()=>{
    newMemeber()
  },[])




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
    getValues,

    formState: { errors, isDirty },
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
      {showInput && (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("countryCode")}
                defaultValue={defaultValues.countryCode}
              >
                <option value={233}>+233</option>
              </select>
              <div className=" ">
                <input
                  style={{ width: "100%" }}
                  {...register("telephoneNo")}
                  defaultValue={defaultValues.telephoneNo}
                  placeholder="telephoneNo"
                  className={`form-control ${
                    errors.telephoneNo
                      ? "is-invalid"
                      : isDirty
                      ? "is-valid"
                      : ""
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
            <button
              disabled={errors.telephoneNo || !getValues("telephoneNo")}
              onClick={() => onSubmit()}
              type="submit"
              className="btn btn-success mt-4"
            >
              {" "}
              continue
            </button>
          </div>
        </form>
      )}

      {/* <button type="submit">Submit</button> */}

      {condition && (
        <form action="" className="text-center">
          <h1>Enter OTP</h1>
          <p>
            We have sent you a text message to confirm your number. Enter it
            below.
          </p>

          <input
            className={`form-control ${
              errors.otp ? "is-invalid" : getValues("otp") ? "is-valid" : ""
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
            disabled={errors.otp || !getValues("otp")}
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
          <h1 className="text-center">Create new pin</h1>
          <p className="text-center">
            Create pin to protect the card you will acquire
          </p>
          <div className="">
            <input
              className={`form-control p-3 w-50 mx-auto ${
                errors.pin ? "is-invalid" : getValues("pin") ? "is-valid" : ""
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
              className={`form-control p-3 w-50 mx-auto mt-4 ${
                errors.confirmPin
                  ? "is-invalid"
                  : getValues("confirmPin")
                  ? "is-valid"
                  : ""
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
                disabled={
                  errors.pin ||
                  errors.confirmPin ||
                  !getValues("pin") ||
                  !getValues("confirmPin")
                }
                className="btn btn-success mx-auto text-center "
                onClick={() => {
                  handleNext();
                }}
              >
                continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhoneNumberForm;
