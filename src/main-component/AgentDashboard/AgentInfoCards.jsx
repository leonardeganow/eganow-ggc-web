import React, { useEffect, useState } from "react";
import { GiCash } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import agentAPI from "../../api/grpcapi/AgentGRPC";
import useStore from "../../formstore/formStore";
import TransactionAPI from "../../api/grpcapi/TransactionGRPC";


function AgentInfoCards() {
  const { getMemberTransactions, getTotalDonation, getMemberCreateByAgent } =
    agentAPI(); //api calls
    const {getTotalCommission} = TransactionAPI()
    const [registeredMembers,setRegisteredMembers] = useState([])//registered members list
    const [totalDonations,setTotalDonations] = useState(null)//registered members list

  const { info } = useStore();

  //this functions get all members created by agent
  const getMemberCreatedByAgentTransactionsHandler = async () => {
    try {
      const data = {
        agentId: info.agentId
      }
      const response = await getMemberCreateByAgent(data);
      setRegisteredMembers(response.membersList)
    } catch (error) {
      console.error(error);
    }
  };

  //this gets total amount donated by members
  const totalDonationsHandler = async ()=>{

    try {
      const data = {
        agentId: info.agentId,
        Membertype: "GGC"
      }
      const response = await getTotalDonation(data)
      setTotalDonations(response.totaldonation)
    } catch (error) {
      console.error(error)
    }
  }

  //this gets agents commissions
  const getCommissions =async ()=>{
    try {
   const response = await getTotalCommission()
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getMemberCreatedByAgentTransactionsHandler()
    totalDonationsHandler()
    getCommissions()
  }, []);

  return (
    <div className="row  p-0 px-3 m-0 justify-content-evenly gap-3">
      <div className="col-md-3 col-10  border border-dark rounded py-md-3">
        <p className=" fs-5 ">Total commission</p>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className=" m-0">GHS1,620</h2>
          <GiCash size={40} className="text-dark" />
        </div>
      </div>
      <div className="col-md-3 col-10 border border-dark  rounded p-md-3 bg-">
        <p className=" fs-5 ">Total amount donated</p>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className=" m-0">GHS{totalDonations}</h2>
          <GiReceiveMoney size={40} className="text-dark" />
        </div>
      </div>
      <div className="col-md-3 col-10 border border-dark rounded p-md-3">
        <p className=" fs-5 ">Members registered</p>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className=" m-0">{registeredMembers?.length}</h2>
          <FaUsers size={40} className="text-dark" />
        </div>
      </div>
    </div>
  );
}

export default AgentInfoCards;
