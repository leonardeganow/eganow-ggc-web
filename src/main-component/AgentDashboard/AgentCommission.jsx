import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import agentAPI from "../../api/grpcapi/AgentGRPC";
import useStore from "../../formstore/formStore";
import { toast } from "react-toastify";
import { FaDownload } from "react-icons/fa";
import { jsPDF } from "jspdf";
import { height } from "@mui/system";


// DATE FORMATTER FUNCTION
const formatDate = (dateString) => {
  // splitdate string
  let dateSplit = dateString?.split("-");
  return `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;
};

function AgentCommission() {

   // Get the current date
   const currentDate = new Date();

   // Get the last month's date
   const lastMonthDate = new Date();
   lastMonthDate.setMonth(currentDate.getMonth() - 1);
 
   // Format the dates as strings (you can customize the format as needed)
   const formattedCurrentDate = currentDate.toISOString().split("T")[0];
   const formattedLastMonthDate = lastMonthDate.toISOString().split("T")[0];


  // CHANGE DATE STATES
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const { info } = useStore();
  const agentCode = localStorage.getItem("agentid");

 

  //ANCHOR - GETTING THE GET MEMBER TRANSACTION API FUNCTION
  const { getMemberTransactions } = agentAPI();

  const [transaction, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //TODO CONSUME DATA FROM API
  async function consumeTransactions(s,d) {
    //ANCHOR GRABBING GLOBAL STATE VARIABLES
    try {
      setIsLoading(true);
      //ANCHOR - GETTING LIST OF MEMEBERS TRANSACTIONS
      const data = {
        Agentid: agentCode,
        Membertype: "GGC",
        startDate: formatDate(s),
        endDate: formatDate(d)
      };
      console.log(data)
      const getTrans = await getMemberTransactions(data);
      setIsLoading(false);
      if (getTrans) {
        setTransactions(getTrans.transactionlistList); //ANCHOR - SETTING THE VALUE TO THE STATE
        console.log(getTrans.transactionlistList);
      }
    } catch (err) {
      setIsLoading(false);
      toast.error("Network Error");
      console.log(err);
    }
  }



  const submitTransaction = ()=>{
    // let start = formatDate(startDate)
    // let end  = formatDate(endDate)
    // console.log(start, end)
    consumeTransactions(startDate,endDate)
  }

  useEffect(() => {
    setEndDate(formattedCurrentDate)
    setStartDate(formattedLastMonthDate)
    consumeTransactions(formattedLastMonthDate,formattedCurrentDate);
  }, []);

  function downloadHistory() {
    const pdf = new jsPDF();

    const title = "Member Transaction Details Report";
    const titleWidth =
      (pdf.getStringUnitWidth(title) * pdf.internal.getFontSize()) /
      pdf.internal.scaleFactor;
    const centerX = (pdf.internal.pageSize.width - titleWidth) / 2;

    pdf.text(title, centerX, 15);

    // const heading = `Customer name: ${props.formHandler.getValues("fullName")}`;
    // const customerCardtype = `Card type: ${props.formHandler.getValues(
    //   "plan"
    // )}`;
    pdf.setFontSize(12);

    // pdf.text(heading, 10, 40);
    // pdf.setFontSize(12);
    // pdf.text(customerCardtype, 10, 47);

    const columns = [
      { header: "Member name", dataKey: "membername" },
      { header: "Mobile number", dataKey: "mobilenumber" },
      { header: "Amount", dataKey: "transamount" },
      { header: "Status", dataKey: "transstatus" },
      { header: "card type", dataKey: "cardid" },

      // { header: "Type", dataKey: "type" },
      // Add more columns as needed
    ];

    pdf.autoTable({
      head: [columns.map((column) => column.header)],
      body: transaction.map((item) =>
        columns.map((column) => {
          return item[column.dataKey];
        })
      ),
      startY: 30,
    });

    pdf.save("membertansactions.pdf");
  }

  return (
    <div className="p-md-5 p-4" style={{ height: "100vh" }}>
      {/* NOTE PAGE HEADING */}
      <div>
        <h1 className="text-muted">Agent Transactions</h1>
        <small>List of your transactions</small>
      </div>

      {/* NOTE LIST OF TRANSACTION (TABLE) */}
      <div className="my-md-3 my-4 h-50">
        <div className="d-flex justify-content-end py-3">
          <button
            onClick={downloadHistory}
            className="btn btn-success btn-sm d-inline-flex align-items-center gap-2"
          >
            <FaDownload /> Download
          </button>
        </div>

        <div className="col-md-6 align-self-end">
          <div>
            <form
              className="my-3"
            >
              {/* forms cards */}
              <div className="row">
                <div className="col-12 col-md-4">
                  <div>
                    <label htmlFor="">Start Date</label> <br />
                    <input
                      value={startDate}
                      type="date"
                      placeholder="End Date"
                      className="form-control"
                      onChange={(e) => setStartDate(e.target.value)}
                      
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div>
                    <label htmlFor="">End Date</label> <br />
                    <input
                      value={endDate}
                      type="date"
                      placeholder="End Date"
                      className="form-control"
                      
                      required
                    onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  className="col-12 col-md-4"
                  style={{ paddingLeft: "10px" }}
                >
                  <button
                    // onClick={() => onSubmitTransaction()}
                    onClick={() => submitTransaction(startDate, endDate)}
                    style={{ marginTop: "20px" }}
                    type="button"
                    className="btn btn-success w-100 "
                  >
                    {isLoading ? (
                      <span className="spinner-border spinner-border-sm mr-1"></span>
                    ) : (
                      // <FaSearch className="" />
                      "search"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="pb-5 shadow-lg rounded" style={{ height: "70vh", overflowY: "auto" }}>
          <TableContainer sx={{ minWidth: 650, maxHeight: "100%" }} component={Paper}>
            <Table aria-label="simple table" stickyHeader>
              <TableHead className="bg-dark">
                <TableRow >
                  <TableCell className="fw-bold   fs-6">
                    Member Name
                  </TableCell>
                  <TableCell className="fw-bold   fs-6">
                    Mobile No.
                  </TableCell>
                  <TableCell className="fw-bold fs-6">
                    Amount
                  </TableCell>
                  <TableCell className="fw-bold fs-6">
                    trans-status
                  </TableCell>
                  <TableCell className="fw-bold fs-6">
                    Card Type
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {transaction.length > 0 ? (
                  transaction.map((trans, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {trans.membername}
                        </TableCell>
                        <TableCell>
                          <span className="bg-success text-white px-2 py-1 rounded-pill">
                            {trans.paymentaccountnumberormomonumber}
                          </span>
                        </TableCell>
                        <TableCell>GHS {trans.transamount.toFixed(2)}</TableCell>
                        <TableCell>{trans.transstatus}</TableCell>
                        <TableCell>{trans.cardname}</TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="fw-bold text-danger fs-3"
                      align="center"
                    >
                      {" "}
                      {isLoading ? (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      ) : (
                        "no data available"
                      )}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

      </div>
    </div>
  );
}

export default AgentCommission;
