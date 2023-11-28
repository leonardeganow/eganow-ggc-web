import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import membersGRPC from "../../api/grpcapi/membersGRPC";
import { toast } from "react-toastify";

// MATERIAL UI FOR TABLE
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TransactionAPI from "../../api/grpcapi/TransactionGRPC";
import { Avatar, Skeleton } from "@mui/material";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const style = {
  position: "relative",
  top: "54%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "auto",
  width: "95vw", // Use viewport width
  maxWidth: "800px", // Set a maximum width if needed
  boxShadow: "40px",
  padding: "1rem",
  overflow: "auto",
  maxHeight: "600px",
  borderRadius: "1rem",
};
export default function TransactionsModal({ open, handleClose }) {
  const { getTransactions } = TransactionAPI();
  const { loginMember } = membersGRPC();
  const [showLogin, setShowLogin] = useState(true); //state to show or hide the login page
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransaction] = useState([]); //transaction data
  const { showReset, setShowReset } = useState(false);
  const [showTable, setShowTable] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      memeberType: "",
      startDate: "",
      endDate: "",
      memberid: "",
    },
  });

  watch(() => setIsLoading(false));

  // DATE FORMATTER FUNCTION
  const formatDate = (dateString) => {
    // splitdate string
    let dateSplit = dateString?.split("-");
    return `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;
  };


  // function to get all tranactions
  const onSubmitTransaction = async (data) => {
    setIsLoading(true);
    const formatedData = {
      ...data,
      startDate: formatDate(data?.startDate), //sending formated startDate
      endDate: formatDate(data?.endDate), //seending formated endDate
    };
    try {
      // sending api request
      const transaction = await getTransactions(formatedData);
      setIsLoading(false);
      setShowTable(true);
      setTransaction(transaction.translistList); //assigning the reponse to the state
    } catch (err) {
      if (err.message) {
        setIsLoading(false);
        toast("Network Error");
      }
      console.log(err);
    }
  };

  // onSubmitTransaction()

  //login member
  const login = async (data) => {
    setIsLoading(true);
    try {
      const response = await loginMember(data);
      if (response.message == "Success" && response.status == true) {
        // set showloging to false in other to display list of transactions
        setShowLogin(false);
        setIsLoading(false);
        // setting the member id value from the response
        setValue("memberid", response.memberid);
        console.log("loginresp", response);
        toast(response.message);
        setIsLoading(false);
      } else {
        toast(response.message);
        setIsLoading(false);

      }
    } catch (error) {
      if (error.message) {
        setIsLoading(false);
        toast("Network Error");
      }
    }
  };

  // STATUS STYLINg
  function statusStyles(status) {
    switch (status) {
      case "FAILED":
        return "bg-danger text-white p-1 rounded fw-semibold";
        break;
      case "PENDING":
        return "bg-warning text-black p-1 rounded fw-semibold";
        break;
      case "SUCCESSFUL":
        return "bg-success text-white p-1 rounded fw-semibold";
        break;
      default:
        return "";
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-white p-md-4 p-3" style={style}>
          <div>
            {/* if show login is true show the login page else hide */}
            {showLogin == true && (
              <div className="mx-auto ">
                <h1 className="text-center">Login</h1>
                <p className="text-center">Login to view transactions</p>
                <form
                  onSubmit={handleSubmit(login)}
                  className="d-flex flex-column gap-4 align-items-center"
                >
                  {/* SELECT INPUT FOR USER TO SELECT HIS MEMBER TYPE */}
                  <select
                    name=""
                    id=""
                    className="form-control w-100"
                    {...register("role")}
                    required
                    hidden
                  >
                    <option value="GGC">Select Type</option>
                    <option value="GGC">Good Governance</option>
                    <option value="JM">JM</option>
                  </select>
                  <input
                    type="text"
                    {...register("telephoneNo")}
                    className="form-control w-100"
                    placeholder="Enter your Number or Email"
                    required
                  />
                  <input
                    type="password"
                    {...register("pin")}
                    className="form-control w-100"
                    placeholder="Enter your pin"
                    required
                    maxlength={4}
                  />

                  <div className="d-flex  justify-content-center w-md-50 w-100">
                    {/* RESETBUTTON */}
                    {/* <button
                    onClick={() => setShowReset(true)}
                    role="button"
                    className="btn btn-info text-light"
                  >
                    Reset pin
                  </button> */}

                    <button type="submit" className="btn btn-success w-100">
                      {isLoading ? (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      ) : (
                        "Login"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
            {/* 
              if showLogin turns to false then we'll show list of transactions
             */}
            {!showLogin && (

              <div className="">
                <div className="">
                  <h1 className="text-center m-0 p-0">Transactions</h1>
                  <p className="text-center m-0 p-0">View your transaction</p>
                  <hr />
                </div>

                <div className="p-3">
                  <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                      <h6 className="text-muted">Donated Amount</h6>
                      <h2 className="display-5 text-success fw-bold">GH₵ 3000</h2>
                      {/* card */}
                      <div className="  ">
                        <Skeleton variant="rectangular" width={"100%"} height={150}>
                          <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" className="w-25" />
                        </Skeleton>
                      </div>
                    </div>


                    {/* search form */}
                    <div className="col-md-6 align-self-end">
                      <div>
                        <form
                          onSubmit={handleSubmit(onSubmitTransaction)}
                          className="mt-3"
                          // className="d-flex flex-md-row flex-column flex-wrap gap-2 my-md-3 justify-content-center py-2"
                        >
                          {/* forms cards */}
                          <div className="row">
                            <div className="col-5 col-md-12">
                              <div>
                                <label htmlFor="">Start Date</label> <br />
                                <input
                                  type="date"
                                  placeholder="End Date"
                                  className="form-control"
                                  {...register("startDate")}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-5 col-md-12">
                              <div>
                                <label htmlFor="">End Date</label> <br />
                                <input
                                  type="date"
                                  placeholder="Start Date"
                                  className="form-control"
                                  {...register("endDate")}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-2 col-md-12" style={{paddingLeft: "5px"}}>
                              <button
                              style={{marginTop: "20px"}}
                                type="submit"
                                className="btn btn-success w-100"
                              >
                                {isLoading ? (
                                  <span className="spinner-border spinner-border-sm mr-1"></span>
                                ) : (
                                  <FaSearch  className=""/>
                                )}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* end of search form */}
                  </div>
                  <div className="row justify-content-around my-3  align-items-center">
                    <div className="col-6"><button className="btn btn-danger w-100">Top Up</button></div>
                    <div className="col-6"><button className="btn btn-success w-100">Download</button></div>

                  </div>
                  {/*  */}
                  {/* SELECT START AND END DATES */}

                  {/* END OF START AND END DATE */}

                  {/* LISTING OUT TRANSACTIONS TABLES */}
                  {showTable == false ? (
                    ""
                  ) : (
                    <TableContainer component={Paper} className=" py-3" style={{ height: "400px", overflow: "auto",backgroundColor:"#f0fcfc" }}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell className="fw-bold" style={{minWidth:"100px"}}>Date</TableCell>
                            <TableCell className="fw-bold" style={{minWidth:"150px"}}>Name</TableCell>
                            <TableCell className="fw-bold text-center" style={{minWidth:"100px"}}>Amount</TableCell>
                            <TableCell className="fw-bold" style={{minWidth:"100px"}}>Status</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody className="p-3">
                          {/* check if there are transactinos */}
                          {transactions.length > 0 ? (
                            // if there are transaction then we map through to display the rows
                            transactions.map((each, i) => (
                              <TableRow key={i}>
                                <TableCell>
                                  {new Date(each.date).toLocaleDateString("en-GB")}
                                </TableCell>
                                <TableCell>{each.membername}</TableCell>
                                <TableCell className="text-center">GH {each.amount}</TableCell>
                                <TableCell>
                                  <span className={`${statusStyles(each.status)}`}>
                                    {each.status}
                                  </span>
                                </TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <TableRow>
                              <TableCell colSpan={4} className="text-danger lead text-center fs-4">
                                No transactions availablle
                              </TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
