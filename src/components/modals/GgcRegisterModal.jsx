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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw", // Use viewport width
  maxWidth: "500px", // Set a maximum width if needed
  height: "90vh", // Use viewport height
  maxHeight: "70vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
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

          <Routes>
            <Route path="/" element={<PhoneNumberForm />}>
              <Route path="/ggcreg" element={<GgcRegForm />} />
            </Route>
          </Routes>
        </Box>
      </Modal>
    </div>
  );
}

export default GgcRegisterModal;
