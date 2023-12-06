import React, { useEffect } from "react";
import { useState } from "react";
import TransactionAPI from "../../api/grpcapi/TransactionGRPC";
import { toast } from "react-toastify";
import useStore from "../../formstore/formStore";

const ReviewPaymentPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { postNewTransaction, getKyc } = TransactionAPI();
  const { info } = useStore();

  const creditCardNo = props.formHandler.getValues("paymentCardNo");

  //mask credit cards
  const maskCreditCardNumber = (creditCardNumber) => {
    const length = creditCardNumber.length;
    const maskedNumbers = creditCardNumber.slice(-2).padStart(length, "*");
    return maskedNumbers;
  };
  const data = props.formHandler.getValues();
  console.log(data);

  //initiate payment
  const completePayment = async () => {
    // props.handleNext(1);
    setIsLoading(true);
    const newData = {
      ...data,
      narration: `${
        props.formHandler.getValues("paymentMethod") === "Debit card"
          ? data.nameOnPaymentCard
          : data.momoname
      } has paid GHS${data.amount}`,
      agentId: info.agentId
    };
    console.log(newData);

    try {
      const response = await postNewTransaction(newData);
      console.log(response);
      setIsLoading(false);
      if (response.status === true) {
        props.formHandler.setValue("paymentUrl", response.threedsurl);
        props.handleNext(1);
      } else {
        setIsLoading(false);
        toast.error(response.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center">Review</h1>

      <div className="d-flex flex-column gap-4">
        <div
          style={{ backgroundColor: "#CFDFD6", borderRadius: "0.25rem" }}
          className="  p-2 p-md-4"
        >
          <div className="d-flex justify-content-between align-items-center">
            <p>Sender name:</p>
            <p className="fs-5 fs-md-6 fw-bold text-dark text-capitalize text-end">
              {props.formHandler.getValues("paymentMethod") === "Debit card"
                ? data.fullName || data.nameOnPaymentCard
                : data.fullName
                ? data.fullName
                : data.momoname}
            </p>
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <p>Payment method:</p>
              <p className="fw-bold text-dark">
                {props.formHandler.getValues("paymentMethod") === "Debit card"
                  ? "CARD"
                  : "Mobile money"}
              </p>
            </div>
          </div>
          {props.formHandler.getValues("paymentMethod") === "Debit card" ? (
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <p>Card number: </p>
                <p className="fw-bold text-dark">
                  {maskCreditCardNumber(creditCardNo)}
                </p>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-between align-items-center">
              <p>Momo number: </p>
              <p className="fw-bold text-dark">{data.paymentCardNo}</p>
            </div>
          )}
        </div>

        <div
          style={{ backgroundColor: "#CFDFD6", borderRadius: "0.25rem" }}
          className="  p-2 p-md-4"
        >
          {info.role === "GGC" && (
            <div className="d-flex justify-content-between align-items-center">
              <p>Good gov. ID:</p>
              <p className="fw-bold text-dark">
                {props.formHandler.getValues("userStatus") === "INCOMPLETE"
                  ? ""
                  : data.memberId}
              </p>
            </div>
          )}
          {info.role === "GGC" ? (
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <p>Plan:</p>
                <p className="fw-bold text-dark">{data.plan}</p>
              </div>
            </div>
          ) : (
            ""
          )}
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <p>Donation Amount</p>
              <p className="fw-bold text-dark">
                GHS{" "}
                {data.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button
          onClick={async () => {
            props.formHandler.setValue("paymentMethodId", "");
            props.formHandler.setValue("momoname", "");
            props.handleBack(1);
          }}
          type="button"
          className="subscribe btn btn-success btn-block shadow-sm"
        >
          back
        </button>
        <button
          // style={{ width: "100px" }}
          disabled={isLoading}
          onClick={completePayment}
          className="btn btn-success"
          type="button"
        >
          {isLoading ? (
            <span className="spinner-border spinner-border-sm mr-1"></span>
          ) : (
            "Complete Payment"
          )}
        </button>
      </div>
    </div>
  );
};

export default ReviewPaymentPage;
