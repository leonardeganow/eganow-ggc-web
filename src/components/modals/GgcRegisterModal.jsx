import * as React from "react";
import Modal from "@mui/material/Modal";
import GgcRegForm from "../forms/GgcRegForm";
import PhoneNumberForm from "../forms/PhoneNumberForm";
import ChoosePayMethod from "../forms/ChoosePayMethod";
import SelectAmount from "../forms/SelectAmount";
import PaySuccess from "../paymentpages/PaySuccess";
import { useForm } from "react-hook-form";
import ReviewPaymentPage from "../paymentpages/ReviewPaymentPage";
import useStore from "../../formstore/formStore";

const style = {
  position: "relative",
  top: "54%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw", // Use viewport width
  maxWidth: "600px", // Set a maximum width if needed
  boxShadow: "40px",
  maxHeight: "85%",
  // overflowY: "scroll",
  borderRadius: "0.25rem",
};
function GgcRegisterModal({ open, handleClose, handleOpen, cardTypeValues }) {
  const [btnOpen, setBtnOpen] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(1);
  const { info } = useStore();
  const totalSteps = 5;

  const handleNext = (page) => {
    // setBtnOpen(false);
    // setCurrentStep((prevStep) => prevStep + 1);
    setCurrentStep((prevStep) => prevStep + page);
  };

  const defaultValues = {
    telephoneNo: "",
    otp: "",
    pin: "",
    confirmPin: "",
    role: "",
    paymentMethod: "Debit card",
    amount: info.amount,
    memberId: "",
    ndcCardNo: "",
    transType: "",
    plan: "",
    momonumber: "",
    momoname: "",
  };

  const formHandler = useForm({ defaultValues });

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <PhoneNumberForm
            setBtnOpen={setBtnOpen}
            formHandler={formHandler}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <GgcRegForm
            setBtnOpen={setBtnOpen}
            cardTypeValues={cardTypeValues}
            handleNext={handleNext}
            formHandler={formHandler}
          />
        );

      case 3:
        return (
          <SelectAmount
            setBtnOpen={setBtnOpen}
            handleNext={handleNext}
            formHandler={formHandler}
          />
        );

      case 4:
        return (
          <ChoosePayMethod
            setBtnOpen={setBtnOpen}
            handleNext={handleNext}
            handleBack={handleBack}
            formHandler={formHandler}
          />
        );

      case 5:
        return (
          <ReviewPaymentPage
            setBtnOpen={setBtnOpen}
            handleNext={handleNext}
            handleBack={handleBack}
            formHandler={formHandler}
          />
        );

      case 6:
        return <PaySuccess setBtnOpen={setBtnOpen} handleNext={handleNext} />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={`bg-white p-3 p-md-3 ${
            currentStep === 2 || currentStep === 4 ? "modalbehav" : ""
          } `}
          style={style}
        >
          <div>
            <p>{/* Step {currentStep} of {totalSteps} */}</p>
          </div>

          {renderForm()}
          {/* <div
            style={{
              display: currentStep === 1 ? "" : "",
            }}
            className=" d-flex justify-content-between "
          >
            {currentStep > 1 && (
              <button
                style={{
                  display: currentStep === 2 || currentStep === 3 ? "none" : "",
                }}
                className="bg-success btn text-light" 
                onClick={handleBack}
              >
                Back
              </button>
            )}
            {currentStep < totalSteps && (
              <button
                style={{
                  display: currentStep === 0 || currentStep === 2 || currentStep === 3 ? "none" : "",
                }}
                // disabled={!btnOpen}
                className="bg-success btn text-light"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div> */}
        </div>
      </Modal>
    </div>
  );
}

export default GgcRegisterModal;
