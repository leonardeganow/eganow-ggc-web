import React from "react";
import { FaCheckCircle } from "react-icons/fa";


function PaySuccess(props) {


  const transType = props.formHandler.getValues("paymentMethod");
  return (
    <div>
      <h1 className="text-center text-success">Payment successful</h1>
      <div className="d-flex justify-content-center">
        <FaCheckCircle
          style={{ fontSize: "100px" }}
          className="text-success my-4"
        />
      </div>

      <h5 className="text-center my-4">
        {transType === "Debit card"
          ? "Your payment was successful"
          : "Transaction initiated.You will receive a prompt from your mobile operator to confirm."}
      </h5>
      <div className="d-flex justify-content-center my-2">
        <button className="btn btn-success">Go back home</button>
      </div>
    </div>
  );
}

export default PaySuccess;
