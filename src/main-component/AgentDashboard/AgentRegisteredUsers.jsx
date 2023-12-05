
import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import agentAPI from "../../api/grpcapi/AgentGRPC";
import useStore from "../../formstore/formStore";
import { toast } from "react-toastify";
import { FaDownload } from "react-icons/fa";

function AgentRegisteredUsers() {
  const { info } = useStore()
  //ANCHOR - GETTING THE GET MEMBER TRANSACTION FUNCTION
  const { getMemberCreateByAgent } = agentAPI()

  const [regMembers, setRegMembers] = useState([]) //ANCHOR - SETTING STATE TO KEEP THE ARRAY OF MEMEBERS
  //TODO CONSUME DATA FROM API
  async function consumeRegisteredMembers() {
    //ANCHOR GRABBING GLOBAL STATE VARIABLES
    const data = {
      agentId: "AG001",//info.agentId,
      Membertype: "GGC"
    }
    try {
      const getRegisteredMembers = await getMemberCreateByAgent(data)
      if(getRegisteredMembers) {
        setRegMembers(getRegisteredMembers.membersList)
        console.log(getRegisteredMembers.membersList)
      }
    } catch (err) {
      toast.error("Network Error");
    }
  }

  useEffect(() => {
    consumeRegisteredMembers()
  }, [])



  return (
    <div className="p-md-5 p-4 h-100">

      {/* NOTE PAGE HEADING */}
      <div>
        <h1 className="text-muted">Registered Members</h1>
        <small>List of your registered members</small>
      </div>


      {/* NOTE LIST OF TRANSACTION (TABLE) */}
      <div className="my-md-5 my-4">
        <div className="d-flex justify-content-end py-3">
        <button className="btn btn-success btn-sm d-inline-flex align-items-center gap-2"><FaDownload /> Download</button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="fw-bold text-muted fs-6">Reg. Date</TableCell>
                <TableCell className="fw-bold text-muted fs-6">Member Name</TableCell>
                <TableCell className="fw-bold text-muted fs-6">Card Name</TableCell>
                <TableCell className="fw-bold text-muted fs-6">Member ID</TableCell>
                <TableCell className="fw-bold text-muted fs-6">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {regMembers.length > 0 ?
                regMembers.map((member,index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">{new Date(member.registrationdate).toLocaleDateString()}</TableCell>
                      <TableCell ><span className="bg-success text-white px-2 py-1 rounded-pill">{member.membername}</span></TableCell>
                      <TableCell >{member.cardnumber}</TableCell>
                      <TableCell >{member.memberid}</TableCell>
                      <TableCell >{member.cardname}</TableCell>
                    </TableRow>
                  )
                }) : 
                  <TableRow>
                    <TableCell colSpan={5} className="fw-bold text-danger fs-3" align='center'>No Data Found!</TableCell>
                  </TableRow>
                
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </div>);
}

export default AgentRegisteredUsers;
