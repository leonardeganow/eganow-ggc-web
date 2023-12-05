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


function AgentCommission() {
  const { info } = useStore()
  //ANCHOR - GETTING THE GET MEMBER TRANSACTION API FUNCTION
  const { getMemberTransactions } = agentAPI()

  const [transaction, setTransactions] = useState([])
  //TODO CONSUME DATA FROM API
  async function consumeTransactions() {
    //ANCHOR GRABBING GLOBAL STATE VARIABLES
    try {
      //ANCHOR - GETTING LIST OF MEMEBERS TRANSACTIONS
      const data = {
        Agentid: info.agentId,
        Membertype: "GGC"
      }
      const getTrans = await getMemberTransactions(data)
      if (getTrans) {
        setTransactions(getTrans.transactionlistList) //ANCHOR - SETTING THE VALUE TO THE STATE
        console.log(getTrans.transactionlistList)
      }
    } catch (err) {
      toast.error("Network Error");
      console.log(err)
    }
  }

  useEffect(() => {
    consumeTransactions()
  }, [])


  return (
    <div className="p-md-5 p-4 h-100">

      {/* NOTE PAGE HEADING */}
      <div>
        <h1 className="text-muted">Agent Transactions</h1>
        <small>List of your transactions</small>
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
                <TableCell className="fw-bold text-muted fs-6">Member Name</TableCell>
                <TableCell className="fw-bold text-muted fs-6">Mobile No.</TableCell>
                <TableCell className="fw-bold text-muted fs-6">Amount (GH)</TableCell>
                <TableCell className="fw-bold text-muted fs-6">transstatus</TableCell>
                <TableCell className="fw-bold text-muted fs-6">Card Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transaction.length > 0 ?
                transaction.map((trans,index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">{trans.membername}</TableCell>
                      <TableCell ><span className="bg-success text-white px-2 py-1 rounded-pill">{trans.mobilenumber}</span></TableCell>
                      <TableCell >{trans.transamount}</TableCell>
                      <TableCell >{trans.transstatus}</TableCell>
                      <TableCell >{trans.cardid}</TableCell>
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

export default AgentCommission;
