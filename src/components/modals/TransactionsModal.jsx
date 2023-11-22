import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";

const style = {
  position: "relative",
  top: "54%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "90vw", // Use viewport width
  maxWidth: "400px", // Set a maximum width if needed
  boxShadow: "40px",
  maxHeight: "85%",
  // overflowY: "scroll",
  borderRadius: "24px",
};
export default function TransactionsModal({ open, handleClose }) {
  const { showReset, setShowReset } = useState(false);
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-white p-2" style={style}>
          <div>
            <h1 className="text-center">Login</h1>
            <form className="d-flex flex-column align-items-center gap-4">
              <input
                type="number"
                {...register("mobileNo")}
                className="form-control w-50"
                placeholder="Enter your Number"
              />
              <input
                type="number"
                {...register("pin")}
                className="form-control w-50"
                placeholder="Enter your pin"
              />
              <button type="submit" className="btn btn-success">
                Login
              </button>

              <p onClick={()=>setShowReset(true)} role="button" className="text-info underline">
                Reset pin
              </p>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
