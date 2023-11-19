import * as React from "react";
import Modal from "@mui/material/Modal";
import GgcRegForm from "../forms/GgcRegForm";
import PhoneNumberForm from "../forms/PhoneNumberForm";
import ChoosePayMethod from "../forms/ChoosePayMethod";
import SelectAmount from "../forms/SelectAmount";

const style = {
  position: "relative",
  top: "54%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw", // Use viewport width
  maxWidth: "600px", // Set a maximum width if needed
  boxShadow: "40px",
  borderRadius: "24px",

};
function GgcRegisterModal({ open, handleClose, handleOpen }) {
  const [btnOpen, setBtnOpen] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(1);
  const totalSteps = 5;

  const handleNext = () => {
    setBtnOpen(false);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <PhoneNumberForm setBtnOpen={setBtnOpen} handleNext={handleNext}/>;
      // Add more cases for additional steps
      case 2:
        return <GgcRegForm />;

      case 3:
        return <SelectAmount />;

      case 4:
        return <ChoosePayMethod />;
      default:
        return null;
    }
  };

  return (
    <div className="border">
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={`bg-white p-5 ${currentStep === 2 ? "modalbehav": ""} `} style={style} sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          {/* <GgcRegForm /> */}
          <div>
            <p>
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          {renderForm()}
          <div
            style={{
              marginLeft: currentStep === 1 ? "480px" : "",
            }}
            className=" d-flex justify-content-between "
          >
            {currentStep > 1 && (
              <button
            
                className="bg-success btn"
                onClick={handleBack}
              >
                Back
              </button>
            )}
            {currentStep < totalSteps && (
              <button
                disabled={!btnOpen}
           
                className="bg-success btn"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default GgcRegisterModal;
