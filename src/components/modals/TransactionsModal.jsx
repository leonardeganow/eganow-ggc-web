import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import membersGRPC from "../../api/grpcapi/membersGRPC";
import { toast } from "react-toastify";

const style = {
  position: "relative",
  top: "54%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw", // Use viewport width
  maxWidth: "600px", // Set a maximum width if needed
  boxShadow: "40px",
  // maxHeight: "85%",
  // overflowY: "scroll",
  borderRadius: "1rem",
};
export default function TransactionsModal({ open, handleClose }) {
  const { loginMember } = membersGRPC();
  const { showReset, setShowReset } = useState(false);
  const { register, handleSubmit } = useForm();

  //login member
  const login = async (data) => {
    try {
      const response = await loginMember(data);
      console.log(response);
      toast(response.message);
    } catch (error) {
      console.error(error);
    }
  };

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
            <p className="text-center">Login to view transactions</p>
            <form
              onSubmit={handleSubmit(login)}
              className="d-flex flex-column align-items-center gap-4"
            >
              <input
                type="number"
                {...register("telephoneNo")}
                className="form-control w-50"
                placeholder="Enter your Number"
              />
              <input
                type="password"
                {...register("pin")}
                className="form-control w-50"
                placeholder="Enter your pin"
              />

              <div className="d-flex  justify-content-between w-100">
                <button
                  onClick={() => setShowReset(true)}
                  role="button"
                  // style={{ fontSize: "12px" }}
                  className="btn btn-info text-light"
                >
                  Reset pin
                </button>

                <button type="submit" className="btn btn-success">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
