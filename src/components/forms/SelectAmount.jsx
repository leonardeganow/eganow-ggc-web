import React, { useEffect } from "react";
import { useState } from "react";
import useStore from "../../formstore/formStore";

function SelectAmount(props) {
  const { info } = useStore();

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

  const onSubmit = async () => {
    const result = await props.formHandler.trigger("amount");
    // console.log(result);
    if (!result) {
      return;
    }
    // console.log(info.role);
    if (info.role === "JM") {
      props.formHandler.setValue("transType", info.role);

      props.handleNext(1);
    } else {
      // alert("h");
      props.formHandler.setValue("transType", info.role);

      props.handleNext(1);
    }

    // const pin = props.formHandler.getValues();
    // console.log(pin);
  };

  useEffect(() => {
      props.formHandler.setValue("type", info.type);


    if (info.type === 2) {
      props.formHandler.setValue("amount", 50);
      setSelectedAmount(50);
    }
  }, [info.type]);

  return (
    <div>
      {" "}
      <h1>Make payment</h1>
      <div className="py-4">
        <div className="row g-3">
          {[20000, 10000, 5000, 2000, 1000, 500, 250, 200].map((amount) => (
            <div key={amount} className="col-md-3 col-6">
              <button
                disabled={
                  info.type === 2
                }
                className="btn w-100 fw-bold btn-outline-success btn-md"
                onClick={() => handleButtonClick(amount)}
              >
                {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} GH
              </button>
            </div>
          ))}
        </div>

        {/* FORM FIELD */}
        <form className="row my-4 g-2">
          <div className="col-md-10 ">
            <div>
              <input
                disabled={
                  info.type === 2
                }
                {...props.formHandler.register("amount")}
                className={`form-control h-full ${
                  props.formHandler.formState.errors.amount
                    ? "is-invalid"
                    : null
                }`}
                type="number"
                placeholder="Enter an amount"
              />
            </div>
          </div>
          <div className="col-md-2">
            <button
              onClick={onSubmit}
              type="button"
              className="btn   btn-success   "
            >
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
