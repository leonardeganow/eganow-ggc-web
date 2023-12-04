import React from "react";
import logo from "../../images/instragram/ndclogo-removebg-preview.png";
import { FaHome } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";

const AgentSidebar = () => {
  const location = useLocation();
  return (
    <div
      style={{ height: "100vh", backgroundColor: "#006436" }}
      className=" d-none d-md-block text-white p-2"
    >
      <div className="d-flex flex-column align-items-center mb-5">
        <img style={{ width: "60px" }} src={logo} alt="" />
        <h3 className="text-white">Agent dashboard</h3>
      </div>

      <Link className={`text-white   `} to="/agentdashboard">
        <div
          role="button"
          className={` d-flex  align-items-center gap-3 p-3 ${
            location.pathname == "/agentdashboard"
              ? "bg-white text-dark rounded"
              : ""
          }`}
        >
          <FaHome size={20} />
          Dashboard
        </div>
      </Link>

      <Link className="text-white" to="transactions">
        <div
          role="button"
          className={` d-flex  align-items-center gap-3 p-3 ${
            location.pathname == "/agentdashboard/transactions"
              ? "bg-white text-dark rounded"
              : ""
          }`}
        >
          <GiReceiveMoney size={20} />
          Transactions list
        </div>
      </Link>

      <Link className="text-white" to="registeredusers">
        <div
          role="button"
          className={` d-flex  align-items-center gap-3 p-3 ${
            location.pathname == "/agentdashboard/registeredusers"
              ? "bg-white text-dark rounded"
              : ""
          }`}
        >
          <FaUsers size={20} />
          Registered users
        </div>
      </Link>
      <Link className="text-white" to="changepin">
        <div
          role="button"
          className={` d-flex  align-items-center gap-3 p-3 ${
            location.pathname == "/agentdashboard/changepin"
              ? "bg-white text-dark rounded"
              : ""
          }`}
        >
          <RiLockPasswordFill size={20} />
          Change pin
        </div>
      </Link>
      <Link className="text-white" to="/agentlogin">
        <div role="button" className=" d-flex  align-items-center gap-3   p-3">
          <RiLogoutCircleRLine size={20} />
          Log out
        </div>
      </Link>
    </div>
  );
};

export default AgentSidebar;
