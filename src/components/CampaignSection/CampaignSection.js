import React, { useState } from "react";
import { Link } from "react-router-dom";
import cImag from "../../images/donate2.webp";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import GgcRegisterModal from "../modals/GgcRegisterModal";
import GgcRegForm from "../forms/GgcRegForm";
import PhoneNumberForm from "../forms/PhoneNumberForm";
import ChoosePayMethod from "../forms/ChoosePayMethod";
import SelectAmount from "../forms/SelectAmount";
import GgcRegisterModal from "../modals/GgcRegisterModal";
import useStore from "../../formstore/formStore";

import TransactionAPI from "../../api/grpcapi/TransactionGRPC";

//get ggc card packages and store in zustand state

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
  borderRadius: "24px",
};

const CampaignSection = (props) => {
  // TESTING API REQUEST
  // const {postNewTransaction,postCardTransaction} = TransactionAPI()
  // async function testAPi(){
  //   const getData = await postCardTransaction()
  //   console.log(getData)
  // }
  // testAPi()

  // SETTING GLOBAL STATE VALUE FOR JM
  const { info, updateRoleAndCardType } = useStore();
  // function to set Global state value
  function handleCardGet(selectAmount) {
    const newRole = "JM"; //create the role value
    updateRoleAndCardType(newRole, "", "", selectAmount); //setting values to global state reducer
  }

  // MODAL STATES
  const [open, setOpen] = React.useState(false);
  const [btnOpen, setBtnOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //creating amount state
  const [amount, setAmount] = useState(0);

  console.log(amount);

  const handleSubmit = () => {
    handleCardGet(amount); //passing amount value the donate button is clicked
  };

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // const renderForm = () => {
  //   switch (currentStep) {
  //     case 1:
  //       return (
  //         <PhoneNumberForm setBtnOpen={setBtnOpen} handleNext={handleNext} />
  //       );

  //     case 2:
  //       return (
  //         <ChoosePayMethod setBtnOpen={setBtnOpen} handleNext={handleNext} />
  //       );
  //     case 3:
  //       return <h3>Review Page</h3>
  //     default:
  //       return null;
  //   }
  // };

  return (
    <section
      id="donate"
      className="wpo-running-campaign-section section-padding"
    >
      <div className="container">
        <div className="running-campaign-wrap">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="campaign-img">
                <img src={cImag} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="running-campaign-content">
                {/* <span className="sub-title">DONATE TODAY!</span> */}
                <h2 className="text-success">DONATE TODAY</h2>
                <div className="py-4">
                  <div className="row g-3">
                    <div className="col-md-3 col-6">
                      <button
                        className="btn w-100 fw-bold btn-outline-success btn-md"
                        onClick={() => setAmount(20)}
                      >
                        20 GH
                      </button>
                    </div>
                    <div className="col-md-3 col-6">
                      <button
                        className="btn w-100 fw-bold btn-outline-success btn-md"
                        onClick={() => setAmount(50)}
                      >
                        50 GH
                      </button>
                    </div>
                    <div className="col-md-3 col-6">
                      <button
                        className="btn w-100 fw-bold btn-outline-success btn-md"
                        onClick={() => setAmount(100)}
                      >
                        100 GH
                      </button>
                    </div>
                    <div className="col-md-3 col-6">
                      <button
                        className="btn w-100 fw-bold btn-outline-success btn-md"
                        onClick={() => setAmount(150)}
                      >
                        150 GH
                      </button>
                    </div>
                    <div className="col-md-3 col-6">
                      <button
                        className="btn w-100 fw-bold btn-outline-success btn-md"
                        onClick={() => setAmount(200)}
                      >
                        200 GH
                      </button>
                    </div>
                    <div className="col-md-3 col-6">
                      <button
                        className="btn w-100 fw-bold btn-outline-success btn-md"
                        onClick={() => setAmount(250)}
                      >
                        250 GH
                      </button>
                    </div>
                    <div className="col-md-3 col-6">
                      <button
                        className="btn w-100 fw-bold btn-outline-success btn-md"
                        onClick={() => setAmount(300)}
                      >
                        300 GH
                      </button>
                    </div>
                    <div className="col-md-3 col-6">
                      <button
                        className="btn w-100 fw-bold btn-outline-success btn-md"
                        onClick={() => setAmount(350)}
                      >
                        350 GH
                      </button>
                    </div>
                  </div>

                  {/* FORM FIELD */}
                  <form className="row my-4 g-2">
                    <div className="col-md-9">
                      <div>
                        <input
                          className="form-control p-2"
                          type="number"
                          placeholder="Enter an amount"
                          value={amount}
                          step={10}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <button
                        type="button"
                        className="btn p-2 w-100 btn-success btn-md fw-bold"
                        onClick={() => {
                          handleOpen();
                          handleSubmit();
                        }}
                      >
                        DONATE NOW
                      </button>
                    </div>
                  </form>
                  {/* END OF FORM */}
                </div>
              </div>
            </div>
          </div>
          <div className="shape-3">
            <svg width="157" height="135" viewBox="0 0 157 135" fill="none">
              <circle
                cx="78.5"
                cy="78.5"
                r="78.5"
                fill="url(#paint0_linear_1_82)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_82"
                  x1="78.5"
                  y1="157"
                  x2="78.5"
                  y2="6.98189e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#274DCF" stopOpacity="0.25" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="shape-4">
            <svg width="157" height="123" viewBox="0 0 157 123" fill="none">
              <circle
                cx="78.5"
                cy="44.5"
                r="78.5"
                transform="rotate(-180 78.5 44.5)"
                fill="url(#paint0_linear_1_83)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_83"
                  x1="78.5"
                  y1="123"
                  x2="78.5"
                  y2="-34"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#DE2045" stopOpacity="0.25" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* MODAL HERE WITH FORM STEPS HERE*/}
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <div>
            <p className="fw-bold">
              Step {currentStep} of {totalSteps}
            </p>
          </div>
          </Typography>
          <div>
          {renderForm()}

          <div className=" d-flex justify-content-between flex-start">
            {currentStep > 1 && (
              <button
                style={{
                  color: " white",
                }}
                className="bg-danger btn btn-sm"
                onClick={handleBack}
              >
                Back
              </button>
            )}
            {currentStep < totalSteps && (
              <button
                style={{
                  // color: "white",
                }}
                className="bg-success btn btn-sm text-white"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
          </div>
        </Box>
      </Modal> */}

      {open && (
        <GgcRegisterModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      )}

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={`bg-white p-5 ${currentStep === 2 ? "modalbehav" : ""} `}
          style={style}
          sx={style}
        >

          <div>
            <p>
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          {renderForm()}
        </div>
      </Modal> */}
    </section>
  );
};

export default CampaignSection;
