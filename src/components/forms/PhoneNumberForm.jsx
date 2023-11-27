import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import membersGRPC from "../../api/grpcapi/membersGRPC";
import otpGRPC from "../../api/grpcapi/otpGRPC";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStore from "../../formstore/formStore";
import customerSetupsGRPC from "../../api/grpcapi/customerSetupsGRPC";

function PhoneNumberForm(props) {
  const { info, updateRoleAndCardType } = useStore();

  const [condition, setCondition] = React.useState(false);
  const [showpin, setShowpin] = React.useState(false);
  const [showInput, setShowInput] = React.useState(false);
  const [showCountries, setShowCountries] = React.useState(true);
  const [country, setCountry] = React.useState(null);
  const [showEmail, setShowEmail] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showEnterPin, setShowEnterPin] = React.useState(false);
  const [mobileNumber, setMobileNumber] = React.useState("");

  const { checkIfUserExist, loginMember, createJmMember } = membersGRPC();
  const { sendOtp, verifyOtp } = otpGRPC();
  const { getOtherCountries } = customerSetupsGRPC();

  //check if user exist funnction
  const onSubmit = async () => {
    setIsLoading(true);
    const data = props.formHandler.getValues();

    const result = await props.formHandler.trigger("telephoneNo");
    // console.log(result);
    if (!result) {
      return;
    }

    const newData = {
      ...data,
      role: info.role,
    };
    try {
      const response = await checkIfUserExist(newData);
      setIsLoading(false);
      // console.log(newData);
      console.log(response);

      props.formHandler.reset(newData);
      if (response.message === "COMPLETE") {
        // handleOtp(data.telephoneNo);
        props.formHandler.setValue("memberId", response.memberid);
        props.formHandler.setValue("ndcCardNo", response.cardno);
        props.formHandler.setValue("userStatus", response.message);

        // props.formHandler.setValue("telephoneNo", data.telephoneNo);
        setShowInput(false);
        setCondition(false);
        setShowEnterPin(true);
      } else if (response.message === "DOES_NOT_EXIST") {
        handleOtp(newData.telephoneNo);
        setShowInput(false);
        setShowEnterPin(false);
        setCondition(true);
      } else {
        setShowInput(false);
        setCondition(false);
        setShowEnterPin(true);
      }
    } catch (error) {
      props.formHandler.reset(newData);
      setIsLoading(false);
      if (error.message) {
        toast.error("Please try again later");
      }
      console.error(error);
    }
  };

  //getCountries
  async function handleGetOtherCountries() {
    try {
      const response = await getOtherCountries();
      console.log(response);
      setCountry(response.countrylistList);
    } catch (error) {
      console.log(error);
    }
  }

  //function to send otp
  const handleOtp = async () => {
    const data = props.formHandler.getValues("telephoneNo");

    try {
      const a = data.slice(0);
      const newData = {
        mobileNo: `${233}${a}`,
      };
      const response = await sendOtp(newData);
      console.log(response);
      props.formHandler.reset();

      if (response.status === true) {
        toast.success(response.message); //add field name
      } else {
        toast.warning(response.message);
      }
    } catch (error) {
      props.formHandler.reset(data);
      console.error(error);
    }
  };

  //verify otp function
  const handleOtpVerify = async () => {
    const data = props.formHandler.getValues();

    const result = await props.formHandler.trigger("otp");
    console.log(result);
    if (!result) {
      return;
    }
    const num = props.formHandler.getValues("telephoneNo");
    // condition;
    const updatedData = {
      ...data,
      mobileNo: `${233}${num}`,
    };
    try {
      setIsLoading(true);
      const response = await verifyOtp(updatedData);
      setIsLoading(false);
      props.formHandler.reset();
      if (response.status === false) {
        toast.warning(response.message);
      } else {
        setShowpin(true);
        setCondition(false);
        toast(response.message);
      }
      console.log(response);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  //login user function
  const handleLogin = async () => {
    const data = props.formHandler.getValues();
    // const newData = {
    //   ...data,
    //   accountType: info.role,
    // };
    // console.log(newData);
    const result = await props.formHandler.trigger("pin");
    if (!result) {
      return;
    }
    try {
      setIsLoading(true);

      const response = await loginMember(data);
      console.log(response);
      setIsLoading(false);
      props.formHandler.setValue("userStatus", response.message);
      props.formHandler.setValue("fullName", response.fullname);
      toast.success(response.message);
      props.formHandler.reset(data);
      if (response.message === "Success" && info.role === "GGC") {
        props.formHandler.setValue("fullName", response.fullname);
        props.handleNext(2);
      } else if (response.message === "Success" && info.role === "JM") {
        props.formHandler.setValue("fullName", response.fullname);

        props.handleNext(3);
      } else if (response.message === "INCOMPLETE") {
        props.handleNext(1);
      }
    } catch (error) {
      setIsLoading(false);
      props.formHandler.reset(data);
      console.log(error);
    }
  };

  React.useEffect(() => {
    // setShowEmail(false);
    console.log(props.formHandler.getValues());
    // handleGetOtherCountries();
    props.formHandler.setValue("amount", info.amount);
    if (props.formHandler.watch("country") === "GHA0233") {
      setShowInput(true);
      setShowEmail(false);
    } else if (props.formHandler.watch("country") === "default") {
      setShowEmail(false);
      setShowInput(false);
    } else {
      setShowEmail(true);
      setShowInput(false);
    }
  }, [props.formHandler.watch("country")]);

  return (
    <div>
      {showCountries && (
        <div>
          <h6 htmlFor="" className="mb-1">
            Select your Country{" "}
          </h6>

          <select
            {...props.formHandler.register("country")}
            className={`form-select p-3 `}
            // onChange={() => {
            //   // setShowCountries(false)
            //   if (props.formHandler.getValues("country") === "GHA0233") {
            //     setCondition(true);
            //   }

            //   // alert("hi");
            // }}
          >
            <option value="default" selected>
              Select your Country
            </option>
            <option value="GHA0233">Ghana</option>
            <option value="other">other</option>

            {/* {country?.map((counti, i) => {
              return (
                <option key={i} value={counti.countrycode}>
                  {counti.countryname}
                </option>
              );
            })} */}
          </select>
        </div>
      )}
      {/* {
        showCountries === true ? "empty" : <div>
          {
            props.formHandler.getValues("country") != "GHA0233"?(<div>ghanan</div>):(<div>email</div>)
          }
        </div>
      } */}

      {/* {!showCountries && ( */}
      <div>
        {showInput && (
          <form>
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
              <div style={{ width: "100%" }} className="  d-flex  gap-4 ">
                <select
                  style={{ height: "55px", width: "90px" }}
                  className="form-select h-7  "
                  {...props.formHandler.register("countryCode")}
                >
                  <option value={233}>+233</option>
                </select>
                <div className=" w-100 ">
                  <input
                    // style={{ width: "100%" }}
                    {...props.formHandler.register("telephoneNo")}
                    placeholder="Telephone Number"
                    className={`form-control w-100 ${
                      props.formHandler.formState.errors.telephoneNo
                        ? "is-invalid"
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
            </div>

            <div className="d-flex justify-content-end">
              <button
                onClick={() => {
                  onSubmit();
                }}
                disabled={isLoading}
                type="button"
                style={{ width: "160px" }}
                className="btn btn-success mt-4 "
              >
                {" "}
                {isLoading ? (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                ) : (
                  "continue"
                )}
              </button>
            </div>
          </form>
        )}{" "}
        {showEmail && (
          <form>
            <h1 className="text-center">Email</h1>
            <p className="text-center">
              Enter your email below to view your good governance card or
              register
            </p>
            <div className="text-center ">
              <div style={{ width: "100%" }} className="   ">
                <div className=" w-100 ">
                  <input
                    type="email"
                    // style={{ width: "100%" }}
                    {...props.formHandler.register("email")}
                    placeholder="Telephone Number"
                    className={`form-control w-100 ${
                      props.formHandler.formState.errors.email
                        ? "is-invalid"
                        : props.formHandler.formState.isDirty
                        ? "is-valid"
                        : ""
                    }  outline-none p-3`}
                  />

                  {props.formHandler.formState.errors.email && (
                    <div className="invalid-feedback">
                      {props.formHandler.formState.errors.email.message}
                    </div>
                  )}
                  {!props.formHandler.formState.errors.email && (
                    <div className="valid-feedback">Looks good!</div>
                  )}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button
                onClick={() => {
                  onSubmit();
                }}
                disabled={isLoading}
                type="button"
                style={{ width: "160px" }}
                className="btn btn-success mt-4 "
              >
                {" "}
                {isLoading ? (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                ) : (
                  "continue"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
      {/* )} */}

      {condition && (
        <form action="" className="text-center">
          <h1>Enter OTP</h1>
          <p>
            We have sent you a text message to confirm your number. Enter it
            below.
          </p>

          <input
            className={`form-control  ${
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

          <div className="d-flex justify-content-between ">
            <button
              onClick={() => {
                setCondition(false);
                setShowInput(true);
              }}
              type="button"
              className="btn btn-success mt-4"
            >
              back
            </button>
            <button
              type="button"
              onClick={handleOtpVerify}
              disabled={isLoading}
              className="btn btn-success mt-4"
            >
              {isLoading ? (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              ) : (
                "submit"
              )}
            </button>
          </div>
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
              className={`form-control p-3 w-100 mx-auto ${
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
              className={`form-control p-3 w-100 mx-auto mt-4 ${
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

            <div className="d-flex justify-content-between mt-4 ">
              <button
                onClick={() => {
                  setShowpin(false);
                  setCondition(true);
                }}
                type="button"
                className="btn btn-success"
              >
                back
              </button>
              <button
                type="button"
                // disabled={
                //   props.formHandler.formState.errors.pin ||
                //   props.formHandler.formState.errors.confirmPin ||
                //   !props.formHandler.getValues("pin") ||
                //   !props.formHandler.getValues("confirmPin")
                // }
                className="btn btn-success   "
                onClick={async () => {
                  const result = await props.formHandler.trigger("pin");
                  console.log(result);
                  if (!result) {
                    return;
                  }
                  if (info.role === "JM") {
                    try {
                      const data = props.formHandler.getValues();
                      const response = await createJmMember(data);
                      console.log(response);
                      props.handleNext(3);
                    } catch (error) {
                      console.log(error);
                    }
                  } else {
                    props.handleNext(1);
                  }
                }}
              >
                continue
              </button>
            </div>
          </div>
        </div>
      )}
      {showEnterPin && (
        <div className="mt-4 ">
          <h1 className="text-center">Looks like you have an existing card</h1>
          <p className="text-center">
            Enter your pin below to access your card
          </p>
          <form className="">
            <input
              className={`form-control p-3 w-100 mx-auto ${
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

            <div className="d-flex justify-content-between mt-4">
              <button
                onClick={() => {
                  setShowInput(true);
                  setShowEnterPin(false);
                }}
                type="button"
                className="btn btn-success  "
              >
                back
              </button>
              <button
                onClick={handleLogin}
                type="button"
                disabled={isLoading}
                className="btn btn-success  "
              >
                {isLoading ? (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                ) : (
                  "continue"
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default PhoneNumberForm;
