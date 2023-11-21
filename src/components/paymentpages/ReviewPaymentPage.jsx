import React, { useEffect } from "react";
import { useState } from "react";

const ReviewPaymentPage = (props) => {
  const [finalFormValues, setFinalFormValues] = useState(null);

const creditCardNo = props.formHandler.getValues("paymentCardNo")

//mask credit cards
const maskCreditCardNumber = (creditCardNumber) => {
    const length = creditCardNumber.length;
    const maskedNumbers = creditCardNumber.slice(-2).padStart(length, '*');
    return maskedNumbers;
  };

  const completePayment = () =>{
    props.handleNext()
  }
  

  return (
    <div>
      <h1 className="text-center">Review</h1>

      <div className="d-flex flex-column gap-4">
      <div style={{ backgroundColor: "#CFDFD6", borderRadius: "12px" }} className="  p-4">
        <div className="d-flex justify-content-between">
          <p>Sender name:</p>
          <h5>{props.formHandler.getValues("fullName")}</h5>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <p>Payment method:</p>
            <h5>{props.formHandler.getValues("paymentMethod")}</h5>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <p>Card number: </p>
            <h5>{maskCreditCardNumber(creditCardNo)}</h5>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#CFDFD6" , borderRadius: "12px"}} className="  p-4">
        <div className="d-flex justify-content-between">
          <p>Good gov. ID:</p>
          <h5>{props.formHandler.getValues("fullName")}</h5>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <p>Plan:</p>
            <h5>{props.formHandler.getValues("cards")}</h5>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <p>Donation Amount</p>
            <h5>{props.formHandler.getValues("amount")}</h5>
          </div>
        </div>
      </div>

      </div>

<div className="d-flex justify-content-center mt-4">
    <button onClick={completePayment} className="btn btn-success">Complete Payment</button>
</div>
     
    </div>
  );
};

export default ReviewPaymentPage;
