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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  maxHeight: "80vh",
  overFlow: "scroll",
  p: 4,
  overflowY: "auto",
};
function GgcRegisterModal({ open, handleClose, handleOpen }) {
  //   const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const prevButton = () => {};
  const nextButton = () => {};
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
          <MultiStep
            activeStep={0}
            stepCustomStyle={{
              width: "100%",
              color: "#006436",
              ul: {
                backgroundColor: "blue",
              },
            }}
            prevButton={{
              title: "back",
              style: {
                color: "black",
                border: "none",
                padding: "1em",
                margin: "15px 0",
                marginRight: "10px",
              },
            }}
            nextButton={{
              title: "next",
              style: {
                color: "black",
                border: "none",
                padding: "1em",
                margin: "15px 0",
                marginRight: "10px",
              },
            }}
          >
            <PhoneNumberForm title="1" />
            {/* <EnterOtpForm title="2" />
            <CreatePinForm title="3" /> */}
            <GgcRegForm title="2" />
            <SelectAmount title="3" />
            <ChoosePayMethod title="4" />
          </MultiStep>
        </Box>
      </Modal>
    </div>
  );
}

export default GgcRegisterModal;
