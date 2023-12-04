import React from "react";
import AgentInfoCards from "./AgentInfoCards";
import MissionVission from "../../components/MissionVission/MissionVission";
import AgentCards from "./AgentCards";

function RegisterUser() {
  return (
    <div className=" pt-3" style={{ height: "100vh" }}>
      <div className="row m-0 p-0">
        <div className="col-12  d-flex justify-content-end py-2 px-5">agent name</div>
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
