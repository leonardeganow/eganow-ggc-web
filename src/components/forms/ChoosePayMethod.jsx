import * as React from "react";
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { useState } from "react";
import useStore from "../../formstore/formStore";
import TransactionAPI from "../../api/grpcapi/TransactionGRPC";
import customerSetupsGRPC from "../../api/grpcapi/customerSetupsGRPC";

function ChoosePayMethod(props) {
  const [showMomo, setShowMomo] = React.useState(false);
  const [showCard, setShowCard] = React.useState(true);
  const [MomoOptions, setMomoOptions] = useState(null);
  const [phone, setPhone] = useState("");
  const { info } = useStore();
  const { getPayment } = customerSetupsGRPC();
  const { getKyc } = TransactionAPI();

  //getting ghana flag icon in  phone number input
  const countries = defaultCountries.filter((country) => {
    const { iso2 } = parseCountry(country);
    return ["dd", "gh"].includes(iso2);
  });

  const fakeData = [
    {
      test: "one",
      pay: "two",
      make: "three",
    },
    {
      test: "one",
      pay: "two",
      make: "three",
    },
    {
      test: "one",
      pay: "two",
      make: "three",
    },
  ];

  const onSubmit = async (data) => {
    props.handleNext(1);
  };

  const handleMomo = () => {
    const pin = props.formHandler.getValues();
    console.log(pin);
  };

  const getpayMethodsHandler = async () => {
    try {
      const response = await getPayment();
      const pMethod = response.paymethodlistList[0].paymentmethodid;
      console.log(pMethod);
      props.formHandler.setValue("paymentMethod", pMethod);
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
    console.log(props.formHandler.getValues());
  }, []);

  const watchMomoId = props.formHandler.watch("paymentMethod");

  const getKycHandler = async () => {
    //if number and network is coorect ---- getkyc
   
    try {
      const response = await getKyc({watchMomoId,phone});
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    React.useEffect(() => {
      getKycHandler()
    }, [watchMomoId,phone]);
  };
  return (
    <div>
      {" "}
      <h1>Choose payment method</h1>
      <p>Pick the payment option that suits you bests</p>
      <div className=" d-flex justify-content-center gap-2 my-1">
        <div className="pl-2 pr-2 pb-2 ">
          <div
            className="d-flex border border-4 border-success rounded
           "
          >
            <div
              role="button"
              className={` p-3 d-flex gap-2 align-items-center ${
                showCard ? "bg-success text-white" : " text-success"
              }`}
              onClick={() => {
                props.formHandler.setValue("paymentMethod", "Debit card");
                setShowMomo(false);
                setShowCard(true);
              }}
            >
              {" "}
              <FaCreditCard className="mr-2" />
              <span className="ml-1"> Credit/Debit Card</span>
            </div>
            <div
              role="button"
              onClick={() => {
                props.formHandler.setValue("paymentMethod", "Mobile money");

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
          </div>
        </div>
      </div>
      {showCard && (
        <div id="credit-card" className="tab-pane fade show active pt-2">
          <form role="form" onSubmit={props.formHandler.handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="username">
                <h6>Good governance card ID number</h6>
              </label>
              <input
                disabled
                value={props.formHandler.getValues("memberId")}
                placeholder="Good governance card ID number"
                required
                className="form-control"
                {...props.formHandler.register("cardId")}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="cardNumber">
                <h6>Card number</h6>
              </label>
              <div className="input-group">
                <input
                  {...props.formHandler.register("paymentCardNo")}
                  placeholder="Valid card number"
                  className="form-control"
                  required
                />
                <div className="input-group-append">
                  <span className="input-group-text text-muted">
                    <i className="fab fa-cc-visa mx-1"></i>
                    <i className="fab fa-cc-mastercard mx-1"></i>
                    <i className="fab fa-cc-amex mx-1"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group mb-2">
              <label htmlFor="username">
                <h6>Name on card</h6>
              </label>
              <input
                placeholder="Name on card"
                required
                className="form-control"
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
                      className="form-control"
                      {...props.formHandler.register("expiryDateMonth")}
                      required
                    />
                    <input
                      type="number"
                      placeholder="YY"
                      className="form-control"
                      {...props.formHandler.register("expiryDateYear")}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group mb-4">
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
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="subscribe btn btn-success btn-block shadow-sm"
              >
                Make Payment
              </button>
            </div>
          </form>
        </div>
      )}
      {showMomo && (
        <form role="form" onSubmit={props.formHandler.handleSubmit(handleMomo)}>
          <div className="form-group">
            <label htmlFor="username">
              <h6>Good governance card ID number</h6>
            </label>
            <input
              disabled
              value={props.formHandler.getValues("memberId")}
              placeholder="Good governance card ID number"
              required
              className="form-control"
            />
          </div>

          <div className="d-flex gap-4 align-items-center my-2">
            <div>
              <label htmlFor="username">
                <h6>Phone number</h6>
              </label>
              <PhoneInput
                className=""
                value={phone}
                onChange={(phone) => setPhone(phone)}
                defaultCountry="gh"
                countries={countries}
              />
            </div>

            <div className="form-group ">
              <label htmlFor="username">
                <h6>Select network</h6>
              </label>
              <select
                {...props.formHandler.register("paymentMethod")}
                placeholder="fgdgdf"
                className="form-select  p-1  w-10"
              >
                <option value="" disabled selected hidden>
                  select network
                </option>

                {MomoOptions.map((network, i) => (
                  <option key={i} value={network.paymentmethodid}>
                    {network.paymentmethodname}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group mb-2">
            <label htmlFor="username">
              <h6>Registered name</h6>
            </label>
            <input
              placeholder="Registered name"
              required
              {...props.formHandler.register("leonard adjei")}
              className="form-control"
            />
          </div>

          <div className="d-flex justify-content-center">
            <button
              onClick={() => console.log(props.formHandler.getValues())}
              type="submit"
              className="subscribe btn btn-success btn-block shadow-sm"
            >
              Make Payment
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ChoosePayMethod;
