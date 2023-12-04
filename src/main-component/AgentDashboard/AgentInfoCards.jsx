import React from "react";
import { GiCash } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";


function AgentInfoCards() {
  return (
    <div className="row  p-0 px-3 m-0 justify-content-evenly gap-3">
      <div className="col-md-3 border border-dark rounded py-md-3">
        <p className=" fs-5 ">Total commission</p>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className=" m-0">GHS1,620</h2>
          <GiCash size={40} className="text-dark"/>
        </div>
      </div>
      <div className="col-md-3 border border-dark  rounded p-md-3 bg-">
        <p className=" fs-5 ">Total amount donated</p>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className=" m-0">GHS17,620</h2>
          <GiReceiveMoney size={40} className="text-dark"/>
        </div>
      </div>
      <div  className="col-md-3 border border-dark rounded p-md-3">
        <p className=" fs-5 ">Members registered</p>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className=" m-0">40</h2>
          <FaUsers size={40} className="text-dark"/>
        </div>
      </div>
    </div>
  );
}

export default AgentInfoCards;
