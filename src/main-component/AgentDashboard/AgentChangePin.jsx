import React from 'react'
import logo from "../../images/instragram/ndclogo-removebg-preview.png";
// import Header from "../../components/Navbar/Navbar";
// import {  useNavigate } from "react-router-dom";
import agentAPI from "../../api/grpcapi/AgentGRPC";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RpcError } from "grpc-web";
// import useStore from "../../formstore/formStore";
// import { IoArrowBackOutline } from "react-icons/io5";

function AgentChangePin() {

  // const { updateRoleAndCardType } = useStore();
  // const navigate = useNavigate();
  const {changeAgentPin } = agentAPI();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  // TODO FUNCTION TO LOG USER IN
  const agentLoginHandler = async (data) => {
    try {
      const response = await changeAgentPin(data);
      if (response.status) {
        // updateRoleAndCardType("", "", "", "", response.message);
        // navigate("/agentdashboard");
        toast("Pin reset successful");
      } else {
        toast(response.message);
      }
      // console.log(response);
    } catch (error) {
      console.error("err", error instanceof RpcError);
      if (error instanceof RpcError) {
        toast.error("Network Error");
        return;
      } else {
        toast.error("Please try again");
      }
    }
  };


  return (
    <div className="p-md-5 p-4 h-100">
      {/* ANCHOR -  HEADING */}
      <div>
        <h1 className="text-muted">Change Pin</h1>
        <small>Change your pin</small>
      </div>

      <div className='w-100 my-5 d-flex justify-content-center align-items-center'>
        <div className='bg-white shadow p-5 shadow rounded'>
        <form
        onSubmit={handleSubmit(agentLoginHandler)}
        action=""
        className="bg-white rounded"
      >
        <div className="d-flex justify-content-center mb-1">
          <img style={{ width: "60px" }} src={logo} alt="" />
        </div>
        <h3 className="text-center mb-4">Change Password</h3>
        <div>
          <input
            {...register("agentMobileNo", { required: true, maxLength: 10 })}
            className={`form-control form-control-lg ${
              errors.agentMobileNo ? "is-invalid" : ""
            }`}
            type="text"
            placeholder="Phone"
          />
        </div>
        <div>
          <input
            {...register("oldPin", { required: true, maxLength: 4 })}
            className={`form-control form-control-lg my-4 ${
              errors.agentPassword ? "is-invalid" : ""
            }`}
            type="password"
            placeholder="Old Pin"
          />
        </div>
        <div>
          <input
            {...register("newPin", { required: true, maxLength: 4 })}
            className={`form-control form-control-lg my-4 ${
              errors.agentPassword ? "is-invalid" : ""
            }`}
            type="password"
            placeholder="New Pin"
          />
        </div>

        <div className="d-flex justify-content-end mt-2">
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn btn-success"
          >
            {isSubmitting ? (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            ) : (
              "Reset "
            )}
          </button>
        </div>
      </form>
        </div>

      </div>


    </div>
  )
}

export default AgentChangePin