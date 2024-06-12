import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import agentAPI from "../../api/grpcapi/AgentGRPC";
// import useStore from "../../formstore/formStore";
import { toast } from "react-toastify";
import { FaDownload } from "react-icons/fa";
import { jsPDF } from "jspdf";

function AgentRegisteredUsers() {
  // const { info } = useStore();
  //ANCHOR - GETTING THE GET MEMBER TRANSACTION FUNCTION
  const { getMemberCreateByAgent } = agentAPI();
  const agentCode = localStorage.getItem("agentid");

  const [regMembers, setRegMembers] = useState([]); //ANCHOR - SETTING STATE TO KEEP THE ARRAY OF MEMEBERS
  const [isLoading, setIsLoading] = useState(false); //ANCHOR - SETTING STATE TO KEEP THE ARRAY OF MEMEBERS
  //TODO CONSUME DATA FROM API
  async function consumeRegisteredMembers() {
    //ANCHOR GRABBING GLOBAL STATE VARIABLES
    const data = {
      agentId: agentCode,
      Membertype: "GGC",
    };
    try {
      setIsLoading(true);
      const getRegisteredMembers = await getMemberCreateByAgent(data);
      setIsLoading(false);
      if (getRegisteredMembers) {
        setRegMembers(getRegisteredMembers.membersList);
        console.log(getRegisteredMembers.membersList);
      }
    } catch (err) {
      setIsLoading(false);
      toast.error("Network Error");
    }
  }

  useEffect(() => {
    consumeRegisteredMembers();
  }, []);

  const alterdRegMembers = regMembers.map((item, i) => {
    const formatDate = new Date(item.registrationdate).toLocaleDateString();

    return { ...item, registrationdate: formatDate };
  });

  function download() {
    const pdf = new jsPDF();

    const title = "Registered Members";
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
      { header: "Registrationdate", dataKey: "registrationdate" },
      { header: "Member name", dataKey: "membername" },
      { header: "Card number", dataKey: "cardnumber" },
      { header: "Member id", dataKey: "memberid" },
      { header: "Card type", dataKey: "cardname" },

      // { header: "Type", dataKey: "type" },
      // Add more columns as needed
    ];

    pdf.autoTable({
      head: [columns.map((column) => column.header)],
      body: alterdRegMembers.map((item) =>
        columns.map((column) => {
          return item[column.dataKey];
        })
      ),
      startY: 30,
    });

    pdf.save("registeredmembers.pdf");
  }

  return (
    <div className="p-md-5 p-4" style={{ height: "100vh" }}>
      {/* NOTE PAGE HEADING */}
      <div>
        <h1 className="text-muted">Registered Members</h1>
        <small>List of your registered members</small>
      </div>

      {/* NOTE LIST OF TRANSACTION (TABLE) */}
      <div className="my-md-5 my-4">
        <div className="d-flex justify-content-end py-3">
          <button
            onClick={download}
            className="btn btn-success btn-sm d-inline-flex align-items-center gap-2"
          >
            <FaDownload /> Download
          </button>
        </div>

        <div style={{ height: "70vh", overflowY: "auto" }}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, maxHeight: "100%" }}
              aria-label="simple table"
            >
              <TableHead aria-label="simple table" stickyHeader>
                <TableRow>
                  <TableCell className="fw-bold text-muted fs-6">
                    Reg. Date
                  </TableCell>
                  <TableCell className="fw-bold text-muted fs-6">
                    Member Name
                  </TableCell>
                  <TableCell className="fw-bold text-muted fs-6">
                    Card Number
                  </TableCell>
                  <TableCell className="fw-bold text-muted fs-6">
                    Member ID
                  </TableCell>
                  <TableCell className="fw-bold text-muted fs-6">
                    Card type
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {regMembers.length > 0 ? (
                  regMembers.map((member, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {new Date(member.registrationdate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <span className="s text-dark px-2 py-1 rounded-pill">
                            {member.membername}
                          </span>
                        </TableCell>
                        <TableCell>{member.cardnumber}</TableCell>
                        <TableCell>{member.memberid}</TableCell>
                        <TableCell>{member.cardname}</TableCell>
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

export default AgentRegisteredUsers;
