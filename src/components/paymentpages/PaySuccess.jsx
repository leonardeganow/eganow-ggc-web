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

  // const onSubmitTransaction = async (start, end) => {
  //   const data = getValues();
  //   console.log(data);
  //   setIsLoading(true);
  //   const formatedData = {
  //     ...data,
  //     // startDate: formatDate(data?.startDate), //sending formated startDate
  //     // endDate: formatDate(data?.endDate), //seending formated endDate
  //     startDate: start, //sending formated startDate
  //     endDate: end, //seending formated endDate
  //   };
  //   try {
  //     // sending api request
  //     const transaction = await getTransactions(formatedData);
  //     console.log(transaction);
  //     setIsLoading(false);
  //     setShowTable(true);
  //     setTransaction(transaction.translistList); //assigning the reponse to the state
  //   } catch (err) {
  //     if (err.message) {
  //       setIsLoading(false);
  //       // toast("Network Error");
  //     }
  //     console.log(err);
  //     toast("Invalid date format");
  //   }
  // };
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
        {transType === "Debit card"
          ? "Your payment was successful"
          : "You will receive a prompt from your mobile operator to confirm."}
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
