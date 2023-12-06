import * as React from "react";

import "react-international-phone/style.css";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { useState } from "react";
import { IoCard } from "react-icons/io5";

import useStore from "../../formstore/formStore";
import TransactionAPI from "../../api/grpcapi/TransactionGRPC";
import customerSetupsGRPC from "../../api/grpcapi/customerSetupsGRPC";

function ChoosePayMethod(props) {
  const [showMomo, setShowMomo] = React.useState(true);
  const [showCard, setShowCard] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isCard, setIsCard] = useState("momo");
  const [MomoOptions, setMomoOptions] = useState(null);
  const [cardId, setCardId] = useState(null);

  const [phone, setPhone] = useState("");
  const { info } = useStore();
  const { getPayment } = customerSetupsGRPC();
  const { getKyc } = TransactionAPI();

  const onSubmit = async (data) => {
    const result = await props.formHandler.trigger([
      // "paymentCardNo",
      "paymentMethodId",
      "cvv",
      "expiryDateYear",
      "expiryDateMonth",
      "nameOnPaymentCard",
    ]);
    console.log(result);
    if (!result) {
      return;
    }

    props.handleNext(1);
  };

  let pMethod;
  const getpayMethodsHandler = async () => {
    try {
      const response = await getPayment();
      pMethod = response.paymethodlistList[0].paymentmethodid;
      // console.log(pMethod);
      setCardId(response.paymethodlistList[0].paymentmethodid);
      setMomoOptions(response.paymethodlistList.slice(1));
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getpayMethodsHandler();
    props.formHandler.setValue(
      "paymentCardNo",
      props.formHandler.getValues("telephoneNo")
    );
    props.formHandler.reset(props.formHandler.getValues());
    // console.log(props.formHandler.getValues());
  }, []);

  React.useEffect(() => {
    props.formHandler.setValue("transType", info.role);
    props.formHandler.setValue("cardId", info.cardid);
    props.formHandler.setValue("plan", info.cardType);
    props.formHandler.setValue("paymentMethod", isCard);
    // props.formHandler.setValue("paymentMethod", "momo");
  }, [isCard]);

  const watchMomoId = props.formHandler.watch("paymentMethodId");
  const watchMomoNumber = props.formHandler.watch("paymentCardNo");

  const getKycHandler = async () => {
    setLoading(true);
    // alert("hi");
    try {
      const response = await getKyc({ watchMomoId, watchMomoNumber });
      // console.log(response);
      if (response.status === true) {
        setLoading(false);
        props.formHandler.setValue("momoname", response.message);
        props.formHandler.setValue("nameOnPaymentCard", response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (watchMomoNumber?.toString().length === 10 && watchMomoId) {
      getKycHandler();
    }
  }, [watchMomoId, watchMomoNumber]);

  return (
    <div>
      {" "}
      <h1 className="text-center">Choose payment method</h1>
      <p className="text-center">
        Pick the payment option that suits you bests
      </p>
      <div className=" d-flex justify-content-center gap-4">
        <div className="pl-2 pr-2 pb-2 ">
          <div
            className="d-flex border border-4 border-success rounded
           "
          >
            <div
              role="button"
              onClick={() => {
                setIsCard("momo");
                props.formHandler.setValue("paymentCardNo", "");
                props.formHandler.setValue("paymentMethod", "momo");
                props.formHandler.setValue("momoname", "");
                props.formHandler.setValue("nameOnPaymentCard", "");

                console.log(props.formHandler.getValues());
                setShowMomo(true);
                setShowCard(false);
              }}
              className={` p-md-3 p-2 d-flex gap-2 align-items-center ${
                showMomo ? "bg-success text-white" : " text-success"
              }`}
            >
              {" "}
              <FaMoneyBill1Wave />
              <span> Mobile money</span>
            </div>
            <div
              role="button"
              className={` p-md-3 p-2 d-flex gap-2 align-items-center ${
                showCard ? "bg-success text-white" : " text-success"
              }`}
              onClick={() => {
                setIsCard("Debit card");
                props.formHandler.setValue("paymentCardNo", "");
                props.formHandler.setValue("paymentMethod", "Debit card");
                props.formHandler.setValue("momoname", "");
                props.formHandler.setValue("nameOnPaymentCard", "");
                props.formHandler.setValue("paymentMethodId", cardId);
                setShowMomo(false);
                setShowCard(true);
                console.log(props.formHandler.getValues());
              }}
            >
              {" "}
              <FaCreditCard className="mr-2" />
              <span className="ml-1"> Credit/Debit Card</span>
            </div>
          </div>
        </div>
      </div>
      {showMomo && (
        <form className="d-flex  flex-column gap-4" role="form">
          {props.formHandler.getValues("userStatus") === "COMPLETE" &&
            info.role === "GGC" && (
              <div className="form-group">
                <label htmlFor="username">
                  <h6>Good governance card ID number</h6>
                </label>
                <input
                  disabled
                  value={props.formHandler.getValues("memberId")}
                  placeholder="Good governance card ID number"
                  required
                  className="form-control p-2"
                />
              </div>
            )}

          <div className="d-flex gap-4 align-items-center my-2">
            <div className="w-100">
              <label htmlFor="username">
                <h6>Phone number</h6>
              </label>
              <div className="d-flex gap-2">
                <select className="w-50  p-2 form-select" name="" id="">
                  <option value="" selected>
                    🇬🇭 +233
                  </option>
                </select>
                <input
                  // style={{
                  //   width: "500px",
                  // }}
                  {...props.formHandler.register("paymentCardNo")}
                  placeholder="Enter your mobile number"
                  type="number"
                  required
                  // value={props.formHandler.getValues("paymentMethod") === "momo" ? props.formHandler.getValues("telephoneNo"): "" }
                  className={`form-control w-100 ${
                    props.formHandler.formState.errors.paymentCardNo
                      ? " is-invalid"
                      : ""
                  }`}
                />{" "}
              </div>
            </div>
          </div>

          <div className="form-group ">
            <label htmlFor="username">
              <h6>Select network</h6>
            </label>

            <select
              {...props.formHandler.register("paymentMethodId")}
              placeholder="fgdgdf"
              className="form-select  p-2  w-10"
            >
              <option selected>select network</option>

              {MomoOptions?.map((network, i) => (
                <option key={i} value={network.paymentmethodid}>
                  {network.paymentmethodname}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-2">
            <label htmlFor="username">
              <h6>Registered name</h6>
            </label>
            <input
              disabled={props.formHandler.getValues("momoname") || loading}
              placeholder="Registered name"
              {...props.formHandler.register("momoname")}
              className="form-control p-2"
            />
            {loading && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
          </div>

          <div className="d-flex  justify-content-between">
            <button
              onClick={async () => {
                props.formHandler.setValue("amount", "");
                props.formHandler.setValue("momoname", "");
                props.formHandler.setValue("paymentMethodId", "");

                props.handleBack(1);
                // props.formHandler.setValue("momoname", "");
              }}
              type="button"
              className="subscribe btn btn-success btn-block shadow-sm"
            >
              back
            </button>
            <button
              onClick={async () => {
                const result = await props.formHandler.trigger([
                  "paymentCardNo",
                  "paymentMethodId",
                ]);
                console.log(result);
                if (!result) {
                  return;
                }

                props.handleNext(1);
              }}
              type="submit"
              className="subscribe btn btn-success btn-block shadow-sm"
            >
              Continue
            </button>
          </div>
        </form>
      )}
      {showCard && (
        <div id="credit-card" className="tab-pane fade show active pt-2">
          <form
            role="form"
            className="d-flex  flex-column gap-4"
            // onSubmit={props.formHandler.handleSubmit(onSubmit)}
          >
            {props.formHandler.getValues("userStatus") === "COMPLETE" && (
              <div className="form-group ">
                <label htmlFor="username">
                  <h6>Good governance card ID number</h6>
                </label>
                <input
                  disabled
                  value={props.formHandler.getValues("memberId")}
                  placeholder="Good governance card ID number"
                  required
                  className="form-control p-2"
                />
              </div>
            )}
            <div className="form-group ">
              <label htmlFor="cardNumber">
                <h6>Card number</h6>
              </label>
              <div className="input-group ">
                <input
                  {...props.formHandler.register("paymentCardNo")}
                  placeholder="Valid card number"
                  className="form-control p-md-2"
                  required
                  type="text"
                  maxlength="16"
                />
                <div className="input-group-append border-none">
                  <span className="input-group-text text-muted p-3 border-none">
                    <IoCard />
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group ">
              <label htmlFor="username">
                <h6>Name on card</h6>
              </label>
              <input
                placeholder="Name on card"
                required
                className={`form-control p-md-2 ${
                  props.formHandler.formState.errors.nameOnPaymentCard
                    ? "is-invalid"
                    : ""
                }`}
                {...props.formHandler.register("nameOnPaymentCard")}
              />
              {props.formHandler.formState.errors.nameOnPaymentCard && (
                <span className="invalid-feedback">
                  {props.formHandler.formState.errors.nameOnPaymentCard.message}
                </span>
              )}
            </div>
            <div className="row">
              <div className="col-sm-8">
                <div className="form-group">
                  <label>
                    <span className="hidden-xs">
                      <h6>Expiration Date</h6>
                    </span>
                  </label>
                  <div className="input-group">
                    <input
                      type="number"
                      max="02"
                      placeholder="MM"
                      className={`form-control p-md-2 ${
                        props.formHandler.formState.errors.expiryDateMonth
                          ? "is-invalid"
                          : ""
                      }`}
                      {...props.formHandler.register("expiryDateMonth")}
                      required
                    />
                    <input
                      type="number"
                      placeholder="YY"
                      maxlength="2"
                      className={`form-control p-md-2 ${
                        props.formHandler.formState.errors.expiryDateYear
                          ? "is-invalid"
                          : ""
                      }`}
                      {...props.formHandler.register("expiryDateYear")}
                      required
                    />
                    {props.formHandler.formState.errors.expiryDateMonth && (
                      <span className="invalid-feedback">
                        {
                          props.formHandler.formState.errors.expiryDateMonth
                            .message
                        }
                      </span>
                    )}
                    {props.formHandler.formState.errors.expiryDateYear && (
                      <span className="invalid-feedback">
                        {
                          props.formHandler.formState.errors.expiryDateYear
                            .message
                        }
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group mt-4 mt-md-0">
                  <label
                    data-toggle="tooltip"
                    title="Three digit CV code on the back of your card"
                  >
                    <h6>
                      CVV <i className="fa fa-question-circle d-inline"></i>
                    </h6>
                  </label>
                  <input
                    maxlength="3"
                    {...props.formHandler.register("cvv")}
                    type="text"
                    required
                    className={`form-control p-md-2 ${
                      props.formHandler.formState.errors.cvv ? "is-invalid" : ""
                    }`}
                  />
                  {props.formHandler.formState.errors.cvv && (
                    <span className="invalid-feedback">
                      {props.formHandler.formState.errors.cvv.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <button
                onClick={async () => {
                  props.formHandler.setValue("amount", "");
                  props.handleBack(1);
                }}
                type="button"
                className="subscribe btn btn-success btn-block shadow-sm"
              >
                back
              </button>
              <button
                onClick={async () => {
                  const result = await props.formHandler.trigger([
                    // "paymentCardNo",
                    // "paymentMethodId",
                    "nameOnPaymentCard",
                    "expiryDateMonth",
                    "expiryDateYear",
                    "cvv",
                  ]);
                  console.log(result);
                  if (!result) {
                    return;
                  }

                  props.handleNext(1);
                }}
                type="button"
                className="subscribe btn btn-success btn-block shadow-sm"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChoosePayMethod;
