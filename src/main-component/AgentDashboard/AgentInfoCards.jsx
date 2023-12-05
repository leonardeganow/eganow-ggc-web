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
  const { getTotalCommission } = TransactionAPI();
  const [registeredMembers, setRegisteredMembers] = useState([]); //registered members list
  const [totalDonations, setTotalDonations] = useState(null); //total amount donated
  const [totalCommission, setTotalCommission] = useState(null); //total commission received

  const { info } = useStore();

  //this functions get all members created by agent
  const getMemberCreatedByAgentTransactionsHandler = async () => {
    try {
      const data = {
        agentId: info.agentId,
      };
      const response = await getMemberCreateByAgent(data);
      console.log(response);
      setRegisteredMembers(response?.membersList);
    } catch (error) {
      console.error(error);
    }
  };

  // //this gets total amount donated by members
  // const totalDonationsHandler = async ()=>{

  //   try {
  //     const data = {
  //       agentId: info.agentId,
  //       Membertype: "GGC"
  //     }
  //     const response = await getTotalDonation(data)
  //     setTotalDonations(response.totaldonation)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  //this gets agents commissions
  const getCommissions = async () => {
    try {
      const data = {
        agentId: info.agentId,
      };
      const response = await getTotalCommission(data);
      setTotalDonations(response?.totalamount);
      setTotalCommission(response?.totalcommission);
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMemberCreatedByAgentTransactionsHandler();
    getCommissions();
  }, []);

  return (
    <div className="p-md-5 p-4 h-100">

    <div className="row p-0 m-0 gy-4">
      <div className="col-md-4 col-12  ">
        <div className="shadow rounded p-4 border border-2 border-success">
          <p className=" fs-5 ">Total commission</p>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className=" m-0">GHS1,620</h2>
            <GiCash size={40} className="text-dark" />
          </div>
        </div>
      </div>
      <div className="col-md-4 col-12 ">
        <div className="shadow  rounded p-4 border border-2 border-danger">
          <p className=" fs-5 ">Total amount donated</p>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className=" m-0">GHS{totalDonations}</h2>
            <GiReceiveMoney size={40} className="text-dark" />
          </div>
        </div>
      </div>
      <div className="col-md-4 col-12 ">
        <div className="shadow rounded p-4 border border-2 border-dark">
          <p className=" fs-5 ">Members registered</p>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className=" m-0">{registeredMembers?.length}</h2>
            <FaUsers size={40} className="text-dark" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AgentInfoCards;
