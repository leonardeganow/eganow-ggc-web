import React from "react";
import { FaCheckCircle } from "react-icons/fa";


function PaySuccess() {
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
      'Transaction initiated.You will receive a prompt from vodafone to confirm.'
      </h5>
      <div className="d-flex justify-content-center my-2">
        <button className="btn btn-danger">Go back home</button>
      </div>
    </div>
  );
}

export default PaySuccess;
