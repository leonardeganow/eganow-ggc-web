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

const style = {
  position: "relative",
  top: "54%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95vw", // Use viewport width
  maxWidth: "800px", // Set a maximum width if needed
  boxShadow: "40px",
  padding: "1rem",
  overflowY: "auto",
  height : "auto",
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
      }else{
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
        return "bg-danger text-white p-2 rounded fw-semibold";
        break;
      case "PENDING":
        return "bg-warning text-black p-2 rounded fw-semibold";
        break;
      case "SUCCESSFUL":
        return "bg-success text-white p-2 rounded fw-semibold";
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
              <div className="w-50 mx-auto">
                <h1 className="text-center">Login</h1>
                <p className="text-center">Login to view transactions</p>
                <form
                  onSubmit={handleSubmit(login)}
                  className="d-flex flex-column align-items-center gap-4"
                >
                  {/* SELECT INPUT FOR USER TO SELECT HIS MEMBER TYPE */}
                  <select
                    name=""
                    id=""
                    className="form-control w-md-50 w-100"
                    {...register("role")}
                  >
                    <option value="GGC">Select Type</option>
                    <option value="GGC">Good Governance</option>
                    <option value="JM">JM</option>
                  </select>
                  <input
                    type="text"
                    {...register("telephoneNo")}
                    className="form-control w-md-50 w-100"
                    placeholder="Enter your Number or Email"
                    required
                  />
                  <input
                    type="password"
                    {...register("pin")}
                    className="form-control w-md-50 w-100"
                    placeholder="Enter your pin"
                    required
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
              <div>
                <h1 className="text-center">Transactions</h1>
                <p className="text-center">View your transaction</p>

                <div className="p-3">
                  {/* SELECT START AND END DATES */}
                  <form
                    onSubmit={handleSubmit(onSubmitTransaction)}
                    className="d-flex flex-wrap gap-2 my-md-3 justify-content-center py-2"
                  >
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
                    <button
                      type="submit"
                      className="btn btn-success align-self-end"
                    >
                      {isLoading ? (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      ) : (
                        "Search"
                      )}
                    </button>
                  </form>
                  {/* END OF START AND END DATE */}

                  {/* LISTING OUT TRANSACTIONS TABLES */}
                  {showTable == false ? (
                    ""
                  ) : (
                    <TableContainer component={Paper} className="bg-white py-3" style={{height:"450px", overflow:"auto"}}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Status</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody className="p-3">
                          {/* check if there are transactinos */}
                          {transactions.length > 0 ? (
                            // if there are transaction then we map through to display the rows
                            transactions.map((each, i) => (
                              <TableRow key={i}>
                                <TableCell>
                                  {new Date(each.date).toDateString()}
                                </TableCell>
                                <TableCell>{each.membername}</TableCell>
                                <TableCell>{each.amount}</TableCell>
                                <TableCell>
                                  <span className={statusStyles(each.status)}>
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
