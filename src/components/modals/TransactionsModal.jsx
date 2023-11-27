import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import membersGRPC from "../../api/grpcapi/membersGRPC";
import { toast } from "react-toastify";

// MATERIAL UI FOR TABLE
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TransactionAPI from "../../api/grpcapi/TransactionGRPC";

const style = {
  position: "relative",
  top: "54%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw", // Use viewport width
  maxWidth: "800px", // Set a maximum width if needed
  boxShadow: "40px",
  // maxHeight: "85%",
  // overflowY: "scroll",
  borderRadius: "1rem",
};
export default function TransactionsModal({ open, handleClose }) {
  const {getTransactions} = TransactionAPI()
  const { loginMember } = membersGRPC();
  const [showLogin,setShowLogin]= useState(true) //state to show or hide the login page
  const { showReset, setShowReset } = useState(false);
  const { register, handleSubmit } = useForm();
  const [transactions,setTransaction] = useState([])

  const getMemberTransaction = async()=>{
    try{
      const transaction = await getTransactions({})
      console.log(transaction)
    }catch(err){
      console.log(err)
    }

  }

  // getMemberTransaction()

  //login member
  const login = async (data) => {
    try {
      const response = await loginMember(data);
      if(response.message == "Success" && response.status == true){
        // getch transaction of this user based on his start and end data

        // set showloging to false in other to display list of transactions
        setShowLogin(false)
      }
      console.log(response);

      toast(response.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-white p-2" style={style}>
          <div>
            {/* if show login is true show the login page else hide */}
            {
              showLogin == true && (<div><h1 className="text-center">Login</h1>
              <p className="text-center">Login to view transactions</p>
              <form
                onSubmit={handleSubmit(login)}
                className="d-flex flex-column align-items-center gap-4"
              > 
              {/* SELECT INPUT FOR USER TO SELECT HIS MEMBER TYPE */}
                <select name="" id="" className="form-control w-50" {...register('transType')}>
                  <option value="GGC">Select Tyoe</option>
                  <option value="GGC">Good Governance</option>
                  <option value="JM">JM</option>
                </select>
                <input
                  type="number"
                  {...register("telephoneNo")}
                  className="form-control w-50"
                  placeholder="Enter your Number"
                />
                <input
                  type="password"
                  {...register("pin")}
                  className="form-control w-50"
                  placeholder="Enter your pin"
                />
  
                <div className="d-flex  justify-content-between w-100">
                  <button
                    onClick={() => setShowReset(true)}
                    role="button"
                    // style={{ fontSize: "12px" }}
                    className="btn btn-info text-light"
                  >
                    Reset pin
                  </button>
  
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                </div>
              </form></div>
              )
            }
            {/* 
              if showLogin turns to false then we'll show list of transactions
             */}
            {
                !showLogin  && (
                <div>
                  <h1 className="text-center">Transactions</h1>
                  <small className="text-center">View your transaction</small>

                  <div className="p-3">
                    {/* SELECT START AND END DATES */}
                    <div className="d-flex gap-2 my-3">
                      <div>
                        <label htmlFor="">Start Date</label> <br />
                        <input type="date" placeholder="End Date" className="form-control"/>
                      </div>
                      <div>
                        <label htmlFor="">End Date</label> <br />
                        <input type="date" placeholder="Start Date" className="form-control"/>
                      </div>
                      <button className="btn btn-success align-self-end">Search</button>
                    </div>
                    {/* END OF START AND END DATE */}

                    {/* LISTING OUT TRANSACTIONS TABLES */}
                    <TableContainer component={Paper} >
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Sno</TableCell>
                            <TableCell>DATE</TableCell>
                            <TableCell>Amount</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            transactions.length > 0 ? (
                              transactions.map((each,i)=>(
                                <TableRow>
                                <TableCell>0000</TableCell>
                                <TableCell>23-10-23</TableCell>
                                <TableCell>10000</TableCell>
                              </TableRow>
                              ))
                            ): (<p className="text-danger lead text-center">No transaction availablle</p>)
                          }
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
                )
            }
          </div>
        </div>
      </Modal>
    </div>
  );
}
