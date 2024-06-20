import React from "react";
import logo from "../../images/instragram/ndclogo-removebg-preview.png";
// import Header from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import agentAPI from "../../api/grpcapi/AgentGRPC";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RpcError } from "grpc-web";
import useStore from "../../formstore/formStore";
import { IoArrowBackOutline } from "react-icons/io5";

const AgentLoginPage = () => {
  const { updateRoleAndCardType } = useStore();
  const navigate = useNavigate();
  const { loginAgent } = agentAPI();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  //loginagent
  const agentLoginHandler = async (data) => {
    try {
      const response = await loginAgent(data);
      if (response.status) {
        updateRoleAndCardType("GGC", "", "", "", response.message); //HARDCODING GGC
        localStorage.setItem("agentid", response.message);
        navigate("/agentdashboard");
      } else {
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
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
    <div
      style={{ height: "100vh", backgroundColor: "#006436" }}
      className="d-flex justify-content-center align-items-center"
    >
      <form
        onSubmit={handleSubmit(agentLoginHandler)}
        action=""
        className="bg-white p-5 rounded relative m-3 m-md-0"
      >
        <Link to="/" className="text-success  border-bottom-2 py-1">
          <IoArrowBackOutline size={20} className="pr-1" />
        </Link>

        <div className="d-flex justify-content-center mb-1">
          <img style={{ width: "80px" }} src={logo} alt="" />
        </div>
        <h3 className="text-center mb-4">Agent Login</h3>
        <div>
          <input
            {...register("agentMobileNo", { required: true, maxLength: 10 })}
            className={`form-control form-control-lg ${
              errors.agentMobileNo ? "is-invalid" : ""
            }`}
            type="text"
            placeholder="Agent Id"
          />
        </div>
        <div>
          <input
            {...register("agentPassword", { required: true, maxLength: 4 })}
            className={`form-control form-control-lg my-4 ${
              errors.agentPassword ? "is-invalid" : ""
            }`}
            type="password"
            placeholder="Password"
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
              "Login"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgentLoginPage;
