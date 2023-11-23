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
  const [isCard, setIsCard] = useState("Debit card");
  const [MomoOptions, setMomoOptions] = useState(null);
  const [phone, setPhone] = useState("");
  const { info } = useStore();
  const { getPayment } = customerSetupsGRPC();
  const { getKyc } = TransactionAPI();

  console.log(info);

  const onSubmit = async (data) => {
    // props.formHandler.setValue(
    //   "paymentCardNo",
    //   props.formHandler.getValues("momonumber")
    // );
    props.handleNext(1);
  };

  // const handleMomo = () => {
  //   const pin = props.formHandler.getValues();
  //   console.log(pin);
  // };

  let pMethod;
  const getpayMethodsHandler = async () => {
    try {
      const response = await getPayment();
      pMethod = response.paymethodlistList[0].paymentmethodid;
      console.log(pMethod);
      props.formHandler.setValue("paymentMethodId", pMethod);
      setMomoOptions(response.paymethodlistList.slice(1));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(MomoOptions);

  React.useEffect(() => {
    console.log(info);
    getpayMethodsHandler();
  }, []);

  React.useEffect(() => {
    props.formHandler.setValue("transType", info.role);
    props.formHandler.setValue("cardId", info.cardid);
    props.formHandler.setValue("plan", info.cardType);
    // props.formHandler.setValue("");
    console.log(props.formHandler.getValues());
  }, []);

  const watchMomoId = props.formHandler.watch("paymentMethodId");
  const watchMomoNumber = props.formHandler.watch("paymentCardNo");
  console.log(watchMomoId);
  console.log(watchMomoNumber);

  console.log(props.formHandler.watch("paymentCardNo"));

  const getKycHandler = async () => {
    setLoading(true);
    // alert("hi");
    try {
      const response = await getKyc({ watchMomoId, watchMomoNumber });
      console.log(response);
      if (response.status === true) {
        setLoading(false);
        props.formHandler.setValue("momoname", response.message);
        props.formHandler.setValue("nameOnPaymentCard", response.message);
      } else {
        toast;
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(props.formHandler.getValues());

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

                console.log(props.formHandler.getValues());
                setShowMomo(true);
                setShowCard(false);
              }}
              className={` p-3 d-flex gap-2 align-items-center ${
                showMomo ? "bg-success text-white" : " text-success"
              }`}
            >
              {" "}
              <FaMoneyBill1Wave />
              <span> Mobile money</span>
            </div>
            <div
              role="button"
              className={` p-3 d-flex gap-2 align-items-center ${
                showCard ? "bg-success text-white" : " text-success"
              }`}
              onClick={() => {
                setIsCard("Debit card");
                props.formHandler.setValue("paymentCardNo", "");
                props.formHandler.setValue("paymentMethod", "Debit card");
                props.formHandler.setValue("momoname", "");
                props.formHandler.setValue("paymentmethodid", pMethod);
                setShowMomo(false);
                setShowCard(true);
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
        <form
          className="d-flex  flex-column gap-4"
          role="form"
          onSubmit={props.formHandler.handleSubmit(onSubmit)}
        >
          {props.formHandler.getValues("userStatus") === "COMPLETE" && (
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
                <select className="w-25  p-2 form-select" name="" id="">
                  <option value="" selected>
                    🇬🇭 +233
                  </option>
                  <div>test</div>
                </select>
                <input
                  // style={{
                  //   width: "500px",
                  // }}
                  {...props.formHandler.register("paymentCardNo")}
                  placeholder="Enter your mobile number"
                  type="number"
                  required
                  className="form-control w-100"
                />{" "}
              </div>
              {/* <PhoneInput
                className=""
                value={phone}
                onChange={(phone) => setPhone(phone)}
                defaultCountry="gh"
                countries={countries}
              /> */}
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
              <option disabled selected>
                select network
              </option>

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
              disabled={props.formHandler.getValues("momoname")}
              placeholder="Registered name"
              required
              {...props.formHandler.register("momoname")}
              className="form-control p-2"
            />
            {loading && <span>Getting your momo name...</span>}
          </div>

          <div className="d-flex justify-content-end">
            <button
              onClick={() => onSubmit()}
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
                className="form-control p-md-2"
                {...props.formHandler.register("nameOnPaymentCard")}
              />
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
                      placeholder="MM"
                      className="form-control p-md-2"
                      {...props.formHandler.register("expiryDateMonth")}
                      required
                    />
                    <input
                      type="number"
                      placeholder="YY"
                      className="form-control p-md-2"
                      {...props.formHandler.register("expiryDateYear")}
                      required
                    />
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
                    {...props.formHandler.register("cvv")}
                    type="text"
                    required
                    className="form-control p-md-2"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                onClick={onSubmit}
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
