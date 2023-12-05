import React from "react";
import AgentInfoCards from "./AgentInfoCards";
import AgentCards from "./AgentCards";
import useStore from "../../formstore/formStore";


function RegisterUser() {
const {info} = useStore()
const agentCode = localStorage.getItem("agentid")


  return (
    <div className=" pt-3" style={{ height: "100vh" , overflow: "auto"}}>
      <div className="row m-0 p-0">
        <div className="col-12  d-flex justify-content-end py-2 px-5 text-dark fw-bolder">Agent Id: {agentCode}</div>
          <AgentInfoCards/>
      </div>
      <h3 className="text-center mt-5">Good Governance packages</h3>
      <div style={{height: "80%", overflow: "auto"}} className="row mt-0">
        <AgentCards/>
      </div>
    </div>
  ); 
}

export default RegisterUser;
