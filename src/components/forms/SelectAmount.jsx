import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import useStore from "../../formstore/formStore";

function SelectAmount(props) {
  const { info } = useStore();

  const schema = yup.object().shape({
    amount: yup
      .number()
      .required("Amount is required")
      .positive("Amount must be positive"),
  });

  // const {
  //   handleSubmit,
  //   register,
  //   setValue,
  //   getValues,
  //   formState: { errors },
  // } = useForm({
  //   mode: "onChange",
  //   resolver: yupResolver(schema),
  // });

  const defaultValues = {
    amount: "",
  };
  // console.log(getValues("fullName"));

  const [selectedAmount, setSelectedAmount] = useState(defaultValues.amount);

  // Function to update the form field value when a button is clicked
  const handleButtonClick = (amount) => {
    setSelectedAmount(amount); // Update the state
    props.formHandler.setValue("amount", amount);
  };

  const onSubmit = () => {
    if (info.role === "JM") {
      alert(info.amount);
      // props.formHandler.setValue("amount", info.amount);
    }
    props.handleNext(1);

    const pin = props.formHandler.getValues();
    console.log(pin);
  };



  return (
    <div>
      {" "}
      <h1>Make payment</h1>
      <div className="py-4">
        <div className="row g-3">
          {[10, 20, 50, 100, 150, 200, 250, 300].map((amount) => (
            <div key={amount} className="col-md-3 col-6">
              <button
                className="btn w-100 fw-bold btn-outline-success btn-md"
                onClick={() => handleButtonClick(amount)}
              >
                {amount} GH
              </button>
            </div>
          ))}
        </div>

        {/* FORM FIELD */}
        <form
          onSubmit={props.formHandler.handleSubmit(onSubmit)}
          className="row my-4 g-2"
        >
          <div className="col-md-10 ">
            <div>
              <input
                {...props.formHandler.register("amount")}
                className={`form-control h-full ${
                  props.formHandler.formState.errors.amount
                    ? "is-invalid"
                    : null
                }`}
                type="input"
                placeholder="Enter an amount"
              />
            </div>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn   btn-success   ">
              Continue
            </button>
          </div>
        </form>
        {/* {errors.amount && <span>{errors.amount.message}</span>} */}
      </div>
    </div>
  );
}

export default SelectAmount;
