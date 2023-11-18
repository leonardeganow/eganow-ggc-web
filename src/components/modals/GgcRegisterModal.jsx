import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import GgcRegForm from "../forms/GgcRegForm";
import MultiStep from "react-multistep";
import PhoneNumberForm from "../forms/PhoneNumberForm";
import CreatePinForm from "../forms/CreatePinForm";
import EnterOtpForm from "../forms/EnterOtpForm";
import ChoosePayMethod from "../forms/ChoosePayMethod";
import SelectAmount from "../forms/SelectAmount";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form, ProgressBar } from "react-bootstrap";

const style = {
  position: "absolute",
  top: "54%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw", // Use viewport width
  maxWidth: "600px", // Set a maximum width if needed
  height: "80vh", // Use viewport height
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
function GgcRegisterModal({ open, handleClose, handleOpen }) {
  //   const [open, setOpen] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(1);
  const totalSteps = 5;

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <PhoneNumberForm />;
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
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
          <div className=" d-flex justify-content-center gap-4">
            {currentStep > 1 && (
              <button
                style={{
                  color: "black",
                  border: "none",
                  padding: "1em",
                  marginTop: "2em",
                  color: " white",
                }}
                className="bg-success"
                onClick={handleBack}
              >
                Back
              </button>
            )}
            {currentStep < totalSteps && (
              <button
                style={{
                  color: "black",
                  border: "none",
                  padding: "1em",
                  marginTop: "2em",
                  color: " white",
                }}
                className="bg-success"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default GgcRegisterModal;
