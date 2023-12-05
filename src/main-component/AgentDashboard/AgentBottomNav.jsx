import React from "react";
import { FaHome, FaUsers } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { RiLockPasswordFill, RiLogoutCircleRLine } from "react-icons/ri";
import { Link, useLocation,useNavigate } from "react-router-dom";

function AgentBottomNav() {
  const location = useLocation();
const navigate = useNavigate()
  const logOut = ()=>{
    localStorage.clear()
    navigate("/agentlogin")
  }
  return (
    <div className="d-md-none ">
      {" "}
      <div className="anavbar navbar ">
        <Link className="text-white" to="/agentdashboard">
          <div
            role="button"
            className={`d-flex   align-items-center ${
              location.pathname == "/agentdashboard"
                ? "bg-white p-3 text-dark rounded"
                : ""
            }`}
          >
            <FaHome size={20} />
          </div>
        </Link>

        <Link className="text-white" to="transactions">
          <div
            role="button"
            className={`d-flex  align-items-center ${
              location.pathname == "/agentdashboard/transactions"
                ? "bg-white p-3 text-dark rounded"
                : ""
            }`}
          >
            <GiReceiveMoney size={20} />
          </div>
        </Link>

        <Link className="text-white" to="registeredusers">
          <div
            role="button"
            className={`d-flex  align-items-center ${
              location.pathname == "/agentdashboard/registeredusers"
                ? "bg-white p-3 text-dark rounded"
                : ""
            }`}
          >
            <FaUsers size={20} />
          </div>
        </Link>
        <Link className="text-white" to="changepin">
          <div
            role="button"
            className={`d-flex  align-items-center ${
              location.pathname == "/agentdashboard/changepin"
                ? "bg-white p-3 text-dark rounded"
                : ""
            }`}
          >
            <RiLockPasswordFill size={20} />
          </div>
        </Link>
      
          <div
          onClick={logOut}
            role="button"
            className={`d-flex  align-items-center ${
              location.pathname == "" ? "bg-white p-3 text-dark" : ""
            }`}
          >
            <RiLogoutCircleRLine size={20} />
          </div>
   
      </div>
    </div>
  );
}

export default AgentBottomNav;
