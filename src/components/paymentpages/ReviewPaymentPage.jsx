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
    setIsLoading(true);
    const newData = {
      ...data,
      narration: `${
        props.formHandler.getValues("paymentMethod") === "Debit card"
          ? data.nameOnPaymentCard
          : data.momoname
      } has paid GHS${data.amount}`,
    };

    try {
      const response = await postNewTransaction(newData);
      setIsLoading(false);
      if (response.status === true) {
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
          className="  p-4"
        >
          <div className="d-flex justify-content-between align-items-center">
            <p>Sender name:</p>
            <h5 className="fs-5 fs-md-6">
              {props.formHandler.getValues("paymentMethod") === "Debit card"
                ? data.nameOnPaymentCard
                : data.fullName}
            </h5>
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <p>Payment method:</p>
              <h5>
                {props.formHandler.getValues("paymentMethod") === "Debit card"
                  ? "CARD"
                  : "Mobile money"}
              </h5>
            </div>
          </div>
          {props.formHandler.getValues("paymentMethod") === "Debit card" ? (
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <p>Card number: </p>
                <h5>{maskCreditCardNumber(creditCardNo)}</h5>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-between align-items-center">
              <p>Momo number: </p>
              <h5>{data.paymentCardNo}</h5>
            </div>
          )}
        </div>

        <div
          style={{ backgroundColor: "#CFDFD6", borderRadius: "0.25rem" }}
          className="  p-4"
        >
          <div className="d-flex justify-content-between align-items-center">
            <p>Good gov. ID:</p>
            <h5>
              {props.formHandler.getValues("userStatus") === "INCOMPLETE"
                ? ""
                : data.memberId}
            </h5>
          </div>
          {info.role === "GGC" ? (
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <p>Plan:</p>
                <h5>{data.plan}</h5>
              </div>
            </div>
          ) : (
            ""
          )}
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <p>Donation Amount</p>
              <h5>
                GHS{" "}
                {data.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-4">
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
