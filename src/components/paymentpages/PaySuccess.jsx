import React from "react";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";

function PaySuccess(props) {
  const transType = props.formHandler.getValues("paymentMethod");
  const { register, handleSubmit, setValue, watch, getValues } = useForm({
    defaultValues: {
      // memeberType: props.formHandler.getValues("role"),
      role: props.formHandler.getValues("role"),

      startDate: "", //formatDate(formattedLastMonthDate),
      endDate: "", // formatDate(formattedCurrentDate),
      memberid: props.formHandler.getValues("memberId"),
      cardTypeId: "",
    },
  });
  const data = props.formHandler.getValues();
  console.log(data);

  return (
    <div>
      <h1 className="text-center text-success">Payment Initiated</h1>
      <div className="d-flex justify-content-center">
        <FaCheckCircle
          style={{ fontSize: "100px" }}
          className="text-success my-4"
        />
      </div>

      <h5 className="text-center my-4">
        {transType === "Debit card" ? (
          <div
            dangerouslySetInnerHTML={{
              __html: `${props.formHandler.getValues("paymentUrl")}`,
            }}
          ></div>
        ) : (
          "You will receive a prompt from your mobile operator to confirm."
        )}
      </h5>
      <div className="d-flex justify-content-end my-2">
        <button onClick={() => props.handleNext(1)} className="btn btn-success">
          View transactions
        </button>
      </div>
    </div>
  );
}

export default PaySuccess;
